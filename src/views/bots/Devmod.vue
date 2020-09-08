<template lang="pug">
  main
    Markdown {{ devmod }}
</template>

<script>
  import Markdown from '@/components/markdown'
  import devmod from 'resources/devmod.md'

  export default {
    data () {
      return {
        devmod,
      }
    },

    components: {
      Markdown,
    },
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/markdown-container.scss';
</style>
