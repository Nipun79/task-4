<template>
  <div>
    <div>
      <div v-if="data.access">
        <div v-if="data.sections.header.access">
          <Header />
        </div>
        <div v-else>
          <h3>Access Denied</h3>
        </div>
        <div v-if="data.sections.content.access">
          <User />
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
  </div>
</template>

<script>
import User from "../components/User.vue";
import Component from "vue-class-component";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Vue from "vue";
import { vxm } from "../store/store.vuex";

@Component({
  components: {
    User,
    Header,
    Footer,
  },
})
export default class extends Vue {
  data = vxm.utility.permissions.user;
}
</script>

<style>
</style>