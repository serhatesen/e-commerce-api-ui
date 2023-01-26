export default {
    setProduct(context,payload){
        context.commit('setProduct',payload)
    },
    removeProduct(context, id) {
        context.commit('removeProduct', id);
    }
}
