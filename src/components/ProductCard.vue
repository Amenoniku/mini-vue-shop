<template lang="pug">

#ProductCard.col-sm
  .card(style="width: 18rem;")
    img.card-img-top(:src="product.image", alt="")
    .card-body
      h5.card-title {{ product.name }}
      p.card-text {{ product.price }}
      input.form-control.input-number(type="number" v-model="productCount" min="1", max="100")
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
    ...mapState('main', {
      tiles: state => state.tiles
    })
  },
  methods: {
    ...mapActions('main', {
      addProduct: 'addProduct'
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

</style>
