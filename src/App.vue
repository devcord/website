<template lang="pug">
  #app
    Navigation
    Cookie
    router-view
    Footer
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Cookie from '@/components/Cookie.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navigation,
    Cookie,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap");

body {
  margin: 0 auto;
  font-family: "Poppins", "Arial Narrow", Arial, sans-serif;
  background-color: #111111;
  color: #f4f4f4
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content {
  max-width: 1200px;
  width: 100%;
  margin: 1rem;
}

.background {
  &--dark {
    background-color: #212121;
    color: #f4f4f4;
  }
}

h1 {
  font-size: 48px;
}

a {
  text-decoration: none;

  &:hover {
    color: #f0134d;
  }
}

.router-link-exact-active {
  color: #f0134d !important;

  &:hover {
    color: white;
  }
}


.highlighted {
  text-decoration: none;
  box-shadow: inset 0 -0.2rem 0 0 #f0134d;
  color: #f4f4f4;
  padding: 0 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: inset 0 -3rem 0 0 #f0134d;
    color: white;
  }
}

</style>
