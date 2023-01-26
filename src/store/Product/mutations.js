export default {
    setProduct(state, payload) {
        state.allProducts = payload
    },
    setNewProduct(state, payload) {
        state.newAllProducts = payload
    },
    setNewAddProduct(state, payload) {
        state.title = payload
    }
}