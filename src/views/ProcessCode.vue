<template lang="pug">
  main {{ error }}
</template>

<style lang="scss" scoped>
  main {
    padding-top: 150px;
    text-align: center;
  }
</style>

<script>
  import axios from 'axios'
  import { api as apiURL } from 'config'

  const api = axios.create({
    baseURL: apiURL,
    withCredentials: true,
  })

  export default {
    data () {
      return {
        error: ''
      }
    },

    methods: {
      async processCode (code) {
        const { data: {
          memberExists,
          hasVerifiedRole,
        } } = await api.get('/discord/process-code?code=' + code) 
        
        console.log({ memberExists, hasVerifiedRole })

        if (!memberExists) {
          this.$router.replace('/')
        } else if (!hasVerifiedRole) {
          this.$router.replace('/verify')
        } else {
          this.$router.replace('/verify')
        }
      },
    },
    
    mounted () {
      if (!this.$route.query.code) {
        this.error = 'No code specified.'
        console.error('No code specified.')
      } else {
        this.processCode(this.$route.query.code).catch(console.error)
      }
    }
  }
</script>