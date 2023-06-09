import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const storeProducts= {
    namespaced: true,
    state: {
        products: [],
        dataClassNotifySmsList: []
    },
    // chỉ getter đc lấy data
    getters:{
        products: (state) => state.products,
    },
    // trong vuex nếu đúng flow chỉ có mutation đc thay đổi data
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
            console.log(products)
        }
    },
    // thực hiện hành động gọi api
    actions: {
        fetchProducts({ commit }, page) {
            console.log('data', page)
            return axios.get(`http://localhost:3000/products?page${page}`)
                .then(response => {
                    commit('SET_PRODUCTS', response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }

};
export default storeProducts;