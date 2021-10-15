import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from "vuex-class-component";
import { Utility } from './Utility.vuex';
Vue.use(Vuex)
export  const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( Utility ),
  
  }
})
export const vxm = {
  utility: createProxy( store, Utility ),
} 

