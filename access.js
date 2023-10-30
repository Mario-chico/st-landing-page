
const email = document.getElementById("email");
console.log(email)
const password = document.getElementById("re-password");

const login = document.querySelector(".login-button");

const form = document.querySelector(".form");

form.addEventListener("submit",  dataValidation)



function dataValidation(event) {
  event.preventDefault();
  const em = email.value;
  const pas = password.value;
  console.log(em, pas)


    if (em === "mario" && pas === "mario") {
        window.location.href = "./index.html"
    }else{
      window.location.href = "./login.html"
    }
}

