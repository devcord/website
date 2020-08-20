<template lang="pug">
  main
    Markdown {{ legal }}
</template>

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

<script>
  import Markdown from '@/components/Markdown'
  import legal from 'resources/legal.md'

  export default {
    components: {
      Markdown,
    },

    data () {
      return {
        legal,
      }
    },
  }
</script>
