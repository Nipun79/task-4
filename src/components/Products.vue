<template>
  <v-container fluid>
    <br />
    <br />
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex" >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
          </v-img>

          <v-card-title v-text="card.title"></v-card-title>

          <v-card-subtitle v-text="`Rs.` + card.price"> </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <br />
  </v-container>
</template>
<script>
import { vxm } from "../store/store.vuex";
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class Products extends Vue {
  
  cards = [
    {
      title: "Orange Jacket",
      src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80",
      flex: 4,
      price: 100,
    },
    {
      title: "Blue Jacket ",
      src: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80",
      flex: 4,
      price: 600,
    },
    {
      title: "Black T-shirt",
      src: "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80",
      flex: 4,
      price: 700,
    },
  ];
}
</script>