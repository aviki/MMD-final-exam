var subscribeBtn = document.getElementById("subscribe");
var modalSignupBg = document.querySelector(".modal-bg");

subscribeBtn.addEventListener("click", function () {
  const inputContainers = document.querySelectorAll(".input-container-signup");
  console.log(inputContainers);
  console.log("feljebb avan");
  let allInputCorrect = true;
  inputContainers.forEach((element) => {
    if (!element.classList.contains("success")) {
      setSignupErrorFor(element.querySelector("input"), "Please fill out this field");
      allInputCorrect = false;
    }
    console.log(element);
    console.log(element.classList);
  });
  console.log(allInputCorrect);
  if (allInputCorrect) {
    modalSignupBg.classList.remove("bg-active");
  }
});

const firstNameSignup = document.getElementById("first-name-signup");
const lastNameSignup = document.getElementById("last-name-signup");
const emailSignup = document.getElementById("email-signup");

function firstNameSignupCheck() {
  const firstNameSignupValue = firstNameSignup.value.trim(); //trim removes all the white space from the input
  if (firstNameSignupValue === "") {
    //show error
    //add error class
    setSignupErrorFor(firstNameSignup, "First name is required");
  } else {
    //add success class
    setSignupSuccessFor(firstNameSignup);
  }
}

function lastNameSignupCheck() {
  const lastNameValue = lastNameSignup.value.trim();
  if (lastNameValue === "") {
    setSignupErrorFor(lastNameSignup, "Last name is required");
  } else {
    setSignupSuccessFor(lastNameSignup);
  }
}

function emailSignupCheck() {
  const emailValue = emailSignup.value.trim();
  if (emailValue === "") {
    setSignupErrorFor(emailSignup, "Email is required");
  } else if (!isSignupEmail(emailValue)) {
    setSignupErrorFor(emailSignup, "Email is not valid");
  } else {
    setSignupSuccessFor(emailSignup);
  }
}

firstNameSignup.addEventListener("blur", (e) => {
  e.preventDefault();
  firstNameSignupCheck();
});
lastNameSignup.addEventListener("blur", (e) => {
  e.preventDefault();
  lastNameSignupCheck();
});

emailSignup.addEventListener("blur", (e) => {
  e.preventDefault();

  emailSignupCheck();
});

function isSignupEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setSignupErrorFor(input, message) {
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

function setSignupSuccessFor(input) {
  const inputContainer = input.parentElement;
  //add success class
  if (inputContainer.classList.contains("error")) {
    inputContainer.classList.remove("error");
  }
  if (!inputContainer.classList.contains("success")) {
    inputContainer.classList.add("success");
  }
}
