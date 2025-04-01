export const useDateFormat = () => {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'TBA'
    
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return 'TBA'

    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
  }

  return {
    formatDate
  }
} 