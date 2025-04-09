export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-21YDD1YCDX'
    document.head.appendChild(script)

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'G-21YDD1YCDX')

    // Add gtag to window for global access
    window.gtag = gtag

    // Provide gtag to the app
    nuxtApp.provide('gtag', gtag)
  }
}) 