import { createBucketClient } from '@cosmicjs/sdk'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // Initialize CosmicJS client
  const cosmic = createBucketClient({
    bucketSlug: config.public.cosmicBucketSlug,
    readKey: config.public.cosmicReadKey,
    writeKey: config.public.cosmicWriteKey,
  })

  // Provide the client to the app
  return {
    provide: {
      cosmic
    }
  }
})