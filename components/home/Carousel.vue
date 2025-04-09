<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <div class="slf_overlay"></div>
      <div class="carousel-caption">
        <h5>Join The Festival</h5>
        <p>Experience the Magic of Singaraja Literary Festival</p>
        <nuxt-link class="btn btn-primary btn-lg" to="/about-us" role="button">Read More</nuxt-link>
      </div>
      <img src="~/public/img/hero-00.webp" class="d-block w-100" alt="Company">
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <div class="slf_overlay"></div>
      <div class="carousel-caption">
        <h5>Become Our Partners</h5>
        <p>Experience the Magic of Singaraja Literary Festival</p>
        <nuxt-link class="btn btn-primary btn-lg" to="/partners" role="button">Contact Us</nuxt-link>        
      </div>
      <img src="~/public/img/hero-01.webp" class="d-block w-100" alt="Company">
    </div>
    <div class="carousel-item">
      <div class="slf_overlay"></div>
      <div class="carousel-caption">
        <h5>Get Your Invitation</h5>
        <p>Experience the Magic of Singaraja Literary Festival</p>
        <nuxt-link class="btn btn-primary btn-lg" to="/invitation" role="button">Sign Up Now</nuxt-link>
      </div>
      <img src="~/public/img/hero-02.webp" class="d-block w-100" alt="Company">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.carousel-caption {
    text-align: left;
    padding-top: 50px !important;
}
</style>