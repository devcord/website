<template lang="pug">
  .textWall
    p {{ randomString }}
</template>

<script>
export default {
  data() {
    return {
      randomString: [...Array(20000)].map(i=>(~~(Math.random()*36)).toString(36)).join(''),
    }
  },
  created() {
    requestAnimationFrame(this.shiftString)
  },
  methods: {
    shiftString() {
      const firstThreeChars = this.randomString.substr(0,3)
      const cutString = this.randomString.substr(3)
      this.randomString = cutString.concat(firstThreeChars)

      requestAnimationFrame(this.shiftString)
    }
  }
}
</script>

<style lang="scss" scoped>
.textWall {
  width: 100vw;
  position: absolute;
  top: 56px;
  left: 0;
  overflow: hidden;
  z-index: -1;

  p {
    overflow-wrap: break-word;
    color: #eee;
    font-size: 12px;
    text-transform: uppercase;
  }
}
</style>