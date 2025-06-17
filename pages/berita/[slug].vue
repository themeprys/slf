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

    <div v-else-if="berita" class="row">
      <div class="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/berita" class="text-decoration-none">News</nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ berita.title }}</li>
          </ol>
        </nav>

        <div class="berita-header mb-5">
          <h1 class="display-4 fw-bold mb-4">{{ berita.title }}</h1>
          <!-- <div class="berita-image-container mb-4">
            <img 
              :src="berita.metadata.foto_berita.imgix_url" 
              :alt="berita.title"
              class="img-fluid rounded program-detail-image"
            >
          </div> -->
        </div>

        <div class="berita-content">
          <div class="row">
            <div class="col-lg-8">
              <img 
              :src="jadwal.metadata.foto_berita.imgix_url" 
              :alt="jadwal.title"
              class="img-fluid rounded mb-5"
            >              
              <div class="berita-description" v-html="berita.metadata.body_berita"></div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Detail Berita</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-calendar-alt me-2"></i>
                      <strong>Tanggal:</strong> {{ formatDate(berita.metadata.tanggal_berita) }}
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-user me-2"></i>
                      <strong>Penulis:</strong> {{ berita.metadata.penulis_berita || 'TBA' }}
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
const { formatDate } = useDateFormat()

// Fetch berita data
const { data: berita, pending, error } = await useAsyncData(
  `berita-${route.params.slug}`,
  async () => {
    try {
      const response = await getObjects('berita')
      
      if (!response || !response.objects) {
        console.error('Invalid response from server:', response)
        throw new Error('Invalid response from server')
      }

      const foundBerita = response.objects.find(obj => obj.slug === route.params.slug)
      
      if (!foundBerita) {
        console.error('Berita not found for slug:', route.params.slug)
        throw new Error('Berita not found')
      }
      
      return foundBerita
    } catch (err) {
      console.error('Error fetching berita:', err)
      throw new Error('Failed to fetch berita details')
    }
  }
)

// Set page meta
useHead({
  title: `${berita.value?.title || 'Berita'} - Singaraja Literary Festival`,
  meta: [
    { 
      name: 'description', 
      content: berita.value?.metadata?.body_berita?.substring(0, 160) || 'Berita details at Singaraja Literary Festival'
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

.berita-description {
  font-size: 1.1rem;
  line-height: 1.8;
}

.berita-description :deep(p) {
  margin-bottom: 1.5rem;
}

.berita-description :deep(img) {
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