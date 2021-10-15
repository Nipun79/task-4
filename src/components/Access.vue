<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="800"
      style="padding: 10px; font-weight: 800"
    >
      <div v-for="(item, index) in items" :key="index">
        <p></p>
        <v-switch
          :label="item.name"
          color="success"
          v-model="item.access"
          @click="change(item.name)"
        ></v-switch>
        <div v-for="(section, i) in item.sections" :key="i">
          <div style="margin-left: 50px; margin-top: -15px">
            <v-switch
              :label="section.name"
              color="success"
              v-model="section.access"
              @click="change(item.name + '' + section.name)"
            ></v-switch>
            <div v-if="section.name === 'content'">
              <div
                v-for="(content, i) in item.sections.content.sections"
                :key="i"
              >
                <div style="margin-left: 50px; margin-top: -15px">
                  <v-switch
                    :label="content.name"
                    color="success"
                    v-model="content.access"
                    @click="change(item.name + '-content')"
                  ></v-switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              depressed
              color="primary"
              @click="save"
            >
              Save
            </v-btn>
          </template>

          <v-card class="p-5">
            <v-alert dense text type="success" style="height: 80px">
              You're Changes are <strong>made successfully</strong>
            </v-alert>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false"> Okay </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
  </div>
</template>
<script >
import Vue from "vue";
import Component from "vue-class-component";
import { vxm } from "../store/store.vuex";
@Component
export default class AccesController extends Vue {
  data = vxm.utility;
  items = {};
  async mounted() {
    await vxm.utility.fetchData();
    this.items = JSON.parse(JSON.stringify(this.data.permissions));
  }
  save() {
    this.data.setPermissions(this.items);
  }
  dialog = false;
  event = "";
  change(event) {
      let home = this.items.home.sections;
      console.log(event);
    
    if (
      event === "homefooter" ||
      event === "homeheader" ||
      event === "homecontent"
    ) {
      if (this.items.home.access === false) {
        
        this.items.home.sections.header.access = !this.items.home.sections.header.access;
        alert("Parent is not active"); 
        this.items.home.sections.footer.access = false;
        this.items.home.sections.content.access = false;
      }
    }

    if (event === "home") {
    
      home.header.access = false;
      home.footer.access = false;
      home.content.access = false;
    }
    if (event === "user") {
      let user = this.items.user.sections;
      user.header.access = false;
      user.footer.access = false;
      user.content.access = false;
      // event = "user-content";
    }
    if (event === "transaction") {
      let transaction = this.items.transaction.sections;
      transaction.header.access = false;
      transaction.footer.access = false;
      transaction.content.access = false;
      // event = "transaction-content";
    }
    // if (event === "user-content") {
    //   let user = this.items.user.sections.content.sections;
    //   user.name.access = false;
    //   user.phone.access = false;
    //   user.age.access = false;
    //   user.salary.access = false;
    //   user.gender.access = false;
    //   user.email.access = false;
    //   user.relationship.access = false;
    //   console.log("changed");
    // }
    // if (event === "transaction-content") {
    //   let transaction = this.items.transaction.sections.content.sections;
    //   transaction.goods.access = false;
    //   transaction.services.access = false;
    //   transaction.inbound.access = false;
    //   transaction.outbound.access = false;
    // }
  }
}
</script>
<style>
</style>