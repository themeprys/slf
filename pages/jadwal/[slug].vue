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

    <div v-else-if="jadwal" class="row">
      <div class="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/jadwal" class="text-decoration-none">Jadwal</nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ jadwal.title }}</li>
          </ol>
        </nav>

        <div class="jadwal-header mb-5">
          <h1 class="display-4 fw-bold mb-4">{{ jadwal.title }}</h1>
          <div class="jadwal-image-container mb-4">
            <img 
              :src="jadwal.metadata.poster_kegiatan.imgix_url" 
              :alt="jadwal.title"
              class="img-fluid rounded program-detail-image"
            >
          </div>
        </div>

        <div class="jadwal-content">
          <div class="row">
            <div class="col-lg-8">
              <div class="jadwal-description" v-html="jadwal.metadata.body_kegiatan"></div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Detail Jadwal</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-calendar-alt me-2"></i>
                      <strong>Tanggal:</strong> {{ jadwal.metadata.tanggal_kegiatan || 'TBA' }}
                    </li>
                    <!-- <li class="mb-2">
                      <i class="fas fa-clock me-2"></i>
                      <strong>Waktu:</strong> {{ jadwal.metadata.waktu_jadwal || 'TBA' }}
                    </li> -->
                    <li class="mb-2">
                      <i class="fas fa-map-marker-alt me-2"></i>
                      <strong>Lokasi:</strong> {{ jadwal.metadata.lokasi_kegiatan || 'TBA' }}
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

// Fetch jadwal data
const { data: jadwal, pending, error } = await useAsyncData(
  `jadwal-${route.params.slug}`,
  async () => {
    try {
      const response = await getObjects('jadwal')
      
      if (!response || !response.objects) {
        throw new Error('Invalid response from server')
      }

      const foundJadwal = response.objects.find(obj => obj.slug === route.params.slug)
      
      if (!foundJadwal) {
        throw new Error('Jadwal not found')
      }
      
      return foundJadwal
    } catch (err) {
      console.error('Error fetching jadwal:', err)
      throw new Error('Failed to fetch jadwal details')
    }
  }
)

// Set page meta
useHead({
  title: `${jadwal.value?.title || 'Jadwal'} - Singaraja Literary Festival`,
  meta: [
    { 
      name: 'description', 
      content: jadwal.value?.metadata?.body_kegiatan?.substring(0, 160) || 'Jadwal details at Singaraja Literary Festival'
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

.jadwal-description {
  font-size: 1.1rem;
  line-height: 1.8;
}

.jadwal-description :deep(p) {
  margin-bottom: 1.5rem;
}

.jadwal-description :deep(img) {
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