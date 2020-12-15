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
  const downloadMenu = document.querySelector("#download-page");
  let scrollPos = window.scrollY;
  //   console.log(scrollPos);

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
    downloadMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4000) {
    downloadMenu.classList.add("highlight");
    communityMenu.classList.remove("highlight");
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

//Sign up and Download the MIP SDK modal

var downloadBtn = document.querySelector("#download");
var submitBtn = document.getElementById("submit");
var modalBackground = document.querySelector(".modal-background");
var modalX = document.querySelector(".modal-x");

downloadBtn.addEventListener("click", function () {
  modalBackground.classList.add("background-active");
});

submitBtn.addEventListener("click", function () {
  const inputContainers = document.querySelectorAll(".input-container");
  console.log(inputContainers);
  let allInputCorrect = true;
  inputContainers.forEach((element) => {
    if (!element.classList.contains("success")) {
      setErrorFor(element.querySelector("input"), "baj");
      allInputCorrect = false;
    }
    console.log(element);
    console.log(element.classList);
  });
  console.log(allInputCorrect);
  if (allInputCorrect) {
    modalBackground.classList.remove("background-active");
  }
});

modalX.addEventListener("click", function () {
  modalBackground.classList.remove("background-active");
});

// Form validation

const downloadForm = document.getElementById("download-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const jobTitle = document.getElementById("job-title");

// If input field was clicked and out of focus again, call function that checks if they are blank
firstName.addEventListener("blur", (e) => {
  e.preventDefault();

  firstNameCheck();
});

lastName.addEventListener("blur", (e) => {
  e.preventDefault();

  lastNameCheck();
});

email.addEventListener("blur", (e) => {
  e.preventDefault();

  emailCheck();
});

company.addEventListener("blur", (e) => {
  e.preventDefault();

  companyCheck();
});

jobTitle.addEventListener("blur", (e) => {
  e.preventDefault();

  jobTitleCheck();
});

//Functions to check if input field if blank

function firstNameCheck() {
  const firstNameValue = firstName.value.trim(); //trim removes all the white space from the input
  if (firstNameValue === "") {
    //show error
    //add error class
    setErrorFor(firstName, "First name is required");
  } else {
    //add success class
    setSuccessFor(firstName);
  }
}

function lastNameCheck() {
  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name is required");
  } else {
    setSuccessFor(lastName);
  }
}

function emailCheck() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}

function companyCheck() {
  const companyValue = company.value.trim();
  if (companyValue === "") {
    setErrorFor(company, "Company is required");
  } else {
    setSuccessFor(company);
  }
}
function jobTitleCheck() {
  const jobTitleValue = jobTitle.value.trim();
  if (jobTitleValue === "") {
    setErrorFor(jobTitle, "Job title is required");
  } else {
    setSuccessFor(jobTitle);
  }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement; //input-container div
  const small = inputContainer.querySelector("small");

  //add error message inside small
  small.innerText = message;

  //add error class
  inputContainer.className = "input-container error";
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  //add success class
  inputContainer.className = "input-container success";
}

//Check if email valid with regex from stackoverflow(https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression)
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Thank you for downloading the SDK pop-up modal

var sdkModalBtn = document.querySelector("#sdk-button");
var mobileSdkModalBtn = document.querySelector("#mobile-sdk-button");
var thanksModalBg = document.querySelector(".thanks-modal-bg");
var thanksModalClose = document.querySelector(".thanks-modal-close");

sdkModalBtn.addEventListener("click", function () {
  thanksModalBg.classList.add("bg-active");
});

thanksModalClose.addEventListener("click", function () {
  thanksModalBg.classList.remove("bg-active");
});
