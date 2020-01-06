<template lang="pug">
main
  section
    .content
      h1 Who are we?
      p Founded by klatsche in 2016, Devcord started as a small group of developers trying to help each other with daily code issues that may arise.
  section.about
    .content
      h1 Meet the team
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/126251022002814976/595753cd7f7d427b0d03504e45f01ca8.png?size=128")
            .card--name
              p.label.label--owner Owner
              h2 André Weller
          .card--details
            p André is a fullstack developer, based in Germany. His speciality is design and frontend with a strong background in Devops. He loves photography and cats.
            a(href="https://lost.design", title="André Weller's Website", target="_blank").highlighted Website
            //-a(href="https://github.com/lostdesign", title="André Weller's Website", target="_blank").highlighted Github
            //-a(href="https://twitter.com/lostdesign", title="André Weller's Website", target="_blank").highlighted Twitter
            //-a(href="https://instagram.com/lostdesign", title="André Weller's Website", target="_blank").highlighted Instagram
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/231856762750369793/77e9445ef53ed0cb143c46d2d554efb5.png?size=128")
            .card--name
              p.label.label--admin Admin
              h2 Jacob Paris
          .card--details
            p Jacob is a fullstack web developer from Canada with a background in enterprise SaaS, React, AWS, and business development.
            a(href="https://jacobparis.com", title="Jacob Paris's Website", target="_blank").highlighted Website
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/153591125221834752/08f023e7ef35f745b9cb4ee250a54ad6.png?size=128")
            .card--name
              p.label.label--admin Founder
              h2 klatsche
          .card--details
            p tbd
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/97466512444493824/1637e06a2560942299c6e67d9c01d548.png?size=128")
            .card--name
              p.label.label--admin Admin
              h2 Andres Sweeney-Rios
          .card--details
            p Andres is a passionate frontend and game developer located in USA.
            a(href="https://poisonapple.dev", title="Andres Website", target="_blank").highlighted Website
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/170451883134156800/ea3f4eac0a645aeee3aea4a93d977867.png?size=128")
            .card--name
              p.label.label--admin Admin
              h2 Gabe
          .card-details
            p Gabe is a fullstack developer located in Canada. He specializes in vue.js and is studying software engineering. He is also the creator and maintainer of Devcords bot.
            a(href="https://gabedunn.dev", title="Gabe Dunn's Website", target="_blank").highlighted Website
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/169979689518104576/a_8dca3b19b90c1d625c35b7b439e153b9.png?size=128")
            .card--name
              p.label.label--mod Mod
              h2 James
          .card--details
            p As a Belgian fullstack web developer, Jannes mostly enjoys hosting knowledge transfers and exploring new technologies or languages. He can also often be found advocating the functional programming paradigm.
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/206857563206189058/65518c51d124a81a157b22afa2723f78.png?size=128")
            .card--name
              p.label.label--mod Mod
              h2 ℚ.
          .card--details
            p tbd
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/307247078885818368/583570dd3dd28ce61c5b50d58dafc103.png?size=128")
            .card--name
              p.label.label--mod Mod
              h2 polarbeer
          .card--details
            p polarbeer is a designer and fullstack developer who has been involved in web since the dark ages of HTML 3 and inline CSS. Her interests include UI/UX, psychology, philosophy, fine art, graphic design, analytics, and engineering.
      .cards
        .card#you
          .card--name
            h2 How about you?

</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5vh 0;

  &.about {
    padding-bottom: 10vh;
    background-color: #212121;
  }
}

.card {
  &s {
    display: flex;
  }

  margin-bottom: 1rem;
  margin-right: 1rem;
  flex: 1;
  color: #f4f4f4;
  display: flex;
  flex-direction: column;
  background-color: #212121;
  //padding: 1rem;
  margin-bottom: 10vh;
  margin-right: 5rem;

  &#you {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:last-child {
    margin-right: 0;
  }

  h2 {
    margin: 0;
    font-weight: 700;
    display: block;
    font-size: 32px;
  }

  a {
    display: block;
    font-size: 14px;
  }

  &--meta {
    display: flex;
  }

  &--avatar {
    display:flex;
    flex-direction: column;
    margin-right: 1rem;
  }

  &--details {
    p {
      font-weight: 300;
    }

    a {
      font-size: 12px;
    }
  }

  .label {
    display: inline-block;
    margin: 0rem;
    font-size: 14px;
    color: #f4f4f4;
    letter-spacing: 5px;

    font-size: 15px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;

    &--owner {
      //background: #f0134d;
    }

    &--admin {
      //background: #ea1c1c;
    }

    &--mod {
      //background: #53ab68;
    }

  }
}
@media only screen and (max-width: 800px) {
  .cards {
    flex-direction: column;
  }
}
</style>
