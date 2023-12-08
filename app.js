const body = document.body;
const btnMore = document.createElement("button");
const section = document.createElement("section");
const news = document.createElement("h1");

body.appendChild(news);
body.appendChild(section);
body.appendChild(btnMore);

news.textContent = "News";
btnMore.textContent = "More";

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
    <p class="news__text">${obj.body}</p>
    `;
  div.innerHTML = layout;

  div.classList.add("item");
  div.classList.add("inactive");

  //   obj2.id != undefined
  //     ? obj.userId === obj2.id
  //       ? (div.innerHTML += `<span>Autor:${obj2.name}</span>`)
  //       : (div.innerHTML += `<span>Autor:</span>`)
  //     : console.log("");

  if (obj.userId === obj2.id) {
    div.innerHTML += `<span>Autor:${obj2.name}</span>`;
  }

  section.appendChild(div);
}

for (let i = 0; i < postsJson.length; i++) {
  createLayout(postsJson[i], authorJson);
}

for (let i = 0; i < 10; i++) {
  let activeDiv = section.childNodes[i];
  activeDiv.classList.remove("inactive");
  activeDiv.classList.add("active");
}

// const abs = section.childNodes.filter((elem) =>
//   elem.classList.contains("active")
// );

// console.log(abs);
let count = 20;
function moreNews() {
  for (let i = 10; i < count; i++) {
    let activeDiv = section.childNodes[i];
    activeDiv.classList.remove("inactive");
    activeDiv.classList.add("active");
  }
  count += 10;
}

btnMore.addEventListener("click", moreNews);
