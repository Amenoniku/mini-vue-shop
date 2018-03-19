<template lang="pug">

#app
  //- Navigation
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.fixed-top
    .container
      router-link.navbar-brand(to='/home') Mini Vue Shop
      button.btn.btn-dark(type='button')
        router-link(to='/cart') &#128722;
  //- Navigation End

  //- vue router tag
  router-view
  //- vue router tag

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {},
  data () {
    return {}
  },
  methods: {
    ...mapActions('main', {})
  },
  mounted () {
  }
}
</script>

<style lang="stylus">

*
  box-sizing border-box

body
  padding-top 54px

@media (min-width 992px)
  body
    padding-top 56px

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  // margin 20px

</style>
