<template>
  <div>
    <personp-product-bar/>
    <v-container>
      <v-row>
        <v-col cols="3" class="pa-2" v-for="item in newAllProduct[0]" :key="item.id">
          <v-card
              class="mx-auto"
              max-width="344"
              outlined
              min-height="100%"
          >
            <v-img
                :src="item.images[0]"
                height="200px"/>
            <v-card-title class="justify-center">
              {{item.title}}
            </v-card-title>
            <v-card-subtitle class="justify-center" style="font-size: 18px">
              Fyat : {{item.price}} $
            </v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-btn
                  color="deep-purple"
                  text
                  left
                  @click="addProduct(item)"
              >
                Sepete ekle
              </v-btn>
              <v-btn
                  color="deep-purple"
                  text
                  right
                  @click="removeProduct(item)"
              >
                Sil
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import PersonpProductBar from "@/components/PersonProductBar/PersonpProductBar.vue";
export default {
  name: "PersonalProducts",
  components:{
    PersonpProductBar,
  },
  computed: {
    ...mapGetters({
      newAllProduct: 'product/getNewProduct',
      BasketProduct:'shopBar/getProduct'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$store.state.product.newAllProducts = []
    next()
  },
  methods: {
    addProduct(item) {
      this.$store.commit('shopBar/addProduct', item)
    },
    removeProduct(item) {
      this.$store.commit('shopBar/removeProduct', item);
    }
  }
}
</script>

<style scoped>

</style>