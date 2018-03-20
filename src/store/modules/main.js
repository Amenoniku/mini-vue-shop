import Goods from '../../assets/goods.json'

// Goods consts
const GET_GOODS = 'mini-vue-shop_GET_GOODS'

// Cart consts
const ADD_PRODUCT = 'mini-vue-shop_ADD_PRODUCT'
const INCREASE_PRODUCTS = 'mini-vue-shop_INCREASE_PRODUCTS'

const REMOVE_PRODUCT = 'mini-vue-shop_REMOVE_PRODUCT'

export default {
  namespaced: true,
  state: {
    goods: [],
    cart: []
  },
  mutations: {
    // Goods mutations
    [GET_GOODS] (state, goods) {
      state.goods = goods
    },

    // Cart mutations
    [ADD_PRODUCT] (state, product) {
      state.cart.push(product)
    },
    [INCREASE_PRODUCTS] (state, {index, count}) {
      let product = state.cart[index]
      product.count = +product.count + +count
      state.cart.splice(index, 1, product)
    },
    [REMOVE_PRODUCT] (state, index) {
      state.cart.splice(index, 1)
    }
  },
  getters: {
    numberOfGoods: state => {
      let number = 0
      state.cart.forEach(product => {
        number += +product.count
      })
      return number
    }
  },
  actions: {
    // Goods actions
    getGoods ({commit}) {
      commit(GET_GOODS, Goods)
    },

    // Cart actions
    addProduct ({commit, state}, {count, product}) {
      let productIndex = state.cart.findIndex(item => {
        return item.id === product.id
      })
      if (productIndex !== -1) {
        commit(INCREASE_PRODUCTS, {index: productIndex, count})
      } else {
        product.count = count
        commit(ADD_PRODUCT, product)
      }
    },
    removeProduct ({commit, state}, product) {
      let productIndex = state.cart.findIndex(item => {
        return item.id === product.id
      })
      commit(REMOVE_PRODUCT, productIndex)
    }
  }
}
