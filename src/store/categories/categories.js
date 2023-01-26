import actions from "@/store/categories/actions";
import mutations from "@/store/categories/mutations";
import getters from "@/store/categories/getters";

export default {
    namespaced: true,
    state: {
        categories: [
            {
                Icon : "openmoji:stick-figure-with-dress-leaning-right",
                top_category: "Clothing And Accessories",
                top_category_router: "clothing_accessories",
                sub_categories: [
                    "tops",
                    "womens-dresses",
                    "womens-shoes",
                    "mens-shirts",
                    "mens-shoes",
                    "mens-watches",
                    "womens-watches",
                    "womens-bags",
                    "womens-jewellery",
                    "sunglasses",
                ]
            },
            {
                Icon : "fxemoji:potoffood",
                top_category: "Food Market",
                top_category_router: "food_market",
                sub_categories: [
                    "groceries"
                ]
            },
            {
                Icon : "flat-color-icons:home",
                top_category: "Home Stuff",
                top_category_router: "home_stuff",
                sub_categories: [
                    "home-decoration",
                    "furniture",
                    "lighting"
                ]
            },
            {
                Icon: "icon-park:cosmetic-brush",
                top_category: "Personal Products",
                top_category_router: "personal_products",
                sub_categories: [
                    "fragrances",
                    "skincare"
                ]
            },
            {
                Icon: "flat-color-icons:electronics",
                top_category: "Technology",
                top_category_router: "technology",
                sub_categories: [
                    "smartphones",
                    "laptops"
                ]
            },
            {
                Icon : "noto-v1:sport-utility-vehicle",
                top_category: "Vehicle",
                top_category_router: "vehicle",
                sub_categories: [
                    "automotive",
                    "motorcycle"
                ]
            },
        ]
    },
    getters,
    actions,
    mutations,

}