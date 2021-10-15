<template>
  <v-card style="padding: 100px 400px; font-weight: 800">
    <div v-for="(item, i) in fields" :key="i">
      <div v-if="per[i]">
        <v-text-field :label="fields[i]"></v-text-field>
      </div>
      <div v-else>
          Access Denied
      </div>
    </div>
    <div v-if="per[4]">
    <v-slider
      color="black"
      label="Salary"
      min="1"
      max="1000000"
      thumb-label
    ></v-slider>
    </div>
    <div v-else>
        <v-text>Access Denied</v-text>
    </div>
    <div v-if="per[5] ">
    <v-radio-group v-model="radioGroup" label="Gender">
      <v-radio label="Male"></v-radio>
      <v-radio label="Female"></v-radio>
    </v-radio-group>
    </div>
    <div v-else>
        <v-text>Access Denied</v-text>
    </div>
    <div v-if="per[6]">
    <v-radio-group v-model="radioGroup" label="Relationship Status">
      <v-radio label="Married"></v-radio>
      <v-radio label="Single"></v-radio>
    </v-radio-group>
    </div>
    <div v-else>
        <v-text>Access Denied</v-text>
    </div>
  </v-card>
</template>
<script>
import { vxm } from "../store/store.vuex";
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class Transaction extends Vue {
  fields = ["Name", "E-mail", "Phone", "Age"];
  data = vxm.utility.permissions.user.sections.content.sections;
  per = [
    this.data.name.access,
    this.data.email.access,
    this.data.phone.access,
    this.data.age.access,
    this.data.salary.access,
    this.data.gender.access,
    this.data.relationship.access
  ];
}
</script>

<style>
</style>