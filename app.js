import { createBackWord } from "./js/random-word.js";
import { createLayout, firstDraw } from "./js/news.js";
import { postsJson, authorJson } from "./js/services.js";

const main = document.querySelector("main");
const btnMore = document.createElement("button");
const section = document.createElement("section");

main.appendChild(section);
main.appendChild(btnMore);

btnMore.textContent = "more 12  news";

btnMore.classList.add("btn");
section.classList.add("wrapper");

firstDraw(section);

let count = 24;
function moreNews() {
  for (let i = 12; i < count; i++) {
    let activeDiv = section.childNodes[i];
    activeDiv.classList.remove("inactive");
    activeDiv.classList.add("active");
  }
  count += 12;
}

function endNews() {
  let end = document.querySelectorAll(".inactive");
  if (end.length <= 0) {
    const p = document.createElement("p");
    p.textContent = "News end...";
    p.classList.add("end-news");
    section.appendChild(p);

    btnMore.style.display = "none";
    setTimeout(() => alert("news end"), 1000);
  }
}

btnMore.addEventListener("click", moreNews);
btnMore.addEventListener("click", endNews);

const item = document.querySelectorAll(".item");

const checkbox = document.querySelectorAll(".checkbox");
const label = document.querySelectorAll(".label");
const filterBtn = document.querySelector(".filter-btn");
const filterDiv = document.querySelector(".filter");
const showBtn = document.querySelector(".btn-show");

filterBtn.addEventListener("click", () => {
  filterDiv.classList.add("filter-active");
  document.body.style.overflowY = "hidden";
});

document.addEventListener("click", (e) => {
  if (e.target == filterDiv || e.target == showBtn) {
    filterDiv.classList.remove("filter-active");
    document.body.style.overflowY = "auto";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.type == "radio") {
    showBtn.classList.remove("btn-show-disabled");
    btnMore.style.display = "none";
    if (e.target.checked) {
      for (const key of authorJson) {
        if (key.name == e.target.value) {
          filter(e.target.value);
        }
      }
      if (e.target.value == "All") {
        console.log("ds");
        firstDraw(section);
        btnMore.style.display = "block";
      }
    } else {
      firstDraw(section);
      btnMore.style.display = "block";
    }
  }
});

function filter(name) {
  item.forEach((elem) => {
    const authorName = elem.querySelector(".author>span");
    if (authorName.textContent == name) {
      console.log(authorName.textContent);
      elem.classList.add("active");
    } else {
      elem.classList.add("inactive");
      elem.classList.remove("active");
    }
  });
}
