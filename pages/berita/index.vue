<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 fw-bold mb-4 text-center">SLF News</h1>
      </div>
    </div>
    
    <div class="row">
      <div v-if="pending" class="col-12 text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      
      <div v-else-if="error" class="col-12">
        <div class="alert alert-danger" role="alert">
          {{ error.message }}
        </div>
      </div>
      
      <div v-else class="col-12">
        <div class="row">
          <div v-for="berita in sortedBerita" :key="berita.id" class="col-md-4 mb-4">
            <nuxt-link :to="`/berita/${berita.slug}`" class="text-decoration-none">
              <div class="card h-100">
                <img 
                  :src="berita.metadata.foto_berita.imgix_url" 
                  class="card-img-top program-thumbnail" 
                  :alt="berita.title"
                >
                <div class="card-body">
                  <h5 class="card-title text-dark">{{ berita.title }}</h5>
                  <p class="card-text text-muted">
                    <i class="fas fa-calendar-alt me-2"></i>
                    {{ formatDate(berita.metadata.tanggal_berita) }}
                  </p>
                  <!-- <p class="card-text text-dark">{{ berita.metadata.body_berita }}</p> -->
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getObjects } = useCosmic()
const { formatDate } = useDateFormat()

// Fetch berita data
const { data: beritaList, pending, error } = await useAsyncData('berita-list', () => getObjects('berita'))

// Sort berita alphabetically by title
const sortedBerita = computed(() => {
  if (!beritaList.value?.objects) return []
  return [...beritaList.value.objects].sort((a, b) => 
    a.title.localeCompare(b.title)
  )
})

// Set page meta
useHead({
  title: 'Berita Kami - Singaraja Literary Festival',
  meta: [
    { 
      name: 'description', 
      content: 'Berita dan informasi terkini tentang Singaraja Literary Festival'
    }
  ]
})
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.program-thumbnail {
  height: 200px;
  object-fit: cover;
  width: 100%;
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style> 