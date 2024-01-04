const btn = document.querySelector(".subscribe");
const popup = document.querySelector(".popup-bg");
const submit = document.querySelector(".popup-btn");
const colorText = document.querySelector(".popup-btn__text");
const load = document.querySelector(".load");
const errorInfo = document.querySelector(".error-info");
const btnLogin = document.querySelector(".login");
const popupLogin = document.querySelector(".popup-login");
const blockLogin = document.querySelector(".login-block");

btn.addEventListener("click", () => {
  popup.classList.add("popup-bg__active");
  document.body.style.overflowY = "hidden";
});

document.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.classList.remove("popup-bg__active");
    errorInfo.classList.remove("error-info__active");
    document.body.style.overflowY = "auto";
  }
  if (e.target == popupLogin) {
    popupLogin.classList.remove("popup-login__active");
    blockLogin.classList.remove("login-block__active");
    document.body.style.overflowY = "auto";
  }
});

submit.addEventListener("click", () => {
  load.classList.add("load_active");
  colorText.style.color = "black";

  setTimeout(clear, 1000);
});

function clear() {
  load.classList.remove("load_active");
  colorText.style.color = "white";
  errorInfo.classList.add("error-info__active");
}

// menu
btnLogin.addEventListener("click", () => {
  popupLogin.classList.add("popup-login__active");
  blockLogin.classList.add("login-block__active");
  document.body.style.overflowY = "hidden";
});
