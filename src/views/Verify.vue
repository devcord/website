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
      async verify () {
        await api.get('/discord/verify')
      },
    },
    
    mounted () {
      this.verify().catch(console.error)
    }  
  }
</script>
