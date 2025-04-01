export const useCosmic = () => {
  const { $cosmic } = useNuxtApp()
  
  if (!$cosmic) {
    throw new Error('CosmicJS client not initialized')
  }

  return {
    // Get objects by type
    getObjects: async (type: string, query = {}) => {
      try {
        const response = await $cosmic.objects.find({
          type,
          ...query
        })
        return response
      } catch (error) {
        console.error('Error in getObjects:', error)
        throw error
      }
    },

    // Get a single object by ID
    getObject: async (id: string) => {
      try {
        const response = await $cosmic.objects.findOne({
          id
        })
        return response
      } catch (error) {
        console.error('Error in getObject:', error)
        throw error
      }
    },

    // Create a new object
    createObject: async (data: any) => {
      try {
        const response = await $cosmic.objects.create(data)
        return response
      } catch (error) {
        console.error('Error in createObject:', error)
        throw error
      }
    },

    // Update an existing object
    updateObject: async (id: string, data: any) => {
      try {
        const response = await $cosmic.objects.updateOne({
          id,
          ...data
        })
        return response
      } catch (error) {
        console.error('Error in updateObject:', error)
        throw error
      }
    },

    // Delete an object
    deleteObject: async (id: string) => {
      try {
        const response = await $cosmic.objects.deleteOne({
          id
        })
        return response
      } catch (error) {
        console.error('Error in deleteObject:', error)
        throw error
      }
    },

    // Get media
    getMedia: async (query = {}) => {
      try {
        const response = await $cosmic.media.find(query)
        return response
      } catch (error) {
        console.error('Error in getMedia:', error)
        throw error
      }
    },

    // Upload media
    uploadMedia: async (file: File) => {
      try {
        const response = await $cosmic.media.create({
          file
        })
        return response
      } catch (error) {
        console.error('Error in uploadMedia:', error)
        throw error
      }
    }
  }
} 