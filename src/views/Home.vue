<template lang="pug">
main
  section
    .content
      h1 Looking for new friends?
      p Devcord is a community that brings together web developers of all experience levels. Get help with your code, connect with other web developers, discuss your current project and chat about your favourite languages, libraries, and frameworks.
      a.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!")  Join us on Discord
  section.background--dark
    .content
      .wrapper
        .card
          h2 Active Community
          p With over 5000 registered users and ~1000 online users, we have a very active Discord community with users from all around the globe.
        .card
          h2 Friendly NPCs
          p Find new friends, talk about webdevelopment, side projects, ask for help, talk about gaming, music and other off-topics.
        .card
          h2 Open Source
          p Work on our open source projects together with our community. Find out more about our projects on our Github Team page.
  section
    .content
      h1 more coming soon
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin: 20vh 1rem;

    .wrapper {
      display:flex;
      justify-content: space-between;

      .card {
        flex: 1;
        color: #212121;
        background-color: #ffffff;
        padding: 1rem 2rem 2rem 2rem;
        margin-right: 1rem;

        &:last-child {
          margin-right: 0;
        }

        h2 {
          margin-top: 0;
        }

        p {
          margin-bottom: 0;
        }
      }
    }

    h1 {
      font-size: 64px;
      margin: 0rem;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }

    .join--button {
      border: none;
      background-color: #f0134d;
      color: #ffffff;
      padding: 0.5rem 1rem;
      font-weight: 500;
      font-size: 16px;
      transition: 0.2s;
      display: inline-block;

      &:hover {
        box-shadow: inset 0 -2.5rem 0 0  #212121;
        transform: scale(1.01);
        cursor: pointer;
      }
    }
  }
}
</style>
