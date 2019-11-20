<template lang="pug">
nav
  .content
    .nav--links
      router-link(to="/").logo.nav-link
        svg(width='40' height='40' viewbox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
          rect#red(width='40' height='40' fill='#f0134d')
          rect#black(width='40' height='40' fill='black')
          path(d='M9.1439 6.62769H15.6095L21.1306 15.5166L15.5884 24.4575H9.1228L14.6589 15.5166L9.1439 6.62769Z' fill='white')
          path(d='M30.7001 33.3463L24.2345 33.3463L18.7135 24.4575L24.2556 15.5166L30.7212 15.5166L25.1852 24.4575L30.7001 33.3463Z' fill='white')

      router-link(to="/").nav-link Home
      router-link(to="/about").nav-link About
      router-link(to="/partners").nav-link Partners
      router-link(to="/projects").nav-link Projects
    a.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!").nav-link  Join us
    .hamburger-wrapper(:class="menuOpen ? 'open' : ''")
      .hamburger-menu(:class="menuOpen ? 'open' : ''" @click="toggleMenu")

  .mobile-nav(:class="menuOpen ? 'open' : ''")
    .mobile--links
      router-link(to="/").mobile-link Home
      router-link(to="/about").mobile-link About
      router-link(to="/partners").mobile-link Partners
      router-link(to="/projects").mobile-link Projects
      router-link(to="/privacy-policy").mobile-link Privacy Policy
    a#join-devcord(href="https://discord.gg/devcord", title="Join 5000 others on devcord!").mobile-link  Join us on Discord
</template>

<script>
export default {
  data () {
    return {
      menuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      if (this.menuOpen) {
        this.menuOpen = false
        document.body.style.overflow = 'auto'
      } else {
        this.menuOpen = true
        document.body.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: #212121;
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;

  .content {
    background: #212121;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 1rem;

    .nav--links {
      display: flex;
      align-items: center;
    }
  }

  .nav-link {
    padding: 0.5rem;
    margin-right: 0.5rem;
    color: #f4f4f4;
    font-weight: 700;
    box-shadow: inset 0 0 0 0 #f0134d;
    transition: 0.2s;

    &:not(first-child) {
      display: none
    }

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

@media (min-width: 502px) {
  nav {
    .nav-link:not(first-child) {
      display: flex;
    }
  }

  .hamburger-wrapper {
    display: none;
  }
}

.hamburger-wrapper {
  width: 30px;
  height: 24px;
  cursor: pointer;
  z-index: 5;
  right: 90.5px;
  left: auto;
  position: static;

  &.open {
    right: 15px;
    left: auto;
    position: absolute;
  }
}

.hamburger-menu,
.hamburger-menu:after,
.hamburger-menu:before {
  width: 30px;
  height: 2px;
}

.hamburger-menu {
  position: relative;
  transform: translateY(10px);
  background: white;
  transition: all 0ms 300ms;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 7px;
    background: white;
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    background: white;
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.open {
    background: rgba(255, 255, 255, 0);

    &:after {
      top: 0;
      transform: rotate(45deg);
      transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:before {
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
}

.mobile-nav {
  background: #111111;
  display: flex;
  justify-content: center;
  transition: left .5s;
  margin: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100vw;
  height: 100vh;
  width: 100vw;
  z-index: -1;

  &.open {
    left: 0;
  }

  .mobile--links {
    display: flex;
    flex-flow: column;
    font-size: 32px;
    font-weight: 600;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20vh 0 0 20vw;

      .mobile-link {
        color: #FFFFFF;
        text-decoration: none;
        padding: 0.5rem 0;
      }
  }

  #join-devcord {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    padding: 0.75rem 0;
    font-size: 22px;
    font-weight: 600;
    background: #f1124e;
    font-size: 28px;
    color: #FFFFFF;
  }
}
</style>
