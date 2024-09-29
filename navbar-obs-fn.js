function navbarIntersectionObserver(elId, isLight) {
  const targetElement = document.getElementById(elId)
  const navbarElement = document.getElementById("navbar")

  if (!targetElement || !navbarElement) return

  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px",
    threshold: 0.04, // trigger when 10% of the target is visible
  }

  let classesToToggle = ["intersect-in-view"]
  if (isLight) classesToToggle = ["intersect-in-view", "intersect-light"]
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) navbarElement.classList.add(...classesToToggle)
      else navbarElement.classList.remove(...classesToToggle)
    })
  }, options)
  observer.observe(targetElement)
}
