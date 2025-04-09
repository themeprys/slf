<template>
  <section class="bg-dark text-white">
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-4 col-md-4 text-center">
            <img
              alt="Image"
              src="~/public/img/Kadek-Sonia-Piscayanti.png"
              class="avatar avatar-lg"
              width="180px"
            />
        </div>
        <div class="col col-md-6 slf_reinforcement">    
              <p class="h2">
                "We believe literature is a bridge connecting the past, present, and future, enabling modern generations to deeply understand their cultural heritage"
              </p>
              <span>Kadek Sonia Piscayanti, Founder SLF</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style> 
.slf_reinforcement p.h2,
.slf_reinforcement span {
  @media (max-width: 768px) {
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.5;
    padding-left: 20px;
  }
}
</style>