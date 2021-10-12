let form = document.getElementsByTagName("form")[0];
let email = document.getElementById("email");
let formParaError = document.getElementById("form-para-error");
let regExEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", formSubmitted);

function formSubmitted(e) {
  e.preventDefault();
  if (email.value === "") {
    formParaError.textContent =
      "Whoops! It looks like you forgot to add your email";
      form.classList.add("form-error");
  } else {
    if (regExEmail.test(email.value)) {
      form.classList.remove("form-error");
    } else {
      formParaError.textContent = "Please provide a valid email address";
      form.classList.add("form-error");
    }
  }
}
