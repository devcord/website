<template lang="pug">
  nav( :hasScrolled="hasScrolled" )
    .background
    Logo
    router-link( to="#" ) Projects
    span •
    router-link( to="#" ) Rules
    span •
    router-link( to="#" ) Bot
</template>

<script>
  import Logo from '@/assets/logo.svg'

  export default {
    components: {
      Logo,
    },

    data () {
      return {
        hasScrolled: false
      }
    },

    methods: {
      scroll () {
        this.hasScrolled = window.scrollY > 0
      },
    },

    mounted () {
      this.scroll()
      window.addEventListener('scroll', this.scroll)
    },

    unmounted () {
      window.removeEventListener('scroll', this.scroll)
    },
  }
</script>

<style lang="scss" scoped>
  nav {
    width: 100%;
    height: 75px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 10;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.1s;
      background-color: var(--background);
    }

    &[hasScrolled] {
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(10px);
      
      .background {
        opacity: 0.3;
      }
    }

    > * {
      position: relative;
    }

    svg {
      fill: white;
      margin-right: auto;
    }

    a, span {
      margin-left: 15px;
    }
  }
</style>