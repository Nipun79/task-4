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
              @click.stop="change(item.name + '' + section.name)"
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
                    @click.stop="change(content.name + '-content')"
                  ></v-switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Succesfull-message -->
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
              <v-btn color="primary" text @click.stop="dialog = false">
                Okay
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!--  Error-message -->
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{text}}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </div>
</template>
<script >
import Vue from "vue";
import Component from "vue-class-component";
import { vxm } from "../store/store.vuex";
@Component
export default class AccesController extends Vue {
  snackbar = false;
  timeout = 2000;
  data = vxm.utility;
  text=""
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
  change(event, e) {
    console.log(event);

    if (event === "home") {
      let home = this.items.home.sections;
      home.header.access = false;
      home.footer.access = false;
      home.content.access = false;
    }

    if (
      event === "homefooter" ||
      event === "homeheader" ||
      event === "homecontent"
    ) {
      let home = this.items.home;
      if (home.access === false) {
        setTimeout(
          () =>
            (home.sections.header.access =
              home.sections.footer.access =
              home.sections.content.access =
                false),
          10
        );
        this.snackbar = true;
        this.text="Home is not active"
       }
    }

    if (event === "user") {
      let user = this.items.user.sections;
      user.header.access = false;
      user.footer.access = false;
      user.content.access = false;
      user = this.items.user.sections.content.sections;
      user.name.access = false;
      user.phone.access = false;
      user.age.access = false;
      user.salary.access = false;
      user.gender.access = false;
      user.email.access = false;
      user.relationship.access = false;
      // event = "usercontent";
    }

    if (event === "usercontent") {
      let user = this.items.user.sections.content.sections;
      user.name.access = false;
      user.phone.access = false;
      user.age.access = false;
      user.salary.access = false;
      user.gender.access = false;
      user.email.access = false;
      user.relationship.access = false;
    }

    if (
      event === "name-content" ||
      event === "email-content" ||
      event === "phone-content" ||
      event === "age-content" ||
      event === "gender-content" ||
      event === "salary-content" ||
      event === "relationship status-content"
    ) {
      let user = this.items.user.sections.content.sections;
      if (this.items.user.sections.content.access === false) {
        setTimeout(() => {
          user.name.access =
            user.phone.access =
            user.age.access =
            user.salary.access =
            user.gender.access =
            user.email.access =
            user.relationship.access =
              false;
        }, 10);
        this.snackbar = true;
        this.text="User's content is not active"
      }
    }

    if (
      event === "userheader" ||
      event === "usercontent" ||
      event === "userfooter"
    ) {
      if (this.items.user.access === false) {
        setTimeout(() => {
          this.items.user.sections.header.access =
            this.items.user.sections.content.access =
            this.items.user.sections.footer.access =
              false;
        }, 10);

        this.snackbar = true;
        this.text="User is not active"
      }
    }

    if (event === "transaction") {
      let transaction = this.items.transaction.sections;
      transaction.header.access = false;
      transaction.footer.access = false;
      transaction.content.access = false;
      transaction = this.items.transaction.sections.content.sections;
      transaction.goods.access = false;
      transaction.services.access = false;
      transaction.inbound.access = false;
      transaction.outbound.access = false;
    }

    if (event === "transactioncontent") {
      let transaction = this.items.transaction.sections.content.sections;
      transaction.goods.access = false;
      transaction.services.access = false;
      transaction.inbound.access = false;
      transaction.outbound.access = false;
    }

    if (
      event === "goods-content" ||
      event === "services-content" ||
      event === "inbound-content" ||
      event === "outbound-content"
    ) {
      if (this.items.transaction.sections.content.access === false) {
        let transaction = this.items.transaction.sections.content.sections;
        setTimeout(() => {
          transaction.goods.access =
            transaction.services.access =
            transaction.inbound.access =
            transaction.outbound.access =
              false;
        }, 10);
        this.snackbar = true;
        this.text="Transaction's content is not active"
      }
    }

    if (
      event === "transactionheader" ||
      event === "transactioncontent" ||
      event === "transactionfooter"
    ) {
      if (this.items.transaction.access === false) {
        let transaction = this.items.transaction.sections;
        setTimeout(() => {
          transaction.header.access =
            transaction.footer.access =
            transaction.content.access =
              false;
        }, 10);
        this.snackbar = true;
        this.text="Transaction is not active"
      }
    }
  }
}
</script>



 
 