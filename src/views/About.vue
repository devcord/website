<template lang="pug">
main
  section
    .content
      h1 Who are we?
      p Founded in 2016, Devcord started as a small group of developers trying to help each other with daily code issues that may arise.
  section.about
    .content
      h1 Meet the team
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/lost.png")
            .card--name
              p.label.label--owner Owner
              h2 lost
              p.label.label--tag lost#0001
          .card--details
            p lost is a fullstack developer, based in Germany. His speciality is design and frontend with a strong background in Devops. He loves photography and cats.
            a(href="https://lost.design", title="lost's Website", target="_blank").highlighted Website
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/redxtech.png")
            .card--name
              p.label.label--admin Admin
              h2 Gabe
              p.label.label--tag RedXTech#5019
          .card-details
            p Gabe is a fullstack developer located in Canada. He specializes in vue.js and is studying software engineering. He is also the creator and maintainer of devcord's bot:&nbsp;
              a(href="https://github.com/redxtech/devmod-core", target="_blank").inline devmod
              | .
            a(href="https://gabedunn.dev", title="Gabe Dunn's Website", target="_blank").highlighted Website
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/pvthenk.png")
            .card--name
              p.label.label--mod Admin
              h2 Jannes
              p.label.label--tag pvtHenk#1337
          .card--details
            p As a Belgian fullstack web developer, Jannes mostly enjoys hosting knowledge transfers and exploring new technologies or languages. He can also often be found advocating the functional programming paradigm.
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/q.png")
            .card--name
              p.label.label--mod Admin
              h2 ℚ.
              p.label.label--tag ℚ.#7750
          .card--details
            p Austin is a computer science student and a freelance developer located in the United States. He works a lot with backend development and data visualization. As well works with teaching children and adults how to swim.
            a(href="https://quedev.xyz", title="Austins's Website", target="_blank").highlighted Website
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/polarbeer.png")
            .card--name
              p.label.label--mod Admin
              h2 polarbeer
              p.label.label--tag polarbeer#0001
          .card--details
            p polarbeer is a designer and fullstack developer who has been involved in web since the dark ages of HTML 3 and inline CSS. Her interests include UI/UX, psychology, philosophy, fine art, graphic design, analytics, and engineering.
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/waffeln.jpg")
            .card--name
              p.label.label--mod Admin
              h2 Roman
              p.label.label--tag waffeln#5603
          .card--details
            p Roman is a fullstack developer and a DJ and since he enjoys dark and stressful Drum & Bass, naturally, he's into JavaScript. In his day job he also works a lot with PHP, SQL and other related technologies.
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/devmod.png")
            .card--name
              p.label.label--bot Bot
              h2 devmod
              p.label.label--tag devmod#0974
          .card--details
            p.
              unless his codebase is being rewritten, devmod is helping us ban (or yeet) people from the server, tracking
              your reputation, providing useful tags, or assisting with various tasks around the server.
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/goose.png")
            .card--name
              p.label.label--bot Bot
              h2 Goose
              p.label.label--tag goose#9321
          .card--details
            p mess with the honk, you get the bonk
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

  .card-details {
    a.inline {
      color: #f4f4f4;
      display: inline;
      font-size: 16px;

      &:hover {
        color: #f0134d;
      }
    }
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

    &--tag {
      font-size: 12px;
    }

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
