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
      <invitation-page />
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'Get Your Invitation - Singaraja Literary Festival',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Join us as we celebrate the power of words, connect with inspiring storytellers, and explore the beauty of Singaraja.',
              ogImage: '~/public/img/logoslf.png'
       }
    ],
    bodyAttrs: {
      class: 'slf'
    }
  })
  </script>
  