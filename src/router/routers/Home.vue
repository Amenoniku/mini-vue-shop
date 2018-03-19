<template lang="pug">

#Home
  .container

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState('main', {
      tiles: state => state.tiles
    })
  },
  methods: {
    ...mapActions('main', {})
  },
  mounted () {
  }
}
</script>

<style lang="stylus">

</style>
