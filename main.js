const navbarItems = [
  {
    icon: '<i class="fa-solid fa-house"></i>',
    label: 'Home'
  },
  {
    icon: '<i class="fa-solid fa-address-card"></i>',
    label: 'About Me'
  },
  {
    icon: '<i class="fa-solid fa-cubes"></i>',
    label: 'Projects'
  },
  {
    icon: '<i class="fa-solid fa-code"></i>',
    label: 'Skills'
  },
  {
    icon: '<i class="fa-solid fa-message"></i>',
    label: 'Contact'
  }
]

const navbar = document.getElementById('navbar')
navbarItems.forEach(item => {
  navbar.innerHTML += `
    <li>
      <a href="#">
        ${item.icon}
        ${item.label}
      </a>
    </li>
  `
})

const profileOptions = [
  {
    icon: '<i class="fa-solid fa-user fa-2xl active"></i>',
    info: {
      title: 'Hi, My name is',
      value: 'Savannah Howard',
    },
    title: 'Name'
  },
  {
    icon: '<i class="fa-solid fa-envelope fa-2xl"></i>',
    info: {
      title: 'My email address is',
      value: 'savannah.howard@example.com',
    },
    title: 'Email'
  },
  {
    icon: '<i class="fa-solid fa-calendar-days fa-2xl"></i>',
    info: {
      title: 'My birthday is',
      value: '4/1/1953',
    },
    title: 'Birthday'
  },
  {
    icon: '<i class="fa-solid fa-map-location-dot fa-2xl"></i>',
    info: {
      title: 'My address is',
      value: '8749 pockrus Page Rd',
    },
    title: 'Address'
  },
  {
    icon: '<i class="fa-solid fa-phone fa-2xl"></i>',
    info: {
      title: 'My phone number is',
      value: '(586) 531-2273',
    },
    title: 'Phone'
  }
]

const profileOptionsContainer = document.getElementById('profile-options')
profileOptions.forEach(option => {
  profileOptionsContainer.innerHTML += `
    <li data-title='${option.info.title}' data-value='${option.info.value}' title='${option.title}'>
      ${option.icon}
    </li>
  `
})

const profileTitle = document.getElementById('profile-title')
const profileValue = document.getElementById('profile-value')

const profileOptionButtons = document.querySelectorAll('#profile-options li')
profileOptionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    profileTitle.innerHTML = btn.dataset.title
    profileValue.innerHTML = btn.dataset.value

    profileOptionButtons.forEach(item => item.children[0].classList.remove('active'))
    btn.children[0].classList.add('active')
  })
})

