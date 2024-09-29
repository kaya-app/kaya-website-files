function navbarIntersectionObserver(elId, isLight) {
  const targetElement = document.getElementById(elId)
  const navbarElement = document.getElementById("navbar")

  if (!targetElement || !navbarElement) return

  const _threshold = 0.1
  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px",
    threshold: _threshold,
  }

  let classesToToggle = ["intersect-in-view"]
  if (isLight) classesToToggle = ["intersect-in-view", "intersect-light"]
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= _threshold) navbarElement.classList.add(...classesToToggle)
      else navbarElement.classList.remove(...classesToToggle)
    })
  }, options)
  observer.observe(targetElement)
}
