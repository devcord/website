<template lang="pug">
  main
    h1 404
    h3 The page you're looking for doesn't exist. 
    router-link.button( to="/" ) 
      Icon home
      | Go home
</template>

<script>
  import Icon from '@/components/Icon'

  export default {
    components: {
      Icon,
    },    
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 60px;
    }

    h3 {
      font-weight: 200;
      color: rgba(white, 0.8);
    }

    a.button {
      margin-top: 20px;

      svg {
        fill: none;
      }
    }
  }
</style>