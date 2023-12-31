const btn = document.querySelector(".subscribe");
const popup = document.querySelector(".popup-bg");
const submit = document.querySelector(".popup-btn");
const colorText = document.querySelector(".popup-btn__text");
const load = document.querySelector(".load");
const errorInfo = document.querySelector(".error-info");
const btnMenu = document.querySelector(".menu");
const popupMenu = document.querySelector(".popup-menu");
const blockMenu = document.querySelector(".menu-block");

console.log(btnMenu);

btn.addEventListener("click", () => {
  popup.classList.add("popup-bg__active");
});

document.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.classList.remove("popup-bg__active");
    errorInfo.classList.remove("error-info__active");
  }
  if (e.target == popupMenu) {
    popupMenu.classList.remove("popup-menu__active");
    blockMenu.classList.remove("menu-block__active");
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
btnMenu.addEventListener("click", () => {
  popupMenu.classList.add("popup-menu__active");
  blockMenu.classList.add("menu-block__active");
});
