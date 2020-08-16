<template lang="pug">
  nav( :hasScrolled="hasScrolled" )
    .background

    router-link.logo( to="/" )
      Logo

    //- router-link( to="#" ) Projects
    //- span •
    router-link( to="/rules" ) Rules
    //- span •
    router-link( to="#" ) Bots
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
      box-shadow: 0 0 40px 10px rgba(black, 1);
    }

    &[hasScrolled] {
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(10px);
      
      .background {
        opacity: 0.5;
      }
    }

    > * {
      position: relative;
    }

    .logo {
      fill: white;
      margin-right: auto;
      display: flex;

      svg {
        height: 30px;
      }
    }

    a:not(.logo), span {
      margin-left: 30px;
    }

    span {
      opacity: 0.8;
    }
  }
</style>