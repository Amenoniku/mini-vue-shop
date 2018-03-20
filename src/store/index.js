import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import main from './modules/main'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    main
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: 'main',
      paths: [
        'main.cart'
      ]
    })
  ]
})

export default store
