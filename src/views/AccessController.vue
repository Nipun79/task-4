<template>
  <div>
    <Header />
    <br />
    <br />
    
    <Access />
    
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Access from "../components/Access.vue";
import { vxm } from "../store/store.vuex";
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  components: {
    Header,
    Footer,
    Access,
  },
})
export default class Tran extends Vue {
    isMounted=false
    // created(){
    // // vxm.utility.fetchData()
    //    this.fetchData()
       
    // }
    // fetchData(){
    //      fetch(`http://localhost:3000/users/${vxm.utility.userId}`).then((res)=>{return res.json()})
    //      .then(data=>vxm.utility.permissions=data.permissions)
    //     this.isMounted=true 
    // }
}
</script>
