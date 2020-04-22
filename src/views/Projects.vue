<template lang="pug">
main
  section
    .content
      h1 Projects
      h2 devmod
      p.
        devmod is a project started by <router-link to="/about" class="plain">Gabe</router-link> for the devcord
        community on discord. It was written in typescript as part of devcord's topic of the month for March 2020, in
        which typescript was the featured topic. The bot is written with modularity, transparency, and ease of use, and
        was reworked from the ground up in an effort to make the bot more stable.
      p
        a(href="https://github.com/redxtech/devmod-core", title="See on Github", target="_blank").highlighted Source
      h2 Devcord Challenges
      p Want to compete with others and win prices? This platform is being used to submit your challenge submission and to archive previous challenges.
      p
        a(href="https://github.com/devcord/devcord_challenges", title="See on Github", target="_blank").highlighted Source
      h2 Webgems & Sysgems
      p Webgems is a place for devs and designers to find useful resources all at one place. It has server resources on HTML, CSS, Javascript, Design, Icons, Accessibility, PHP, Podcasts, Python, Ruby, Servers and more. Sysgems is a clone of Webgems, to fit Devops and Sysadmins needs.
      p
        a(href="https://github.com/webgems", title="See on Github", target="_blank").highlighted Source
      h2 Devcord Hackathons
      p Our newest projects, Hackathons, is meant to bring together people across serveral discords to participate in an online hackathon based on any web topic. This project is currently being built.
</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10vh;

  a.plain {
    color: #f4f4f4;

    &:hover {
      color: #f0134d;
    }
  }
}
</style>
