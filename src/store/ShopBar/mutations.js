export default {
    setProduct(state, payload){
        state.BasketProduct = payload;
    },
    removeProduct(state, payload) {
        state.BasketProduct = state.BasketProduct.filter(item => item.id !== payload.id);
    },

    addProduct(state, payload) {
        state.BasketProduct.push(payload);
    }

}