<template>
  <section class="text-center bg-white" id="intro">
    <div class="container">
      <div class="row justify-content-center pt-5">
        <div class="col-xl-9">
          <h2 class="h1">
            A celebration of culture and literacy
          </h2>
        </div>
      </div>
      <div class="row justify-content-center pt-2 pb-5">
        <div class="col-xl-9">
          <p>
            Singaraja Literary Festival (SLF) is a celebration of culture and literacy dedicated to reviving the rich literary heritage and intellectual traditions of Singaraja. Centered at Gedong Kirtya, Bali's first lontar manuscript library, SLF blends art, research, and tradition through workshops, performances, exhibitions, and discussions.
          </p>
        </div>
      </div>

      <IntroMobile v-if="isMobile" />
      <template v-else>
        <div class="row py-5">
          <div class="col">
            <i class="fa-solid fa-pen-to-square fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Public Lecture</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-users fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Panel Discussion</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-feather fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Workshop</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-book fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Book Launch</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-play-circle fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Movie Screening</h3>
          </div>        
        </div>
        <div class="row py-5">
          <div class="col">
            <i class="fa-solid fa-music fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Music Performance</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-masks-theater fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Teater Performance</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-building fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Exhibition</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-pen-fancy fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Art Installation</h3>
          </div>
          <div class="col">
            <i class="fa-solid fa-handshake fa-4x"></i>
            <h3 class="pt-4 h3 fs-5">Collaborative Event</h3>
          </div>        
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import IntroMobile from './IntroMobile.vue'

export default {
  name: 'Intro',
  components: {
    IntroMobile
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    }
  }
}
</script>

<style>
</style>