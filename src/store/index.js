import Vue from 'vue'

// пакет vue для работы с данными
import Vuex from 'vuex'

// плагин для vuex чтобы сохранять состояние в localStorage
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
