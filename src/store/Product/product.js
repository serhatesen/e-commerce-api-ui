import getters from "@/store/Product/getters";
import actions from "@/store/Product/actions";
import mutations from "@/store/Product/mutations";
export default {
    namespaced : true,
    state:{
        allProducts: [],
        newAllProducts: [],
        title: null
    },
    getters,
    actions,
    mutations
}