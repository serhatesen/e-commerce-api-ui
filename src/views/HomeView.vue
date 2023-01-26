<template>
  <div class="home">
    <HomeBar/>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="deep-purple lighten-2 mt-8 elevation-10">
            <v-card-title class="mt-16 pa-16 ml-16 white--text " style="font-size: 50px;">
              <v-spacer/>
              <Icon class="mr-5" icon="emojione:shopping-bags"/>Kategoriden Seçiniz
              <v-spacer/>
            </v-card-title>
          </v-card>
          <v-img class="text-center mt-3">
            <Icon icon="flat-color-icons:shop" width="200" height="200"/>
          </v-img>
          <v-card class="deep-purple lighten-2 elevation-10 pa-3">
            <div class="font-weight-bold">Ürün Ekleme Bölümü</div>
            <v-text-field
                dense
                color="blue darken-2"
                label="Title"
                style="max-width: 30%"
                class="mx-auto font-weight-bold"
                v-model="title"
            >
            </v-text-field>
            <!--
            <v-autocomplete
                dense
                style="max-width: 30%"
                label="Category"
                class="mx-auto font-weight-bold"
                :items="$store.state.categories.categories.map(category => category.top_category)"
            >

            </v-autocomplete> -->
            <v-card-actions>
              <v-spacer/>
              <v-btn
                  class="white--text text-right"
                  color="deep-purple"
                  elevation="3"
                  style="color: aliceblue"
                  @click="newAddProducts"
              >
                Ekle
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeBar from "@/components/HomeBar/HomeBar.vue";
import { Icon } from '@iconify/vue2';
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "HomeView",
  components: {
    HomeBar,
    Icon
  },
  computed: {
    filteredFruits() {
      return this.my_fruits.filter(fruit => fruit.price < 3);
    },
    ...mapGetters({
      NewAddProduct : 'product/getNewAddProduct'
    })
  },
  methods:{
    ...mapActions({
      setNewAddProduct:'product/setNewAddProduct'
    }),
    newAddProducts(){
      const data = {
        title : this.title
      }
      axios.post('https://dummyjson.com/products/add', data)
          .then(response => {
            if (response.status === 201) {
              this.setNewAddProduct({title:response.data.title})
              console.log("Success")
            } else console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  data: () => ({
    title: "",
    my_fruits: [
      {
        id: 1,
        name: 'Apple',
        price: 1.99,
        quantity: 10,
      },
      {
        id: 2,
        name: 'Orange',
        price: 2.99,
        quantity: 5,
      },
      {
        id: 3,
        name: 'Banana',
        price: 3.99,
        quantity: 20,
      },
      {
        id: 4,
        name: 'Grape',
        price: 4.99,
        quantity: 15,
      },
      {
        id: 5,
        name: 'Pineapple',
        price: 5.99,
        quantity: 10,
      },
      {
        id: 6,
        name: 'Strawberry',
        price: 6.99,
        quantity: 5,
      },
      {
        id: 7,
        name: 'Watermelon',
        price: 7.99,
        quantity: 20,
      },
      {
        id: 8,
        name: 'Mango',
        price: 8.99,
        quantity: 15,
      },
      {
        id: 9,
        name: 'Peach',
        price: 9.99,
        quantity: 10,
      },
      {
        id: 10,
        name: 'Pear',
        price: 10.99,
        quantity: 5,
      },
      {
        id: 11,
        name: 'Cherry',
        price: 11.99,
        quantity: 20,
      },
      {
        id: 12,
        name: 'Lemon',
        price: 12.99,
        quantity: 15,
      },
      {
        id: 13,
        name: 'Lime',
        price: 13.99,
        quantity: 10,
      },
      {
        id: 14,
        name: 'Blueberry',
        price: 14.99,
        quantity: 5,
      },
      {
        id: 15,
        name: 'Raspberry',
        price: 15.99,
        quantity: 20,
      },
      {
        id: 16,
        name: 'Blackberry',
        price: 16.99,
        quantity: 15,
      },
      {
        id: 17,
        name: 'Pomegranate',
        price: 17.99,
        quantity: 10,
      },
      {
        id: 18,
        name: 'Papaya',
        price: 18.99,
        quantity: 5,
      },
      {
        id: 19,
        name: 'Kiwi',
        price: 19.99,
        quantity: 20,
      },
      {
        id: 20,
        name: 'Pomelo',
        price: 20.99,
        quantity: 15,
      },
    ],
  }),
}
</script>

<style scoped>
.home {
  background: darkslategrey;
  height: 102%;
}
</style>