<template lang="pug">

#Home
  .container
    .row
      ProductCard(
        v-for="product in goods"
        :key="product.id"
        :product="product"
      )

//- .container
//-   .row
    ProductCard(
      v-for="product in goods"
      :key="product.id"
      :product="product"
    )

</template>

<script>
import { mapState, mapActions } from 'vuex'

import ProductCard from '../../components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('main', {
      goods: state => state.goods
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
