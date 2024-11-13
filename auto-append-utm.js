function addUtmToAppLinks(utmMedium = '') {
 document.querySelectorAll('.blog-body-content').forEach(blogContent => {
   const links = blogContent.querySelectorAll('a[href*="app.usekaya.com"]')
   
   links.forEach(link => {
     const href = link.getAttribute('href')
     if (href.includes('?')) return
     
     const path = window.location.pathname
     const lastPath = path.split('/').filter(Boolean).pop()
     
     const utmParams = new URLSearchParams({
       utm_medium: utmMedium
       utm_source: 'kaya-website',
       utm_campaign: lastPath
     })
     
     link.setAttribute('href', `${href}?${utmParams.toString()}`)
   })
 })
}
