<template lang="pug">
  div
    Navigation
    router-view
    Footer
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Navigation,
      Footer,
    },

    watch: {
      '$route' () {
        scrollTo(0, 0)
      },
    },
  }
</script>

<style lang="scss">
  @use './scss/global';
</style>
