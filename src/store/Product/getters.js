export default {
    getProduct(state){
        return state.allProducts;
    },
    getNewProduct(state){
        return state.newAllProducts;
    },
    getNewAddProduct(state){
        return state.title;
    }
}