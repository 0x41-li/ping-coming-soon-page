let form = document.getElementsByTagName("form")[0];
let email = document.getElementById("email");
let regExEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", formSubmitted);

function formSubmitted(e) {
  e.preventDefault();
  if (regExEmail.test(email.value)) {
    form.classList.remove("form-error");
  } else {
    form.classList.add("form-error");
  }
}
