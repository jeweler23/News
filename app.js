const body = document.body;
const btnMore = document.createElement("button");
const section = document.createElement("section");
const news = document.createElement("h1");

body.appendChild(news);
body.appendChild(section);
body.appendChild(btnMore);

news.textContent = "News";
btnMore.textContent = "more 12  news";

news.classList.add("title");
btnMore.classList.add("btn");
section.classList.add("wrapper");

let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
let author = await fetch("https://jsonplaceholder.typicode.com/users/1");
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
  const div = document.createElement("div");
  div.classList.add("item");
  const layout = `
    <h2 class="news__title">${
      obj.title[0].toUpperCase() + obj.title.slice(1)
    }</h2>
    <p class="news__text"> ${obj.body[0].toUpperCase() + obj.body.slice(1)}</p>
    `;
  div.innerHTML = layout;

  div.classList.add("item");
  div.classList.add("inactive");

  if (obj.userId === obj2.id) {
    div.innerHTML += `<span class="autor">Autor: ${obj2.name}</span>`;
  } else {
    div.innerHTML += `<span class="autor">Autor: </span>`;
  }

  section.appendChild(div);
}

for (let i = 0; i < postsJson.length; i++) {
  createLayout(postsJson[i], authorJson);
}

for (let i = 0; i < 12; i++) {
  let activeDiv = section.childNodes[i];
  activeDiv.classList.remove("inactive");
  activeDiv.classList.add("active");
}

// const abs = section.childNodes.filter((elem) =>
//   elem.classList.contains("active")
// );

// console.log(abs);
let count = 24;
function moreNews() {
  for (let i = 12; i < count; i++) {
    let activeDiv = section.childNodes[i];
    activeDiv.classList.remove("inactive");
    activeDiv.classList.add("active");
  }
  count += 12;
}

btnMore.addEventListener("click", moreNews);
