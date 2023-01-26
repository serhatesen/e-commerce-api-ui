import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ClothingAndAccessories from "@/views/category/ClothingAndAccessories.vue";
import FoodMarket from "@/views/category/FoodMarket.vue";
import HomeStuff from "@/views/category/HomeStuff.vue";
import PersonalProducts from "@/views/category/PersonalProducts.vue";
import Technology from "@/views/category/Technology.vue";
import VehicleView from "@/views/category/VehicleView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/clothing_accessories',
        name: 'ClothingAndAccessories',
        component: ClothingAndAccessories
    },
    {
        path: '/food_market',
        name: 'FoodMarket',
        component: FoodMarket,
    },
    {
        path: '/home_stuff',
        name: 'HomeStuff',
        component: HomeStuff,
    },
    {
        path: '/personal_products',
        name: 'PersonalProducts',
        component: PersonalProducts
    },
    {
        path: '/technology',
        name: 'Technology',
        component: Technology
    },
    {
        path: '/vehicle',
        name: 'Vehicle',
        component: VehicleView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
