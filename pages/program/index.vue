<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 fw-bold mb-4">Program Kami</h1>
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
          <div v-for="program in sortedPrograms" :key="program.id" class="col-md-4 mb-4">
            <nuxt-link :to="`/program/${program.slug}`" class="text-decoration-none">
              <div class="card h-100">
                <img 
                  :src="program.metadata.foto_program.imgix_url" 
                  class="card-img-top program-thumbnail" 
                  :alt="program.title"
                >
                <div class="card-body">
                  <h5 class="card-title text-dark">{{ program.title }}</h5>
                  <!-- <p class="card-text text-muted">{{ program.metadata.body_program }}</p> -->
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

// Fetch programs data
const { data: programs, pending, error } = await useAsyncData('programs', async () => {
  try {
    const response = await getObjects('program')
    return response.objects
  } catch (err) {
    throw new Error('Failed to fetch programs')
  }
})

// Sort programs alphabetically by title
const sortedPrograms = computed(() => {
  if (!programs.value) return []
  return [...programs.value].sort((a, b) => a.title.localeCompare(b.title))
})

// Set page meta
useHead({
  title: 'Programs - Singaraja Literary Festival',
  meta: [
    { 
      name: 'description', 
      content: 'Explore our diverse range of literary programs and events at Singaraja Literary Festival'
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