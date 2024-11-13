function addUtmToAppLinks(className = '.blog-body-content', utmMedium = '') {
 document.querySelectorAll(className)?.forEach(blogContent => {
   const links = blogContent?.querySelectorAll('a[href*="app.usekaya.com"]')

   if (!links?.length) return
  
   links?.forEach(link => {
     const href = link?.getAttribute('href')
     if (href?.includes('?')) return
    
     const path = window.location.pathname
     const lastPath = path?.split('/')?.filter(Boolean)?.pop()
     
     const utmParams = new URLSearchParams({
       utm_medium: utmMedium,
       utm_source: 'kaya-website',
       utm_campaign: lastPath
     })
    console.log(path)
     console.log(lastPath)
    console.log(utmMedium)
    console.log(`${href}?${utmParams.toString()}`)
     link.setAttribute('href', `${href}?${utmParams.toString()}`)
   })
 })
}
