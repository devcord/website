<template lang="pug">
div(v-if="showNotice")
  .cookie
    p This site uses cookies, please read our&nbsp;
      router-link.highlighted(to="privacy-policy") Privacy policy.
      button.highlighted(@click.preventDefault="hideCookieNotice" type="button") X
</template>

<style lang="scss" scoped>
.cookie {
  position: fixed;
  margin: 1rem;
  bottom: 0;
  left: 0;
  background-color: #212121;
  padding: 0 1rem;
  border-radius: .3rem;
  box-shadow:inset 0px 0px 0px 2px #f0134d;
  color: #ffffff;
  z-index: 999;

  a {
    color: #ffffff;
  }

  p {
    font-size: 12px;
    margin-left: 1.2rem;

    &::before {
      content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgZmlsbD0iI2YwMTM0ZCI+PGcgaWQ9InN1cmZhY2UxIiBmaWxsPSIjZjAxMzRkIj48cGF0aCBzdHlsZT0iICIgZD0iTSAxNC41IDAgQyAxMC41MzEyNSAwIDcuMTYwMTU2IDIuMzk4NDM4IDUuNzE4NzUgNS43ODEyNSBDIDIuMzU5Mzc1IDcuMjQ2MDk0IDAgMTAuNjA5Mzc1IDAgMTQuNSBDIDAgMTkuNzM0Mzc1IDQuMjY1NjI1IDI0IDkuNSAyNCBDIDEzLjM5MDYyNSAyNCAxNi43NTM5MDYgMjEuNjQwNjI1IDE4LjIxODc1IDE4LjI4MTI1IEMgMjEuNjAxNTYzIDE2LjgzOTg0NCAyNCAxMy40Njg3NSAyNCA5LjUgQyAyNCA0LjI2MTcxOSAxOS43MzgyODEgMCAxNC41IDAgWiBNIDE0LjUgMiBDIDE4LjY2MDE1NiAyIDIyIDUuMzM5ODQ0IDIyIDkuNSBDIDIyIDEyLjA0Njg3NSAyMC43Njk1MzEgMTQuMjM4MjgxIDE4LjkwNjI1IDE1LjU5Mzc1IEMgMTguOTQ5MjE5IDE1LjIzNDM3NSAxOSAxNC44NzEwOTQgMTkgMTQuNSBDIDE5IDExLjU3MDMxMyAxNy42NTYyNSA4Ljk2NDg0NCAxNS41NjI1IDcuMjE4NzUgQyAxNS44MjgxMjUgNi44Nzg5MDYgMTYgNi40NjA5MzggMTYgNiBDIDE2IDQuODk0NTMxIDE1LjEwNTQ2OSA0IDE0IDQgQyAxMy4xMTMyODEgNCAxMi4zNTU0NjkgNC41NzQyMTkgMTIuMDkzNzUgNS4zNzUgQyAxMS4yNjU2MjUgNS4xMzY3MTkgMTAuNDAyMzQ0IDUgOS41IDUgQyA5LjEyODkwNiA1IDguNzY1NjI1IDUuMDUwNzgxIDguNDA2MjUgNS4wOTM3NSBDIDkuNzYxNzE5IDMuMjMwNDY5IDExLjk1MzEyNSAyIDE0LjUgMiBaIE0gMTkgNSBDIDE4LjQ0OTIxOSA1IDE4IDUuNDQ5MjE5IDE4IDYgQyAxOCA2LjU1MDc4MSAxOC40NDkyMTkgNyAxOSA3IEMgMTkuNTUwNzgxIDcgMjAgNi41NTA3ODEgMjAgNiBDIDIwIDUuNDQ5MjE5IDE5LjU1MDc4MSA1IDE5IDUgWiBNIDkuNSA3IEMgMTMuNjUyMzQ0IDcgMTcgMTAuMzQ3NjU2IDE3IDE0LjUgQyAxNyAxNS4zNTkzNzUgMTYuODU5Mzc1IDE2LjE5OTIxOSAxNi41OTM3NSAxNi45Njg3NSBDIDE2LjU4MjAzMSAxNyAxNi41NzAzMTMgMTcuMDMxMjUgMTYuNTYyNSAxNy4wNjI1IEMgMTUuNTIzNDM4IDE5Ljk1NzAzMSAxMi43NTc4MTMgMjIgOS41IDIyIEMgNS4zNDc2NTYgMjIgMiAxOC42NTIzNDQgMiAxNC41IEMgMiAxMS4zMzU5MzggMy45MjU3ODEgOC42MzY3MTkgNi42ODc1IDcuNTMxMjUgQyA2Ljc1IDcuNTE1NjI1IDYuODE2NDA2IDcuNDk2MDk0IDYuODc1IDcuNDY4NzUgQyA3LjY4NzUgNy4xNjc5NjkgOC41ODIwMzEgNyA5LjUgNyBaIE0gMTkuNSA4IEMgMTguNjcxODc1IDggMTggOC42NzE4NzUgMTggOS41IEMgMTggMTAuMzI4MTI1IDE4LjY3MTg3NSAxMSAxOS41IDExIEMgMjAuMzI4MTI1IDExIDIxIDEwLjMyODEyNSAyMSA5LjUgQyAyMSA4LjY3MTg3NSAyMC4zMjgxMjUgOCAxOS41IDggWiBNIDcgMTAgQyA1Ljg5NDUzMSAxMCA1IDEwLjg5NDUzMSA1IDEyIEMgNSAxMy4xMDU0NjkgNS44OTQ1MzEgMTQgNyAxNCBDIDguMTA1NDY5IDE0IDkgMTMuMTA1NDY5IDkgMTIgQyA5IDEwLjg5NDUzMSA4LjEwNTQ2OSAxMCA3IDEwIFogTSAxMiAxMCBDIDExLjQ0OTIxOSAxMCAxMSAxMC40NDkyMTkgMTEgMTEgQyAxMSAxMS41NTA3ODEgMTEuNDQ5MjE5IDEyIDEyIDEyIEMgMTIuNTUwNzgxIDEyIDEzIDExLjU1MDc4MSAxMyAxMSBDIDEzIDEwLjQ0OTIxOSAxMi41NTA3ODEgMTAgMTIgMTAgWiBNIDEzLjUgMTMgQyAxMi42NzE4NzUgMTMgMTIgMTMuNjcxODc1IDEyIDE0LjUgQyAxMiAxNS4zMjgxMjUgMTIuNjcxODc1IDE2IDEzLjUgMTYgQyAxNC4zMjgxMjUgMTYgMTUgMTUuMzI4MTI1IDE1IDE0LjUgQyAxNSAxMy42NzE4NzUgMTQuMzI4MTI1IDEzIDEzLjUgMTMgWiBNIDYgMTYgQyA1LjQ0OTIxOSAxNiA1IDE2LjQ0OTIxOSA1IDE3IEMgNSAxNy41NTA3ODEgNS40NDkyMTkgMTggNiAxOCBDIDYuNTUwNzgxIDE4IDcgMTcuNTUwNzgxIDcgMTcgQyA3IDE2LjQ0OTIxOSA2LjU1MDc4MSAxNiA2IDE2IFogTSAxMCAxOCBDIDkuNDQ5MjE5IDE4IDkgMTguNDQ5MjE5IDkgMTkgQyA5IDE5LjU1MDc4MSA5LjQ0OTIxOSAyMCAxMCAyMCBDIDEwLjU1MDc4MSAyMCAxMSAxOS41NTA3ODEgMTEgMTkgQyAxMSAxOC40NDkyMTkgMTAuNTUwNzgxIDE4IDEwIDE4IFogIiBmaWxsPSIjZjAxMzRkIi8+PC9nPjwvc3ZnPgo=');
      width: 18px;
      height: 18px;
      display: block;
      margin-left: -1.5rem;
      margin-bottom: -1.1rem;
    }
  }

  button {
    border: none;
    margin-left: .8rem;
    cursor: pointer;
    background: #f0134d;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showNotice: false,
    }
  },
  beforeMount() {
    this.checkCookieNoticeHidden()
  },
  methods: {
    hideCookieNotice() {
      if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('cookieNoticeHidden', true)
        this.showNotice = false
      }
    },
    checkCookieNoticeHidden() {
      if(typeof(Storage) !== 'undefined'){
        let cookieNotice = localStorage.getItem('cookieNoticeHidden')
        if(cookieNotice) {
          this.showNotice = false
        } else {
          this.showNotice = true
        }
      }
    },
  }
}
</script>