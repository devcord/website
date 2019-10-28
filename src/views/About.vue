<template lang="pug">
main
  section
    .content
      h1 Who are we?
      p Founded by klatsche in 2016, Devcord started as a small group of developers trying to help each other with daily code issues that may arise.
      h2 Live Stats
      p Here are some live stats from our discord.
      i tbd
  section.about
    .content
      h1 Meet the team
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/126251022002814976/df9543d055d652f1830928ae04656fe7.png?size=128")
            .card--name
              p.label.label--owner Owner
              h2 lost
          .card--details
            p lost is a fullstack developer, based in Germany.
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/231856762750369793/77e9445ef53ed0cb143c46d2d554efb5.webp?size=128")
            .card--name
              p.label.label--admin Admin
              h2 JacobParis
          .card--details
            p desc
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/153591125221834752/e45077e09a3220d7f8ad79265ae119c0.png?size=128")
            .card--name
              p.label.label--admin Founder
              h2 klatsche
          .card--details
            p desc
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/97466512444493824/1637e06a2560942299c6e67d9c01d548.png?size=128")
            .card--name
              p.label.label--admin Admin
              h2 PoisonApple
          .card--details
            p desc

      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/170451883134156800/ea3f4eac0a645aeee3aea4a93d977867.png?size=128")
            .card--name
              p.label.label--admin Admin
              h2 RedXTech
          .card-details
            p desc
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/206857563206189058/65518c51d124a81a157b22afa2723f78.png?size=128")
            .card--name
              p.label.label--mod Mod
              h2 ℚ.
          .card--details
            p desc
      .cards
        .card
          .card--meta
            .card--avatar
              img(src="https://cdn.discordapp.com/avatars/169979689518104576/a_8dca3b19b90c1d625c35b7b439e153b9.png?size=128")
            .card--name
              p.label.label--mod Mod
              h2 pvtHenk
          .card--details
            p desc
        .card#you
          .card--name
            h2 How about you?
      h2 MVPs
</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5vh 0;

  &.about {
    padding-bottom: 10vh;
  }
}

.card {
  &s {
    display: flex;
  }

  margin-bottom: 1rem;
  margin-right: 1rem;
  flex: 1;
  color: #212121;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;

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
    a {
      font-size: 12px;
    }
  }

  .label {
    display: inline-block;
    text-align: center;
    margin: 0rem;
    font-size: 11px;
    color: #ffffff;
    padding: 0rem .5rem;

    &--owner {
      background: #f0134d;
    }

    &--admin {
      background: #ea1c1c;
    }

    &--mod {
      background: #53ab68;
    }

  }
}

</style>