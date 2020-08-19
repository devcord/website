<template lang="pug">
  main
    .success( v-if="verified" )
      Logo
      h2 You've been successfully verified!
      h4 You may now close this window.

    .confirm( v-else v-show="loaded" )
      h1 Read carefully and confirm below.
      Rules

      .controls
        input( id="confirm-input" type="checkbox" v-model="agree" )
        label( for="confirm-input") I have read and agree to follow Devcord's rules

      button( :disabled="!agree" @click="verify().catch(catch401)" ) 
        Icon check-square
        | Verify
</template>

<style lang="scss" scoped>
  @import '~mixins/breakpoints';

  .success {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 90px 15px;
    flex-direction: column;
    height: 100vh;
  }

  .confirm {
    padding: 150px;
    max-width: 1300px;
    margin: 0 auto;

    input, input + label {
      cursor: pointer;
    }

    label {
      font-size: 16px;
      margin-left: 10px;
      font-weight: bold;
    }

    button {
      margin-top: 15px;
      font-size: 14px;

      svg {
        fill: none;
        height: 15px;
        margin-right: 5px;
      }
    }

    h1 {
      margin-bottom: 45px;
    }

    .controls {
      margin-top: 30px;
    }

    @include md {
      padding: 90px;
    }

    @include sm {
      padding: 90px 30px;
    }
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 5px;
    text-align: center;
  }

  h4 {
    font-weight: 200;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .success > svg {
    height: 100px;
  }
</style>

<script>
  import axios from 'axios'
  import { api as apiURL } from 'config'

  import Rules from '@/components/Rules'
  import Logo from '@/assets/logo.svg'

  import Icon from '@/components/Icon'

  const api = axios.create({
    baseURL: apiURL,
    withCredentials: true,
  })

  export default {
    components: {
      Logo,
      Rules,
      Icon,
    },

    data () {
      return {
        loaded: false,
        verified: false,
        agree: false,
      }
    },

    methods: {
      async verify () {
        const { data: {
          memberExists
        } } = await api.get('/discord/verify')

        if (!memberExists) return this.$router.replace('/')
        
        this.verified = true
      },

      async checkStatus () {
        const { data: {
          memberExists,
          hasVerifiedRole,
        } } = await api.get('/discord/verification-status')

        if (!memberExists) this.$router.replace('/')
        else if (hasVerifiedRole) this.verified = true

        this.loaded = true
      },

      async catch401 (error) {
        switch (error.response.status) {
          case 401:
            this.$router.replace('/login')
            break
          
          default:
            console.error(error)
        }
      }
    },
    
    mounted () {
      this.checkStatus().catch(this.catch401)
    }  
  }
</script>
