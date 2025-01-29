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
      <partner-page />
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'Become Our Partners - Singaraja Literary Festival',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'As a sponsor, you’ll connect with a vibrant audience of creatives, writers, and thinkers while showcasing your commitment to culture and education.',
              ogImage: '~/public/img/logoslf.png'
       }
    ],
    bodyAttrs: {
      class: 'slf'
    }
  })
  </script>
  