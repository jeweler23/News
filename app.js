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

    title.textContent = titleText;
    body.textContent = bodyText;

    // div.innerHTML = layout;

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(author);
    author.appendChild(authorImage);
    author.appendChild(authorInfo);
    author.appendChild(editor);
    title.appendChild(span);

    span.classList.add("text-back");
    div.classList.add("item");
    div.classList.add("inactive");
    author.classList.add("author");
    authorImage.classList.add("author__image");

    authorImage.src = `../image/author${obj2.id}.jpg`;
    authorInfo.textContent = obj2.name;
    editor.textContent = "Editor";

    let nice = createBackWord(obj.title);
    // nice.classList.add("text-back");
    // title.appendChild(nice);

    // const arrayTitle = titleText.split(" ");

    // titleText.forEach((elem, index) => {
    //   // let newHead = [];
    //   if (elem === nice.textContent) {
    //     let text = elem.replace(
    //       `${elem}`,
    //       `<span class="text-back"> ${elem} </span>`
    //     );
    //     title.innerHTML += text;
    //   }
    //   title.innerText += ` ${elem} `;
    // });

    section.appendChild(div);
    // console.log(title);
  }
}

for (let i = 0; i < postsJson.length; i++) {
  for (let j = 0; j < authorJson.length; j++) {
    createLayout(postsJson[i], authorJson[j]);
  }
}

for (let i = 0; i < 12; i++) {
  let activeDiv = section.childNodes[i];
  activeDiv.classList.remove("inactive");
  activeDiv.classList.add("active");
}

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

function createBackWord(word) {
  const span = document.createElement("span");
  let array = word.split(" ");
  let rand = Math.floor(Math.random() * array.length);
  span.innerText = array[rand];

  return span;
}

const item = document.querySelectorAll(".item");

const checkbox = document.querySelector(".checkbox");
const label = document.querySelector(".label");

// checkbox.forEach((elem, index) => {
checkbox.addEventListener("click", (e) => {
  addNone(label.textContent);
});

function addNone(name) {
  item.forEach((elem) => {
    const authorName = elem.querySelector(".author > span");
    if (authorName.textContent !== name) {
      elem.style.display = "none";
    }
  });
}
// });

// filter.addEventListener("click", filterName(authorJson[0]));

// function filterName(authorName) {
//   let name = authorName.name;
//   console.log(name);
// }

// filter(authorJson[0]);
