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

const downloadMenu = document.querySelector("#download-page");

downloadMenu.classList.add("highlight");

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
    console.log("FOKUST");
  } else {
    console.log("nem vettem le");
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
      setErrorFor(element.querySelector("input"), "Please fill out this field");
      allInputCorrect = false;
    }
    console.log(element);
    console.log(element.classList);
  });
  console.log(allInputCorrect);
  if (allInputCorrect) {
    location.href = "thank-you.html";
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
  if (inputContainer.classList.contains("success")) {
    inputContainer.classList.remove("success");
  }
  if (!inputContainer.classList.contains("error")) {
    inputContainer.classList.add("error");
  }
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  //add success class
  if (inputContainer.classList.contains("error")) {
    inputContainer.classList.remove("error");
  }
  if (!inputContainer.classList.contains("success")) {
    inputContainer.classList.add("success");
  }
}

//Check if email valid with regex from stackoverflow(https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression)
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
