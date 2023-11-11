// Navbar background change on scroll
const nav = document.querySelector(".nav-container");
var activatedCount = 0;

document.addEventListener("scroll", () => {
  if (activatedCount < 1){
    console.log("scroll")
    nav.classList.add("active");
    activatedCount++;
  }
});

// nav.addEventListener("hover")
document.addEventListener("scrollend", () => {
  console.log("scrollend");
  setTimeout(removeNav, 1500);
});


const themeButton = document.querySelector(".theme-button");
const containerMainClassList = document.querySelector(".container-main").classList;
const themeButtonClassList = themeButton.classList;
const body = document.querySelector("body");
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

function removeNav(){
  console.log("rNav");
  nav.classList.remove("active");
  activatedCount--;
}
removeNav();

// Routing


// Check for full load
console.log('js loaded successfully');
