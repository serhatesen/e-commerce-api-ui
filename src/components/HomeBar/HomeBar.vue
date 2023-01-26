<template>
  <div class="app-bar">
    <v-row>
      <v-app-bar
          color="deep-purple"
          dark
          app
      >
      <v-col cols="4" class="ma-0 pa-0 display: flex">
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          Category
      </v-col>
      <v-col cols="4" class="text-center">
        <span class="font-weight-bold" style="font-size: 40px">Dev Shop</span>
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn @click="login" v-if="!getAccessToken">
          Login
        </v-btn>
        <div v-if="getAccessToken">
          Welcome {{getUser.firstName}} {{getUser.lastName}}
          <v-avatar>
            <img :src="getUser.image"/>
          </v-avatar>
        </div>
      </v-col>
      </v-app-bar>
    </v-row>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="deep-purple"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            style="font-size: 80px"
            v-for="item in getCategories" :key =item.index
        >
          <v-list-item @click="routeToCategory(item)">
            <v-list-item-icon class="white--text" >
              <Icon :icon=item.Icon />
            </v-list-item-icon>
            <v-list-item-title class="white--text mt-13"> {{item.top_category}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">
            Logout
          </v-btn>
        </div>
      </template>


    </v-navigation-drawer>
  </div>

</template>

<script>
import {Icon} from '@iconify/vue2';
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "HomeBar",
  data: () => ({
    drawer: null,
    categories: [],
    clotheProducts: [],
  }),
  computed: {
    ...mapGetters({
      getAccessToken: 'login/getAccessToken',
      getUser: 'login/getUser',
      getCategories: 'categories/getCategories'
    })
  },

  methods: {
    ...mapActions({
      setAccessToken: 'login/setAccessToken',
    }),
    login() {
      this.$router.push("/login");
    },
    logout (){
      this.setAccessToken({accessToken: ''})
      this.$router.push({path: '/login'})
    },

    routeToCategory(item) {

      item.sub_categories.forEach(sub_category => {
        const url = 'https://dummyjson.com/products/category/' + sub_category
        axios.get(url)
            .then(response => {
              this.$store.state.product.newAllProducts.push(response.data.products)
            })
            .catch(err => console.log(err))

      })
      this.$router.push({path: item.top_category_router})
    },


  },
  components: {
    Icon
  }
}
</script>

<style scoped>

</style>