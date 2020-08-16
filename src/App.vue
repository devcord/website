<template lang="pug">
  div
    Navigation
    router-view
</template>

<script>
  import Navigation from '@/components/Navigation'

  export default {
    components: {
      Navigation,
    }
  }
</script>

<style lang="scss">
  @use './scss/global';
</style>