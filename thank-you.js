const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Close mobile Menu when clicking on a menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 1100 && menuBars) {
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
