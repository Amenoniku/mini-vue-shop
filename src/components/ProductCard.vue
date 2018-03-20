<template lang="pug">

#ProductCard.col-sm
  .card(style="width: 18rem;")
    img.card-img-top(:src="product.image", alt="")
    .card-body
      h5.card-title {{ product.name }}
      p.card-text {{ product.price }}

      div(v-if="isCart")
        input.form-control.input-number(
          type="number"
          v-model="product.count"
          min="1"
        )
        button.btn.btn-primary(
          @click="removeProduct(product.id)"
        ) remove product

      div(v-else)
        input.form-control.input-number.cart(
          type="number"
          v-model="productCount"
          min="1"
        )
        button.btn.btn-primary(
          @click="addProduct({count: productCount, product})"
        ) In cart

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  props: ['product'],
  components: {},
  data () {
    return {
      productCount: 1
    }
  },
  computed: {
    isCart () {
      return this.$route.name === 'Cart'
    },
    ...mapState('main', {
      tiles: state => state.tiles
    })
  },
  methods: {
    ...mapActions('main', {
      addProduct: 'addProduct',
      removeQuantity: 'removeQuantity',
      removeProduct: 'removeProduct'
    })
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scope>

.card
  margin-bottom 5px

.card-img-top
  height 200px

input
  margin-bottom 10px

button
  margin 5px

</style>
