<template>
  <div>
        <v-card
      class="mx-auto"
      
      style="margin-top: -60px;"
    >
    <v-toolbar flat class="d-flex justify-sm-space-around" fade-img-on-scroll>
      <router-link to="/home" class="black--text" style="text-decoration: none"
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
    </v-toolbar>
     </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>