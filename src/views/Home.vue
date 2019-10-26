<template lang="pug">
main
  section
    .content
      h1 Looking for new friends?
      p Devcord is a community that brings together web developers of all experience levels. Get help with your code, connect with other web developers, discuss your current project and chat about your favourite languages, libraries, and frameworks.
      button.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!")  Join us on Discord
  section.background--dark
    .content
      h1 tbd
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin: 20vh 0;

    h1 {
      font-size: 3vw;
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
    }
  }
}

</style>