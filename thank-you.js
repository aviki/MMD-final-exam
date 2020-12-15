const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highLightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const learnMenu = document.querySelector("#learn-page");
  const communityMenu = document.querySelector("#community-page");
  //   const downloadMenu = document.querySelector("#download-page");
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds "highlight class to my menu items"
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    learnMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    learnMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    communityMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3200) {
    communityMenu.classList.add("highlight");
    learnMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highLightMenu);
window.addEventListener("click", highLightMenu);

// Close mobile Menu when clicking on a menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// Sign up for Developer Update modal script

var modalBtn = document.querySelector("#signup");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

// Form animation

const inputs = document.querySelectorAll(".input");

function focusFunction() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunction() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunction);
  input.addEventListener("blur", blurFunction);
});

// Thank you for downloading the SDK pop-up modal

var sdkModalBtn = document.querySelector("#sdk-button");
var mobileSdkModalBtn = document.querySelector("#mobile-sdk-button");
var thanksModalBg = document.querySelector(".thanks-modal-bg");
var thanksModalClose = document.querySelector(".thanks-modal-close");

//Click event for MIP SDK button
sdkModalBtn.addEventListener("click", function () {
  thanksModalBg.classList.add("thanks-modal-active");
});

// Click event for Mobile MIP SDK button
mobileSdkModalBtn.addEventListener("click", function () {
  thanksModalBg.classList.add("thanks-modal-active");
});

//Close the modal
thanksModalClose.addEventListener("click", function () {
  thanksModalBg.classList.remove("thanks-modal-active");
});
