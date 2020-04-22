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
              img(src="../assets/staff/lost.png")
            .card--name
              p.label.label--owner Owner
              h2 André Weller
              p.label.label--tag lost#0001
          .card--details
            p André is a fullstack developer, based in Germany. His speciality is design and frontend with a strong background in Devops. He loves photography and cats.
            a(href="https://lost.design", title="André Weller's Website", target="_blank").highlighted Website
            //-a(href="https://github.com/lostdesign", title="André Weller's Website", target="_blank").highlighted Github
            //-a(href="https://twitter.com/lostdesign", title="André Weller's Website", target="_blank").highlighted Twitter
            //-a(href="https://instagram.com/lostdesign", title="André Weller's Website", target="_blank").highlighted Instagram
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/poisonapple.png")
            .card--name
              p.label.label--admin Admin
              h2 Andres Sweeney-Rios
              p.label.label--tag Poison Apple#9351
          .card--details
            p Andres is a passionate frontend and game developer located in USA.
            a(href="https://poisonapple.dev", title="Andres Website", target="_blank").highlighted Website
      .cards
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
        .card
          .card--meta
            .card--avatar
              img(src="../assets/staff/pvthenk.png")
            .card--name
              p.label.label--mod Admin
              h2 James
              p.label.label--tag pvtHenk#1337
          .card--details
            p As a Belgian fullstack web developer, Jannes mostly enjoys hosting knowledge transfers and exploring new technologies or languages. He can also often be found advocating the functional programming paradigm.
      .cards
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
