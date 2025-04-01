<template>
  <div class="container py-5">
    <div v-if="pending" class="row">
      <div class="col-12 text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div v-else-if="error" class="row">
      <div class="col-12">
        <div class="alert alert-danger" role="alert">
          {{ error.message }}
        </div>
      </div>
    </div>

    <div v-else-if="program" class="row">
      <div class="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/program" class="text-decoration-none">Programs</nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ program.title }}</li>
          </ol>
        </nav>

        <div class="program-header mb-5">
          <h1 class="display-4 fw-bold mb-4">{{ program.title }}</h1>
          <div class="program-image-container mb-4">
            <img 
              :src="program.metadata.foto_program.imgix_url" 
              :alt="program.title"
              class="img-fluid rounded program-detail-image"
            >
          </div>
        </div>

        <div class="program-content">
          <div class="row">
            <div class="col-lg-8">
              <div class="program-description" v-html="program.metadata.body_program"></div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Program Details</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-calendar-alt me-2"></i>
                      <strong>Date:</strong> {{ program.metadata.tanggal_program || 'TBA' }}
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-clock me-2"></i>
                      <strong>Time:</strong> {{ program.metadata.waktu_program || 'TBA' }}
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-map-marker-alt me-2"></i>
                      <strong>Location:</strong> {{ program.metadata.lokasi_program || 'TBA' }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { getObjects } = useCosmic()

// Fetch program data
const { data: program, pending, error } = await useAsyncData(
  `program-${route.params.slug}`,
  async () => {
    try {
      const response = await getObjects('program')
      
      if (!response || !response.objects) {
        throw new Error('Invalid response from server')
      }

      const foundProgram = response.objects.find(obj => obj.slug === route.params.slug)
      
      if (!foundProgram) {
        throw new Error('Program not found')
      }
      
      return foundProgram
    } catch (err) {
      console.error('Error fetching program:', err)
      throw new Error('Failed to fetch program details')
    }
  }
)

// Set page meta
useHead({
  title: `${program.value?.title || 'Program'} - Singaraja Literary Festival`,
  meta: [
    { 
      name: 'description', 
      content: program.value?.metadata?.body_program?.substring(0, 160) || 'Program details at Singaraja Literary Festival'
    }
  ]
})
</script>

<style scoped>
.program-detail-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.program-description {
  font-size: 1.1rem;
  line-height: 1.8;
}

.program-description :deep(p) {
  margin-bottom: 1.5rem;
}

.program-description :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}

.breadcrumb {
  background-color: transparent;
  padding: 0;
  margin-bottom: 2rem;
}

.breadcrumb-item a {
  color: #0d6efd;
}

.breadcrumb-item.active {
  color: #6c757d;
}
</style> 