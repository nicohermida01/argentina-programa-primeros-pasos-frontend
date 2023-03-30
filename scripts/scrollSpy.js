
export const scrollSpy = () => {
  const navbar = document.querySelectorAll('.nav-item')

  const removeActiveClass = () => navbar.forEach(button => button.classList.remove('active'))
  
  const addActiveClass = (index) => {
    removeActiveClass()
    navbar[index - 1].classList.add('active')
  }

  const sections = [
    document.getElementById('personal-info'),
    document.getElementById('work-experience'),
    document.getElementById('academic-education'),
    document.getElementById('interesting-info'),
    document.getElementById('contact-form-section')
  ]

  const offsetSection = {}
  sections.forEach(section => offsetSection[section.id] = section.offsetTop)

  window.addEventListener('scroll', () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop

    for (let key in offsetSection) {
      if (offsetSection[key] <= scrollPos + 150) {
        addActiveClass(document.getElementById(key).dataset.index)
      }
    }
  })
}