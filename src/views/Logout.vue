<template lang="pug">
  main
</template>

<script>
  import axios from 'axios'
  import { api as apiURL } from 'config'

  const api = axios.create({
    baseURL: apiURL,
    withCredentials: true,
  })

  export default {
    mounted () {
      api.get('/discord/logout').then(() => {
        this.$router.replace('/')
      }).catch(console.error)
    },
  }
</script>