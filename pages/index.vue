<template>
  <div>
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col p-0">
          <HomeCarousel />
        </div>
      </div>
    </div>
    <HomeIntro />
    <HomeReinforcement />
    <HomeAbout />
    <HomeHero />
    <HomeBenefit />
    <HomeClosingStatement />
  </div>
</template>

<script setup>
useHead({
  title: 'Singaraja Literary Festival Official Site',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'A cultural initiative dedicated to documenting and revitalizing the intellectual wealth and literary traditions of Singaraja, Bali',
            ogImage: '~/public/img/logoslf.png'
     }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>
