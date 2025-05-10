<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 fw-bold mb-4 text-center">Our Schedule</h1>
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
          <div v-for="jadwal in sortedJadwal" :key="jadwal.id" class="col-md-4 mb-4">
            <nuxt-link :to="`/jadwal/${jadwal.slug}`" class="text-decoration-none">
              <div class="card h-100">
                <img 
                  :src="jadwal.metadata.poster_kegiatan.imgix_url" 
                  class="card-img-top" 
                  :alt="jadwal.title"
                >
                <div class="card-body">
                  <h5 class="card-title text-dark">{{ jadwal.title }}</h5>
                  <!-- <p class="card-text text-muted">{{ jadwal.metadata.body_jadwal }}</p> -->
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

// Fetch jadwal data
const { data: jadwal, pending, error } = await useAsyncData('jadwal', async () => {
  try {
    const response = await getObjects('jadwal')
    return response.objects
  } catch (err) {
    throw new Error('Failed to fetch jadwal')
  }
})

// Sort jadwal alphabetically by title
const sortedJadwal = computed(() => {
  if (!jadwal.value) return []
  return [...jadwal.value].sort((a, b) => a.title.localeCompare(b.title))
})

// Set page meta
useHead({
  title: 'Jadwal - Singaraja Literary Festival',
  meta: [
    { 
      name: 'description', 
      content: 'Schedule and timeline of events at Singaraja Literary Festival'
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