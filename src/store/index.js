import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import login from "@/store/login/login";
import categories from "@/store/categories/categories";
import product from "@/store/Product/product";
import shopBar from "@/store/ShopBar/shopBar"
export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        login,
        categories,
        product,
        shopBar
    }
})
