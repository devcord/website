<template lang="pug">
main
  section
    .content
      h1 Founded 2016
      p Founded by klatsche
      i tbd
      h2 Live Stats
      i tbd
      h2 Our Staff
      .cards
        .card.card--owner
          h3 lost#0001
          small Owner
          a(href="https://lost.design", title="lost.design").class https://lost.design
        .card.card--admin
          h3 JacobParis#6933
          small Admin
        .card.card--admin
          h3 Poison Apple#9351
          small Admin
        .card.card--admin
          h3 RedXTech#3076
          small Admin
      .cards
        .card.card--mod
          h3 ℚ.#7750
          small Mod
        .card.card--mod
          h3 pvtHenk#1337
          small Mod
      h2 MVPs
</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  &s {
    display: flex;
  }

  padding: 1rem;
  background: #eeeeee;
  margin-bottom: 1rem;
  margin-right: 1rem;
  flex: 1;
  color: #ffffff;

  &:last-child {
    margin-right: 0;
  }

  h3 {
    margin: 0;
    font-weight: 700;
  }
  small {
    margin-bottom: 1rem;
    display: block;
    font-size: 12px;
  }

  a {
    display: block;
    font-size: 14px;
    color: #ffffff;
  }

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

</style>