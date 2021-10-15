<template>
<div >
  <div v-if="data.home.access">
   <div v-if="data.home.sections.header.access"> 
   <Header/>
   </div>
   <div v-else>
    <h3>Access Denied</h3>
   </div>
   <br>
   <br>
   <div v-if="data.home.sections.content.access"> 
   <Products/>
   </div>
   <div v-else>
    <h3>Access Denied</h3>
   </div>
   <br><br>
   <div v-if="data.home.sections.footer.access"> 
   <Footer/>
   </div>
   <div v-else>
    <h3>Access Denied</h3>
   </div>
   </div>
    <div v-else>
    {{ this.$router.push(this.$route.query.redirect || `/404`)}}
   </div>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
  import Products from "../components/Products.vue"
  import {vxm} from "../store/store.vuex"
  import Component from "vue-class-component"
  @Component({
    components:{
     Header,
     Footer,
     Products
    }
  })
  export default class extends Vue{
    data=vxm.utility.permissions
  }
 
</script>
