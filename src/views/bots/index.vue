<template lang="pug">
  main
    Markdown {{ index }}
</template>

<script>
  import Markdown from '@/components/markdown'
  import index from 'resources/bot-index.md'

  export default {
    data () {
      return {
        index,
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
