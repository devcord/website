<template lang="pug">
nav
  .content
    .nav--links
      router-link(to="/").logo
        svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          rect#red(width='40' height='40' fill='#f0134d')
          rect#black(width='40' height='40' fill='black')
          path(d='M9.1439 6.62769H15.6095L21.1306 15.5166L15.5884 24.4575H9.1228L14.6589 15.5166L9.1439 6.62769Z' fill='white')
          path(d='M30.7001 33.3463L24.2345 33.3463L18.7135 24.4575L24.2556 15.5166L30.7212 15.5166L25.1852 24.4575L30.7001 33.3463Z' fill='white')

      router-link(to="/") Home
      router-link(to="/about") About
      router-link(to="/partners") Partners
      router-link(to="/projects") Projects
    a.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!")  Join us
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #212121;
  position: sticky;
  top: 0;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav--links{
      display: flex;
      align-items: center;
    }
  }

  a {
    padding: 0.5rem;
    margin-right: 0.5rem;
    color: #f4f4f4;
    font-weight: 700;
    box-shadow: inset 0 0 0 0 #f0134d;
    transition: 0.2s;

    &.router-link-exact-active {
      &:hover {
        color: #f4f4f4 !important;
      }
    }

    &:hover {
      color: #f4f4f4;
      box-shadow: inset 0 -3rem 0 0  #f0134d;
    }

    &.join--button {
      background-color: #111111;
      color: #f4f4f4;
      margin-right: 0;
      transition: 0.2s;
      cursor: pointer;
    }

    &.logo {
      display: flex;
      padding: 0;
      margin-right: 1.5rem;

      svg {
        rect#black {
          animation: fillBlackDown normal forwards 0.2s;
        }
      }

      &:hover {
        svg {
          rect#black {
            animation: fillRedUp normal forwards 0.2s;
          }
        }
        box-shadow: none;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  nav {
    img {
      margin-right: 1rem;
    }
  }
}

@keyframes fillRedUp {
  0% {
    height: 100%;

  }
  100% {
    height: 0%;
  }
}

@keyframes fillBlackDown {
  0% {
    height: 0%;

  }
  100% {
    height: 100%;
  }
}
</style>
