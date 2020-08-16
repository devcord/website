<template lang="pug">
  .markdown( v-html="md($slots.default[0].text)" )
</template>

<script>
  import Marked from 'marked'

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

    gfm: true,
  })

  export default {
    methods: {
      md: string => Marked(string),
    },
  }
</script>

<style lang="scss">
  .markdown{
    width: 100%;
    color: rgba(white, 0.8);
    line-height: 25px;

    ul, p {
      letter-spacing: 0.25px;
    }

    h1, h2 {
      margin-bottom: 20px;

      &:not(:first-child) {
        margin-top: 75px;
      }

      border-bottom: 1px solid rgba(white, 0.1);
      padding-bottom: 15px;
    }

    h3, h4 {
      margin-bottom: 10px;

      &:not(:first-child) {
        margin-top: 30px;
      }
    }

    h1, h2, h3, h4 {
      color: white;
    }
    
    li {
      list-style: none;

      &::before {
        content: '';
        background-color: rgba(white, 0.8);
        border-radius: 50%;
        width: 4px;
        height: 4px;
        margin-right: 7px;
        margin-bottom: 3.5px;
        display: inline-block;
      }

      &:not(:last-child) {
        margin-bottom: 3px;
      }
    }

    pre {
      background-color: rgb(10, 10, 10);
      padding: 10px;
      font-size: 14px;
      border-radius: 5px;

      * {
        font-family: 'Fira Code';
      }
    }

    p + pre, pre + p {
      margin-top: 10px;
    }
  }
</style>
