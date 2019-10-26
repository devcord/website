<template lang="pug">
  #app
    Navigation
    router-view
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation
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
</style>
