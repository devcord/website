<template lang="pug">
  main
    .heading
      .background
      .shadow

      h1 Looking for new friends?
      
      p 
        | <b>Devcord</b> is a community that brings together web developers of all experience levels. 
        | Get help with your code, connect with other web developers, discuss your current 
        | project and chat about your favourite languages, libraries, and frameworks.

      a.join.button( href="https://discord.gg/devcord" )
        Icon discord
        | Join us on Discord

      .social
        a.youtube( href="https://www.youtube.com/channel/UC3NK6zA3HhtTclLZZvdHX-A" title="YouTube" )
          Icon youtube

        a.github( href="https://github.com/devcord/" title="GitHub" )
          Icon github

        a.dev( href="https://dev.to/devcord" title="Dev.to" )
          Icon dev.to

        a.soundcloud( href="https://soundcloud.com/devcord" title="SoundCloud" )
          Icon soundcloud

        //- a.twitch( href="#" title="Twitch" )
        //-   Icon twitch

    .cards
      .card
        h2 Active Community
        p With over 12000 registered users from all around the globe, we have a very active Discord community.

      .card
        h2 Friendly NPCs
        p Find new friends, talk about web development, side projects, ask for help, talk about gaming, music and other off-topics.

      .card
        h2 Open Source
        p Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page.
</template>

<style lang="scss" scoped>
  @import '~mixins/breakpoints.scss'; // xl, lg, md, sm

  p {
    color: rgba(white, 0.8);
    font-size: 18px;
    max-width: 800px;
    letter-spacing: 0.25px;
    line-height: 30px;

    b {
      color: white;
    }
  }

  h1 {
    font-size: 45px;
  }
  
  h2 {
    font-size: 24px;
  }

  @include sm {
    p {
      font-size: 16px;
      line-height: 22px;
    }

    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 20px;
    }
  }

  .heading {
    padding: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #130E10;
    min-height: 690px;

    @include md {
      padding: 150px 60px;
      }

      .background, .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

    .background {
      background: url(~assets/matte.webp);
      background-size: cover;
      background-position: center top;
      opacity: 0.4;
      background-attachment: fixed;
    }

    .shadow {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.425) 0%, rgba(0, 0, 0, 0) 18.23%, rgba(0, 0, 0, 0) 83.33%, rgba(0, 0, 0, 0.5) 100%);      
    }

    > * {
      position: relative;
    }

    > *:not(:last-child) {
      margin-bottom: 20px;
    }
    
    a.join {
      margin-top: 20px;
      background-color: #7289DA;
      color: white;

      &:focus, &:hover {
        background-color: white;
        color: var(--background);

        svg {
          fill: var(--background);
        }
      }
    }

    .social {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 30px;

      a {
        margin-right: 15px;

        svg {
          height: 30px;
          fill: white;
        }
      }

      .dev, .youtube {
        svg {
          height: 21px;
        }
      }

      .soundcloud {
        svg {
          height: 19px;
        }
      }
    }
  }

  .cards {
    display: flex;
    padding: 150px;
    justify-content: space-between;
    flex-wrap: wrap;

    .card {
      width: calc(33.33% - 60px);
    }

    h2 {
      margin-bottom: 15px;
    }

    @include sm {
      margin-bottom: 7px;
    }

    @include md {
      padding: 60px;
    }

    @include lg {
      flex-direction: column;

      .card {
        width: 100%;
        margin-bottom: 120px;
      }
    }
  }
</style>

<script>
  import Icon from '@/components/Icon'

  export default {
    components: {
      Icon,
    }
  }
</script>