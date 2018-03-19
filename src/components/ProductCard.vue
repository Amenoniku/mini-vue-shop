<template lang="pug">

#ProductCard
  .row
    .col-lg-12
      .row
        .col-lg-4.col-md-6.mb-4
          .card.h-100
            a(href='#')
              img.card-img-top(src='http://placehold.it/700x400', alt='')
            .card-body
              h4.card-title
                a(href='#') Item One
              h5 $24.99
              p.card-text
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductCard',
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
