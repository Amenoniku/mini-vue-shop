<template lang="pug">

#Cart
  .container
    h1.my-4 Shop Name
    div(v-if="cart.length > 0")
      h3.my-3 Total price: {{ totalPrice }}
      .row
        ProductCard(
          v-for="(product, $index) in cart"
          :key="$index"
          :product="product"
        )

</template>

<script>
import { mapState } from 'vuex'

import ProductCard from '../../components/ProductCard'

export default {
  name: 'Cart',
  components: {
    ProductCard
  },
  data () {
    return {}
  },
  computed: {
    totalPrice () {
      let carrency = this.cart[0].price.charAt(0)
      let prises = this.cart.map(item => {
        let price = +item.price.slice(1) * +item.count
        return price
      })
      return carrency + prises.reduce((a, b) => {
        return a + b
      }).toFixed(2)
    },
    ...mapState('main', {
      cart: state => state.cart
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
