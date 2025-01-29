<template>
  <div>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 pt-5 pb-3">
          <div class="col-lg-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 mb-3">Join The Festival</h1>
              <p class="col-lg-10 fs-4">Discover stories, share your passion for literature, and connect with creative minds from around the globe.</p>
              <p class="col-lg-10 fs-4">By joining our festival, you’ll gain access to workshops, discussions, and performances that celebrate the art of storytelling</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
              <img alt="Image" src="~/public/img/about-us.webp" class="img-fluid shadow">
          </div>
      </div>
  </div>
  <section class="bg-dark text-white">
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-4 text-center">
            <img
              alt="Image"
              src="~/public/img/Kadek-Sonia-Piscayanti.png"
              class="avatar avatar-lg"
              width="180px"
            />
        </div>
        <div class="col-6">    
              <p class="h2">
                "We believe literature is a bridge connecting the past, present, and future, enabling modern generations to deeply understand their cultural heritage"
              </p>
              <span>Kadek Sonia Piscayanti, Founder SLF</span>
        </div>
      </div>
    </div>
  </section>
  
  <section class="bg-light">
    <div class="container py-5">

      <div class="row justify-content-around align-items-center py-5">
        <div class="col-8 col-md-6 col-lg-4">
          <h3 class="h2"><i class="fa-solid fa-users"></i> Become Our Partners</h3>
          <span class="lead">
            <strong>Partner or Sponsor:</strong> Collaborate to support our literary community
          </span>
          <p class="pt-3"><nuxt-link class="btn btn-primary btn-lg" to="/partners">Contact Us ›</nuxt-link></p>              
          <!-- <img alt="Image" src="~/public/img/about-us.webp" class="shadow" width="500px"> -->
        </div>
        <div class="col-12 col-md-6 col-lg-5 text-md-left section-intro">
          <!-- <span class="title-decorative">Designed for Developers</span> -->
          <h3 class="h2"><i class="fa-solid fa-ticket"></i> Get Your Invitation</h3>
          <span class="lead">
          <strong>Register Today:</strong> Claim and Reserve your spot through our limited slot registration form
          </span>
          <p class="pt-3"><nuxt-link class="btn btn-primary btn-lg" to="/invitation">Get Invitation ›</nuxt-link></p>
        </div>
      </div>

      
    </div>
  </section>

  <!-- <HomeClosingStatement /> -->
</div>

</template>

<script setup>
useHead({
  title: 'Join The Festival - Singaraja Literary Festival',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'By joining our festival, you’ll gain access to workshops, discussions, and performances that celebrate the art of storytelling' }
  ],
  bodyAttrs: {
    class: 'slf'
  }
})
</script>


<style></style>