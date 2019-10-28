<template lang="pug">
  footer.background--dark
    .content
      .cards
        .card
          h4 Devcord
          router-link(to="/privacy-policy") Privacy Policy
          router-link(to="/cookie-policy") Cookie Policy
          router-link(to="/imprint") Imprint
        .card
          h4 Socials
          a(href="https://dev.to/devcord", title="Our articles on dev.to") DEV
          a(href="https://soundcloud.com/devcord", title="Our articles on dev.to") Soundcloud
        .card
          h4 Projects
          a(href="https://challenges.devcord.com", title="Learn how to dev") Devcord Challenges
          a(href="https://webgems.io", title="Learn how to dev") Webgems
          a(href="https://sysgems.io", title="Learn how to dev") Sysgems
        .card
          h4 Contact
          a(href="mailto:info@devcord.com", title="Write us an email!") info@devcord.com
</template>

<style lang="scss" scoped>
footer {
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    &s {
      display: flex;
    }

    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 1rem;
  }
}



a {
  color: white;
  font-size: 1rem;

  &:hover {
    color: #f0134d;
  }
}
</style>