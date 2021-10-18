<template>
  <div class="main">
    <v-card
      elevation="2"
      style="padding: 50px; padding-bottom: 0; height: 350px; width: 500px"
    >
      <form>
        <h3 class="text text-center">SIGN IN</h3>
        <v-text-field v-model="name" label="Name" required></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-btn class="mr-4 primary" @click="submit"> Login </v-btn>
        <br /> <br>
        <v-alert
          outlined
          type="warning"
          prominent
          border="left"
          v-if="message"
          dense
        >
          {{ message }}
        </v-alert>
      </form>
    </v-card>
  </div>
</template>

<script >
import Vue from "vue";
import Component from "vue-class-component";
import { vxm } from "../store/store.vuex";
@Component({})
export default class extends Vue {
  name = "";
  password = "";
  tasks = [];
  getId = vxm.utility;
  val = false;
  message = "";
  async submit() {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((item) => {
        item.forEach((data) => {
          if (data.name === this.name && data.password == this.password) {
            this.name = "";
            this.password = "";
            vxm.utility.userId = data.id;
            localStorage.setItem("userId", data.id);
            this.val = true;
            // console.log("access:",this.data.permissions)
            this.$router.push(
              this.$route.query.redirect || `/accesscontroller`
            );
          }
        });
    if (this.val === false) {
      this.message = "Incorrect Name Or Password";
    }
      }
      
      );
   let res= await fetch("http://localhost:3000/users",{
     method:'POST' ,
     headers:{
       "Content-type":"application/json",
       "Accept":"application/json"
     },
    body: JSON.stringify(item)
   })
   res= await res.json()
   console.log(res)
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>