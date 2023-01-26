<template>
  <v-app-bar
      app
      color="deep-purple"
      dark
      height="80px"
  >
    <v-btn
    color="deep-purple lighten-3"
    @click="home"
    >
      Home
    </v-btn>
    <v-spacer/>
    <div style="font-size: 40px">
      <Icon icon="logos:productboard-icon" class="mr-7"/>LOGİN</div>
    <v-spacer/>
  </v-app-bar>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  name: "LoginBar",
  components: {
    Icon,
  },
  methods: {
    home() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>