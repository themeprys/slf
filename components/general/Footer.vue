<template>
  <div class="bg-light text-dark">
    <div class="container text-center">
      <div class="row">
        <div class="col py-4">
          <p>
            Singaraja Literary Festival &copy; 2023 - {{ currentYear }}<br />All Rights Reserved<br />Design by
            <a href="https://denpasastra.net" target="_blank" rel="noopener noreferrer">Denpasastra.net</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
</style>