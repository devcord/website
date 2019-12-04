<template lang="pug">
main
  section#bg
    .content
      h1 Looking for new friends?
      p Devcord is a community that brings together web developers of all experience levels. Get help with your code, connect with other web developers, discuss your current project and chat about your favourite languages, libraries, and frameworks.
      a.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!")  Join us on Discord
  section.background--dark
    .content
      .wrapper
        .card
          h2 Active Community
          p With over 5000 registered users and an average of 1000 online, we have a very active Discord community with members from all around the globe.
        .card
          h2 Friendly NPCs
          p Find new friends, talk about web development, side projects, ask for help, talk about gaming, music and other off-topics.
        .card
          h2 Open Source
          p Work on our open-sourced projects together with our community. Learn more about our projects on our Github Team page.
  section.discord-partner
    .content
      header
        img(src="@/assets/discord-partner-logo.svg")
        h1 Official Discord Partner
      p We are part of the Partner Program since August 2019.
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;

  &#bg:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 72px;
    width: 100%;
    height: 100%;

    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDQgMzA0IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjMwNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnoiPjwvcGF0aD48L3N2Zz4=");
    overflow: hidden;
    opacity: 0.5;
    z-index: -1;
    background-size: 20%;
  }

  .content {
    margin: 20vh 1rem;

    .wrapper {
      display:flex;
      justify-content: space-between;

      .card {
        flex: 1;
        color: #212121;
        background-color: #f4f4f4;
        padding: 1rem 2rem 2rem 2rem;
        margin-right: 1rem;

        &:last-child {
          margin-right: 0;
        }

        h2 {
          margin-top: 0;
        }

        p {
          margin-bottom: 0;
        }
      }
    }

    h1 {
      margin: 0rem;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }

    .join--button {
      border: none;
      background-color: #f0134d;
      color: #f4f4f4;
      padding: 0.5rem 1rem;
      font-weight: 500;
      font-size: 16px;
      transition: 0.2s;
      display: inline-block;

      &:hover {
        box-shadow: inset 0 -3rem 0 0  #212121;
        cursor: pointer;
      }
    }
  }
}

.discord-partner {
  .content {
    header {
      display: flex;
      img {
        width: 4rem;
        margin-right: 1rem;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  section {
    .content {
      margin: 10vh 1rem;
    }
    .wrapper {
      flex-direction: column;

      .card {
        margin-bottom: 1rem;
        margin-right: 0rem !important;
      }
    }
    &.discord-partner {
      .content {
        header {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
