const body = document.querySelector('body')

// Navbar background change on scroll
const nav = document.querySelector('.nav-container')
var navActiveFlag = 0
let pausedNav = false
document.addEventListener('scroll', () => {
  if (navActiveFlag < 1) {
    console.log('scroll')
    activateNav()
  }
})

document.addEventListener('scrollend', () => {
  console.log('scrollend')
  setTimeout(removeNav, 1000)
})

let windowWidth = window.innerWidth
let initialX = null

function handleTouchStart(event) {
  initialX = event.touches[0].clientX
}

function handleTouchMove(event) {
  if (initialX === null) {
    return
  }

  const currentX = event.touches[0].clientX
  const diffX = initialX - currentX
  console.log(initialX + ',' + currentX)

  if (diffX > 0) {
    console.log('Swipe left')
    if (initialX > windowWidth * 0.7) {
      activateNav()
      setTimeout(removeNav, 2500)
    }
  } else if (diffX < 0) {
    console.log('Swipe right')
    if (navActiveFlag > 0) {
      removeNav()
    }
  }

  initialX = null
}

body.addEventListener('touchstart', handleTouchStart)
body.addEventListener('touchmove', handleTouchMove)

//Theme
const themeButton = document.querySelector('.theme-button')
const containerMainClassList = document.querySelector('.container-main').classList
const themeButtonClassList = themeButton.classList
// Theme switch
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  activateDark()
}

themeButton.addEventListener('click', () => {
  themeChange()
})

function themeChange() {
  containerMainClassList.contains('dark') ? removeDark() : activateDark()
}

function activateDark() {
  themeButtonClassList.remove('bxs-moon')
  containerMainClassList.toggle('dark')
  themeButtonClassList.add('bx-sun')
  document.body.style.backgroundColor = 'black'
}

function removeDark() {
  themeButtonClassList.remove('bx-sun')
  containerMainClassList.toggle('dark')
  themeButtonClassList.add('bxs-moon')
  console.log('removeDark')
  body.style.backgroundColor = 'white'
}

function activateNav() {
  nav.classList.add('active')
  navActiveFlag = 1
}

function pauseNav() {
  pausedNav = true
  console.log('pNav')
}

function removePauseNav() {
  pausedNav = false
  console.log('pRemNav')
  setTimeout(removeNav, 500)
}

function removeNav() {
  if (pausedNav == false) {
    console.log('rNav')
    nav.classList.remove('active')
    navActiveFlag = 0
  }
}

// Routing

// Check for full load
console.log('js loaded successfully')
removeNav()
