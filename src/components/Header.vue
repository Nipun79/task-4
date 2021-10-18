<template>
  <div>
    <v-card class="mx-auto" style="margin-top: -60px">
      <v-toolbar flat class="d-flex justify-sm-space-around" fade-img-on-scroll>
        <router-link
          to="/home"
          class="black--text"
          style="text-decoration: none"
          >HOME</router-link
        >
        <router-link
          to="/users"
          class="black--text ms-5"
          style="text-decoration: none"
          >USER</router-link
        >
        <router-link
          to="/transactions"
          class="black--text ms-5"
          style="text-decoration: none"
          >TRANSACTIONS</router-link
        >

        <v-spacer></v-spacer>
        <div v-if="isLogged">
          <router-link
            to="/"
            class="black--text ms-5"
            style="text-decoration: none"
            >LOGIN</router-link
          >
        </div>
        <div v-else>
          <router-link
            to="/"
            class="black--text ms-5"
            style="text-decoration: none"
            @click="logout"
            >LOGOUT</router-link
          >
        </div>
      </v-toolbar>

        

    <!-- <v-app-bar
      absolute
      color="white"
      elevation="2"
      flat
      style="margin-top: -60px"
    >
      <v-tabs align-with-title>
        <v-tab>
          <router-link
            to="/home"
            class="black--text"
            style="text-decoration: none"
            >HOME</router-link
          ></v-tab
        >
        <v-tab>
          <router-link
            to="/users"
            class="black--text ms-5"
            style="text-decoration: none"
            >USER</router-link
          ></v-tab
        >
        <v-tab>
          <router-link
            to="/transactions"
            class="black--text ms-5"
            style="text-decoration: none"
            >TRANSACTIONS</router-link
          >
        </v-tab>
          <v-tab v-if="isLogged">
            <router-link
              to="/"
              class="black--text ms-5"
              style="text-decoration: none"
              >LOGIN</router-link
            >
          </v-tab>
       

          <v-tab v-else>
            <router-link
              to="/"
              class="black--text ms-5"
              style="text-decoration: none"
              @click="logout"
              >LOGOUT</router-link
            >
          </v-tab>
        
      </v-tabs>
    </v-app-bar> -->

    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { vxm } from "../store/store.vuex";
@Component()
export default class Header extends Vue {
  isLogged = false;
  logout() {
    localStorage.removeItem("userId");
  }
}
</script>

<style scoped>
a.router-link-active {
  color: red;
}

.router-link li {
  list-style: none;
  margin: 0 12px;
}
.router-link li a {
  position: relative;
  color: #333;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-decoration: none;
}
.router-link li a:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: #34efdf;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.router-link li a:hover:before {
  width: 100%;
}
.router-link li.center a:before {
  left: 50%;
  transform: translateX(-50%);
}
.router-link li.upward a:before {
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.router-link li.upward a:hover:before {
  bottom: 0px;
  opacity: 1;
}
.router-link li.forward a:before {
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.router-link li.forward a:hover:before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>