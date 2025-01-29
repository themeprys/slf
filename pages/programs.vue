<template>
    <div>
      <div class="text-center pt-5">
        <div class="row">
          <div class="col p-0">
            <h3 class="fs-1 fw-bold">Our Program</h3>
          </div>
        </div>
      </div>

      <HomeIntro />
      <!-- <HomeAbout />
      <HomeReinforcement /> -->
      <!-- <HomeHero /> -->


      <HomeClosingStatement />
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'Singaraja Literary Festival 2025 Programs',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Celebration of culture and literacy dedicated to reviving the rich literary heritage and intellectual traditions of Singaraja centered at Gedong Kirtya' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  })
  </script>
  