<template>
  <div>
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
        <Icon icon="openmoji:stick-figure-with-dress-leaning-right" style="font-size: 50px" class="mr-7 mt-3"/>Clothing And Accessories</div>
      <v-spacer/>
    </v-app-bar>
    <payment-dialog class="d-block text-right mx-3 my-3"/>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import {mapGetters} from "vuex";
import paymentDialog from "@/components/paymentDialog/paymentDialog.vue";
export default {
  name: "clothingBar",
  components: {
    Icon,
    paymentDialog
  },
  methods: {
    home() {
      this.$store.commit('product/setNewAllProduct',[])
      this.$router.push("/");
    }
  },
  computed:{
    ...mapGetters({
      BasketProduct:'shopBar/getProduct'
    })
  }
}
</script>

<style scoped>

</style>