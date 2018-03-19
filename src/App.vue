<template lang="pug">

#app
  //- Navigation
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.fixed-top
    .container
      router-link.navbar-brand(to="/home") Mini Vue Shop
      button.btn.btn-dark(type="button")
        router-link.navbar-brand(to="/cart") &#128722; {{ numberOfGoods }}
  //- Navigation End

  //- vue router tag
  router-view
  //- vue router tag End

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState('main', {
      cart: state => state.cart
    }),
    numberOfGoods () {
      return this.$store.getters['main/numberOfGoods']
    }
  },
  methods: {
    ...mapActions('main', {
      getGoods: 'getGoods'
    })
  },
  mounted () {
    this.getGoods()
  }
}
</script>

<style lang="stylus">

*
  box-sizing border-box

body
  padding-top 75px

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  // margin 20px

</style>
