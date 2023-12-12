const body = document.body;
const btnMore = document.createElement("button");
const section = document.createElement("section");
// const news = document.createElement("h1");

// body.appendChild(news);
body.appendChild(section);
body.appendChild(btnMore);

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
    const authorImage = document.createElement("img");
    const authorInfo = document.createElement("span");
    const editor = document.createElement("span");

    const layout = `
    <h2 class="news__title">${
      obj.title[0].toUpperCase() + obj.title.slice(1)
    }</h2>
    <p class="news__text"> ${obj.body[0].toUpperCase() + obj.body.slice(1)}</p>
    `;
    div.innerHTML = layout;
    div.appendChild(author);
    author.appendChild(authorImage);
    author.appendChild(authorInfo);
    author.appendChild(editor);

    div.classList.add("item");
    div.classList.add("inactive");
    author.classList.add("author");
    authorImage.classList.add("author__image");

    authorImage.src = `../image/author${obj2.id}.jpg`;
    authorInfo.textContent = obj2.name;
    editor.textContent = "Editor";

    // div.innerHTML += `<span class="autor">Autor: ${obj2.name}</span>`;
    section.appendChild(div);
  }
  // } else {
  //   div.innerHTML += `<span class="autor">Autor: </span>`;
  // }

  // section.appendChild(div);
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
    btnMore.textContent = "news end";
    btnMore.style.display = "none";
    setTimeout(() => alert("news end"), 1000);
  }
}

btnMore.addEventListener("click", moreNews);
btnMore.addEventListener("click", endNews);
