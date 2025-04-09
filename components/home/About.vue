<template>
  <section class="bg-light">
        <div class="container py-5 slf_about">

          <div class="row justify-content-around align-items-center pt-5">
            <div class="col-12 col-md-6 col-lg-6 text-md-left section-intro">
              <h3 class="h1">About Us</h3>
              <span class="lead">
                SLF is a cultural initiative dedicated to documenting and revitalizing the intellectual wealth and literary traditions of Singaraja, Bali.
              </span>
              <p><nuxt-link to="/about-us">Read More ›</nuxt-link></p>
            </div>
            <div class="col-8 col-md-6 col-lg-4">
              <img alt="Image" src="~/public/logo_SLF.svg" width="400px">
            </div>
          </div>

          <div class="row justify-content-around align-items-center py-5">
            <div class="col-12 col-md-6 col-lg-5 text-md-left section-intro pb-5">
              <h3 class="h1">Our Vision</h3>
              <span class="lead">
                SLF held for everyone to reignite pride in Singaraja as a city of historical and cultural heritage.
              </span>
              <p><nuxt-link to="/about-us">Read More ›</nuxt-link></p>              
              <!-- <img alt="Image" src="~/public/img/about-us.webp" class="shadow" width="500px"> -->
            </div>
            <div class="col-12 col-md-6 col-lg-5 text-md-left section-intro">
              <!-- <span class="title-decorative">Designed for Developers</span> -->
              <h3 class="h1">Our Mission</h3>
              <span class="lead">
                Unearth the roots of Singaraja's literary works – bringing them to the stage, discussing, and documenting them
              </span>
              <p><nuxt-link to="/about-us">Read More ›</nuxt-link></p>
            </div>
          </div>

          
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style>
  @media (max-width: 768px) {
  .container.slf_about {
    padding-left: 30px;
    padding-right: 30px;
  }
  .container.slf_about img {
   display: none;
  }  
  }
</style>