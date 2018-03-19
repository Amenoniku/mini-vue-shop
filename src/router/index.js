import Vue from 'vue'
import Router from 'vue-router'

// routers
import NotFoundComponent from './routers/404'
import Home from './routers/Home'
import Cart from './routers/Cart'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // 404
    { path: '*', component: NotFoundComponent },

    // Routers
    { path: '/home', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },

    // Redirects
    { path: '/', redirect: '/home' }
  ]
})

export default router
