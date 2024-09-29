function navbarIntersectionObserver(elId) {
  const targetElement = document.getElementById(elId)
  const navbarElement = document.getElementById("navbar")

  if (!targetElement || !navbarElement) return

  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px",
    threshold: 0, // trigger when 10% of the target is visible
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) navbarElement.classList.add("intersect-in-view")
      else navbarElement.classList.remove("intersect-in-view")
    })
  }, options)
  observer.observe(targetElement)
}
