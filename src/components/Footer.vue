<template lang="pug">
  footer.background--dark
    .content
      .cards
        .card
          h4 Devcord
          router-link(to="/privacy-policy") Privacy Policy
          router-link(to="/cookie-policy") Cookie Policy
          router-link(to="/legal") Legal Notice
        .card
          h4 Socials
          a(href="https://dev.to/devcord", title="Our articles on dev.to", target="_blank") DEV
          a(href="https://soundcloud.com/devcord", title="Our articles on dev.to", target="_blank") Soundcloud
        .card
          h4 Projects
          a(href="https://challenges.devcord.com", title="Learn how to dev", target="_blank") Devcord Challenges
          a(href="https://webgems.io", title="Learn how to dev", target="_blank") Webgems
          a(href="https://sysgems.io", title="Learn how to dev", target="_blank") Sysgems
        .card
          h4 Contact
          a(href="mailto:info@devcord.com", title="Write us an email!", target="_top") info@devcord.com
</template>

<style lang="scss" scoped>
footer {
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .cards {
    flex-flow: column;
  }

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

@media (min-width: 525px) {
  footer .cards {
    flex-flow: row;
  }
}
</style>
