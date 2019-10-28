<template lang="pug">
nav
  .content
    .nav--links
      img(src='@/assets/logo.svg')
      router-link(to="/") Home
      router-link(to="/about") About Us
      router-link(to="/partners") Partners
      router-link(to="/projects") Projects
    a.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!")  Join us
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  width: 100%;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav--links{
      display: flex;
      align-items: center;
    }
  }

  a {
    padding: 0.5rem;
    margin-right: 0.5rem;
    color: #212121;
    font-weight: 700;
    box-shadow: inset 0 0 0 0 #f0134d;
    transition: 0.2s;

    &:hover {
      color: #ffffff;
      box-shadow: inset 0 -3rem 0 0  #f0134d;
    }

    &.join--button {
      background-color: #212121;
      color: #ffffff;
      margin-right: 0;
      transition: 0.2s;

      &:hover {
        //background-color: #f0133d;
        transform: scale(1.02);
        cursor: pointer;
      }
    }
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 2rem;
  }
}
</style>
