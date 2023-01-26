<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      accessToken: 'login/getAccessToken',
    })
  },
  created() {
    if (!this.accessToken) {
      this.$router.push({path: '/login'})
    }
  },

  data: () => ({
    //
  }),
};
</script>
