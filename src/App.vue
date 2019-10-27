<template lang="pug">
  #app
    Navigation
    Cookie
    router-view
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Cookie from '@/components/Cookie.vue';

export default {
  components: {
    Navigation,
    Cookie
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,700,900&display=swap");

body {
  margin: 0 auto;
  font-family: "Poppins", "Arial Narrow", Arial, sans-serif;
}

a {
  text-decoration: none;
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
    color: #ffffff;
  }
}

.highlighted {
  text-decoration: none;
  box-shadow: inset 0 -0.2rem 0 0 #f0134d;
  color: #212121;
  padding: 0 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: inset 0 -2.5rem 0 0 #f0134d;
    color: white;
  }
}

</style>
