import actions from "@/store/ShopBar/actions";
import getters from "@/store/ShopBar/getters";
import mutations from "@/store/ShopBar/mutations";
export default {
    namespaced : true,
    state:{
        BasketProduct: [],
    },
    actions,
    getters,
    mutations
}