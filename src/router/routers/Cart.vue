<template lang="pug">

#Cart
  P cart page

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
      imgUrl: 'https://loremflickr.com/' + 250 + '/' + 200
    }
  },
  computed: {
    tile () {
      return this.tiles.find((item) => {
        return +item.id === +this.$route.params.id
      })
    },
    ...mapState('main', {
      tiles: state => state.tiles
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
