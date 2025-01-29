<template>
    <div>
      <!-- <div class="container-fluid text-center">
        <div class="row">
          <div class="col p-0">
            <HomeCarousel />
          </div>
        </div>
      </div> -->
      <!-- <HomeIntro /> -->
      <!-- <HomeAbout />
      <HomeReinforcement />
      <HomeHero /> -->
      
      <HomeBenefit />
      <HomeClosingStatement />
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'About Us - Singaraja Literary Festival',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  })
  </script>
  