<template lang="pug">

.not-found
  h1 404 Not found
  router-link(:to="{ path: '/' }") Main
</template>

<script>
export default {
  name: '404',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

h1, h2 {
  font-weight: normal;
}
</style>
