const btn = document.querySelector(".subscribe");
const popup = document.querySelector(".popup-bg");
const submit = document.querySelector(".popup-btn");
const colorText = document.querySelector(".popup-btn__text");
const load = document.querySelector(".load");
const errorInfo = document.querySelector(".error-info");

btn.addEventListener("click", () => {
  popup.classList.add("popup-bg__active");
});

document.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.classList.remove("popup-bg__active");
    errorInfo.classList.remove("error-info__active");
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
