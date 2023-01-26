<template>
  <div class="loginHome">
    <LoginBar/>
    <v-container>
      <v-row>
        <v-col>
          <v-card
              class="mt-12 mx-auto rounded-xl pa-8"
              color="blue lighten-5"
              elevation="7"
              style="max-width: 100%"
          >
            <v-text-field
                dense
                autofocus
                color="blue darken-2"
                label="Kullanıcı Adı"
                style="max-width: 30%"
                class="mx-auto font-weight-bold"
                v-model="username"
            />
            <v-spacer/>
            <v-text-field
                dense
                color="blue darken-2"
                label="Şifre"
                type="password"
                style="max-width: 30%"
                v-model="password"
                class="mx-auto font-weight-bold"/>

            <v-card-actions>
              <v-spacer/>
              <v-btn
                  class="white--text text-right"
                  color="deep-purple lighten-2"
                  elevation="3"
                  style="color: aliceblue"
                  @click="login"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginBar from "@/components/LoginBar/LoginBar.vue";
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "LoginView",
  components: {
    LoginBar
  },
  data: () => ({
    username: "",
    password: ""
  }),
  computed: {
    ...mapGetters({
      getAccessToken: 'login/getAccessToken',
      getUser: 'login/getUser',
    })
  },
  methods: {
    ...mapActions({
      setAccessToken: 'login/setAccessToken',
      setUser: 'login/setUser',
      setCategories: 'categories/setCategories',
      setProduct: 'product/setProduct',
    }),
    login() {
      const data = {
        username: this.username,
        password: this.password
      };
      axios.post('https://dummyjson.com/auth/login', data)
          .then(response => {
            this.setAccessToken({accessToken: response.data.token})
            this.setUser({user: response.data})
            this.$router.push({path: '/'})
            this.getAllProducts()
          })
          .catch(err => console.log(err))
    },

    getAllProducts() {
      const url = 'https://dummyjson.com/products'
      axios.get(url)
          .then(response => {
            this.setProduct({allProducts:response.data.products})
          })
          .catch(err => console.log(err))
    },
  }
}
</script>

<style scoped>
.loginHome {
  background: darkslategrey;
  height: 100%;
}
</style>