

export const formValidation = () => {
  const form = document.getElementById('contact-form')
  const errorContainer = document.getElementById('show-error-form')
  const nameInput = document.getElementById('name-input')
  const emailInput = document.getElementById('email-input')
  const subjectInput = document.getElementById('subject-input')
  const messageInput = document.getElementById('message-input')

  const showErrorContainer = () => {
    errorContainer.classList.remove('hide')
    errorContainer.classList.add('show')  
  }

  const hideErrorContainer = () => {
    errorContainer.classList.remove('show')
    errorContainer.classList.add('hide')  
  }

  const showError = (msg) => {
    errorContainer.innerText = msg
    showErrorContainer()
  }

  const resetForm = () => {
    nameInput.value = ''
    emailInput.value = ''
    subjectInput.value = ''
    messageInput.value = ''
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    hideErrorContainer()

    let errorMessage = ''
    let success = false

    if (nameInput.value === '' || emailInput.value === '' || subjectInput.value === '' || messageInput.value === '') {
      errorMessage = 'Completa todos los campos antes de enviar el correo!'
    } else {
      success = true
    }
    
    if (success === false) {
      showError(errorMessage)
    } else {
      alert('Correo enviado correctamente!')  
      resetForm()
    }

  })
}