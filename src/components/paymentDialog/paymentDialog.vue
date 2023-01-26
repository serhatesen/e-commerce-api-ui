<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="dialog=true"
               color="deep-purple"
               v-bind="attrs"
               v-on="on">
          <v-badge
              class="mt-2 white--text"
              v-bind="attrs"
              v-on="on"
              :content="$store.state.shopBar.BasketProduct.length"
          >
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>


      </template>

      <v-card color="deep-purple lighten-3">
        <v-card-title class="text-h5 deep-purple lighten-3">
          Siparişlerim
        </v-card-title>
        <v-card-text>
          <v-list color="deep-purple lighten-3">
            <v-list-item-group>
              <v-list-item v-for="item in $store.state.shopBar.BasketProduct" :key="item.index">
                <v-list-item-content>
                  <v-list-item-title style="font-size: 20px">{{item.title}}</v-list-item-title>
                  <v-list-item-subtitle style="font-size: 15px">{{item.price}} $</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="removeProduct(item)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <span class="d-block text-right mr-16" > Toplam Fiyat: {{totalPrice()}} $ </span>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined class="mr-4 mt-2" @click="dialog=false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "paymentDialog",

  data: () => ({
    dialog: false,
  }),
  methods:{
    removeProduct(item) {
      this.$store.commit('shopBar/removeProduct', item);
    },
    totalPrice(){
      let total = 0
      this.$store.state.shopBar.BasketProduct.forEach(item => {
        total += item.price
      })
      return total
    }
  }
}
</script>

<style scoped>

</style>