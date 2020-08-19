<template lang="pug">
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