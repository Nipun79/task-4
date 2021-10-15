<template>
  <div>
    <div v-if="data.access">
      <div v-if="data.sections.header.access">
        <Header />
      </div>
      <div v-else>
        <h3>Access Denied</h3>
      </div>
      <div v-if="data.sections.content.access">
        <Transaction />
      </div>
      <div v-else>
        <h3>Access Denied</h3>
      </div>
      <div v-if="data.sections.footer.access">
        <Footer />
      </div>
      <div v-else>
        <h3>Access Denied</h3>
      </div>
    </div>
    <div v-else>
      {{ this.$router.push(this.$route.query.redirect || `/404`) }}
    </div>
  </div>
</template>

<script>
import Transaction from "../components/Transaction.vue";
import Component from "vue-class-component";
import Footer from "../components/Footer.vue";
import Vue from "vue";
import { vxm } from "../store/store.vuex";
import Header from "../components/Header.vue";


@Component({
  components: {
    Transaction,
    Header,
    Footer,
  },
  updbeforeUpdateated() {
    vmx.utility.fetchData();
  },
})
export default class extends Vue {
  data = vxm.utility.permissions.transaction;
}
</script>

<style>
</style>