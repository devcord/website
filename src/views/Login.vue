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
    methods: {
      async login () {
        const { data: redirectURL } = await api.get('/discord/get-redirect') 
        
        window.location.replace(redirectURL)
      },
    },
    
    mounted () {
      console.log(apiURL)
      this.login().catch(console.error)
    }
  }
</script>