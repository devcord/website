<template lang="pug">
  .markdown( v-html="md($slots.default[0].text)" )
</template>

<script>
  import { parse as Marked } from 'marked'

  import { 
    languages,
    highlight,
  } from 'prismjs'

  Marked.setOptions({
    highlight (string, language) {
      return language && languages[language]  
        ? highlight(string, languages[language])
        : string
    },
  })

  export default {
    methods: {
      md: string => Marked(string),
    },
  }
</script>

<style lang="sass" scoped>
  @import '~css/prism.css'
</style>

<style lang="sass">
  .markdown
    width: 100%

  .markdown pre
    background-color: var(--input-background)
    
    *
      font-family: 'Fira Code'
</style>
