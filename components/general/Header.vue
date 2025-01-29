<template>
  <div>
    <div class="container">
      <header
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-md-between
          py-3
        "
      >
        <nuxt-link to="/" 
          class="
            d-flex
            align-items-center
            col-md-3
            mb-2 mb-md-0
            text-dark text-decoration-none
          "
        >
          <img src="~/public/logo_SLF.svg" alt="Singaraja Literary Festival" height="80"/>
    </nuxt-link>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><nuxt-link to="/" class="nav-link px-2 link-secondary">Home</nuxt-link></li>
          <li><nuxt-link to="/about-us" class="nav-link px-2 link-dark">About Us</nuxt-link></li>
          <li><nuxt-link to="/join-the-festival" class="nav-link px-2 link-dark">Join the Festival</nuxt-link></li>
          <li><nuxt-link to="/programs" class="nav-link px-2 link-dark">Programs</nuxt-link></li>
          <li><nuxt-link to="/partners" class="nav-link px-2 link-dark">Partners</nuxt-link></li>          
        </ul>

        <!-- <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">
            Contact Us
          </button>
          <button type="button" class="btn btn-primary">Download Theme</button>
        </div> -->
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>