<template lang="pug">
  main
    Rules
</template>

<script>
  import Rules from '@/components/Rules'

  export default {
    components: {
      Rules,
    },
  }
</script>

<style lang="scss" scoped>
  @import '~mixins/breakpoints';

  main {
    padding: 150px;
    max-width: 1300px;
    margin: 0 auto;

    @include md {
      padding: 90px;
    }

    @include sm {
      padding: 90px 30px;
    }
  }
</style>