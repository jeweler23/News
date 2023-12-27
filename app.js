import { createBackWord } from "./js/random-word.js";
// import { createBackWord } from "./js/news.js";
// import { createLayout, createBackWord } from "./js/news.js";


const main = document.querySelector("main");
const btnMore = document.createElement("button");
const section = document.createElement("section");
// const news = document.createElement("h1");

// body.appendChild(news);
main.appendChild(section);
main.appendChild(btnMore);

// news.textContent = "News";
btnMore.textContent = "more 12  news";

// news.classList.add("title");
btnMore.classList.add("btn");
section.classList.add("wrapper");

let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
let author = await fetch("https://jsonplaceholder.typicode.com/users");
let postsJson, authorJson;

if (posts.ok) {
  postsJson = await posts.json();
} else {
  alert("Ошибка HTTP: " + posts.status);
}

if (author.ok) {
  authorJson = await author.json();
} else {
  alert("Ошибка HTTP: " + author.status);
}

function createLayout(obj, obj2) {
  if (obj.userId === obj2.id) {
    const div = document.createElement("div");
    const author = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const authorImage = document.createElement("img");
    const authorInfo = document.createElement("span");
    const editor = document.createElement("span");
    let span = document.createElement("span");
    // const textBack = document.createElement("span");

    let titleText = obj.title[0].toUpperCase() + obj.title.slice(1);
    const bodyText = obj.body[0].toUpperCase() + obj.body.slice(1);

    // title.textContent = titleText;
    body.textContent = bodyText;

    // div.innerHTML = layout;

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(author);
    author.appendChild(authorImage);
    author.appendChild(authorInfo);
    author.appendChild(editor);
    // title.appendChild(span);

    span.classList.add("text-back");
    div.classList.add("item");
    div.classList.add("inactive");
    author.classList.add("author");
    authorImage.classList.add("author__image");

    authorImage.src = `image/author${obj2.id}.jpg`;
    authorInfo.textContent = obj2.name;
    editor.textContent = "Editor";

    let text = createBackWord(obj.title);

    text.classList.add("text-back");

    const arrayTitle = titleText.split(" ");

    for (let i = 0; i < arrayTitle.length; i++) {
      if (arrayTitle[i] === text.textContent) {
        let text = arrayTitle[i].replace(
          `${arrayTitle[i]}`,
          `<span class="text-back"> ${arrayTitle[i]}</span>`
        );
        title.innerHTML += text;
      } else {
        title.innerHTML += ` ${arrayTitle[i]} `;
      }
    }

    section.appendChild(div);
    // console.log(title);
  }
}

// console.log(createLayout(postsJson[0], authorJson[0]));

function firstDraw() {
  for (let i = 0; i < postsJson.length; i++) {
    for (let j = 0; j < authorJson.length; j++) {
            // let fragment = document.createDocumentFragment();
            // fragment.appendChild(createLayout(postsJson[i], authorJson[j]));
            // section.appendChild(createLayout(postsJson[i], authorJson[j])[0])
            createLayout(postsJson[i], authorJson[j])

      // section.appendChild(createLayout(postsJson[i], authorJson[j]));
    }
  }

  for (let i = 0; i < 12; i++) {
    let activeDiv = section.childNodes[i];
    activeDiv.classList.remove("inactive");
    activeDiv.classList.add("active");
  }
}
firstDraw();

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
        } else if (e.target.value == "All") {
          firstDraw();
          btnMore.style.display = "block";
        }
      }
    } else {
      firstDraw();
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

// for (let i = 0; i < postsJson.length; i++) {
//   for (let j = 0; j < authorJson.length; j++) {
//     createLayout(postsJson[i], authorJson[j]);
//   }
// }
// }
// });

// filter.addEventListener("click", filterName(authorJson[0]));

// function filterName(authorName) {
//   let name = authorName.name;
//   console.log(name);
// }

// filter(authorJson[0]);
