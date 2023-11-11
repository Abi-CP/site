const body = document.querySelector("body");

// Navbar background change on scroll
const nav = document.querySelector(".nav-container");
var navActiveFlag = 0;
let pausedNav = false;
document.addEventListener("scroll", () => {
  if (navActiveFlag < 1){
    console.log("scroll")
    activateNav();
  }
});

// nav.addEventListener("hover")
document.addEventListener("scrollend", () => {
  console.log("scrollend");
  setTimeout(removeNav, 1500);
});


let startX;

body.addEventListener('touchstart', handleTouchStart);
body.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  const endX = event.changedTouches[0].clientX;
  const deltaX = endX - startX;

  const swipeThreshold = 50;
  if (deltaX < -swipeThreshold) {
    console.log('Swiped left!');
    activateNav();
    setTimeout(removeNav, 1500);
  }
}

//Theme
const themeButton = document.querySelector(".theme-button");
const containerMainClassList = document.querySelector(".container-main").classList;
const themeButtonClassList = themeButton.classList;
// Theme switch
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  activateDark();
}

themeButton.addEventListener("click", () => {
  themeChange();
});

function themeChange() {
  containerMainClassList.contains("dark") ? removeDark() : activateDark();
}

function activateDark() {
  themeButtonClassList.remove("bxs-moon");
  containerMainClassList.toggle("dark");
  themeButtonClassList.add("bx-sun");
  document.body.style.backgroundColor = "black";
}

function removeDark() {
  themeButtonClassList.remove("bx-sun");
  containerMainClassList.toggle("dark");
  themeButtonClassList.add("bxs-moon");
  console.log("removeDark");
  body.style.backgroundColor = "white"; 
}

function activateNav(){
  nav.classList.add("active");
  navActiveFlag++;
}

function pauseNav(){
  pausedNav = true;
  console.log("pNav");
}

function removePauseNav(){
  pausedNav = false;
  console.log("pRemNav");
  setTimeout(removeNav, 500);
}

function removeNav(){
  if (pausedNav == false){
    console.log("rNav");
    nav.classList.remove("active");
    navActiveFlag--;
  }
  
}

// Routing


// Check for full load
console.log('js loaded successfully');
removeNav();
