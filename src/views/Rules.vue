<template lang="pug">
  main
    Markdown {{ rules }}
</template>

<script>
  import Markdown from '@/components/Markdown'
  import rules from 'resources/rules.md'

  export default {
    components: {
      Markdown,
    },

    data () {
      return {
        rules,
      }
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
  }
</style>