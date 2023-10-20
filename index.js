// Navbar background change on scroll
const nav = document.querySelector(".nav-container");
document.addEventListener("scroll", () => {
  nav.classList.add("bg");

  if (window.scrollY > 10) {
    nav.style.backdropFilter = "blur(5px)";
  } else {
    nav.classList.remove("bg");
    nav.style.backdropFilter = "none";
  }
});

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
}

function removeDark() {
  themeButtonClassList.remove("bx-sun");
  containerMainClassList.toggle("dark");
  themeButtonClassList.add("bxs-moon");
  console.log("removeDark");
}

// Routing


// Check for full load
console.log('js loaded successfully');
