export default {
    setProduct(context, payload){
        context.commit('setProduct', payload)
    },
    setNewProduct(context, payload) {
        context.commit('setNewProduct', payload)
    },
    setNewAddProduct(context, payload){
        context.commit('setNewAddProduct',payload)
    }
}