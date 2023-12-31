export { createBackWord, createLayout, firstDraw };
import { postsJson, authorJson } from "./services.js";

function createBackWord(word) {
  const span = document.createElement("span");
  let array = word.split(" ");
  let rand = Math.floor(Math.random() * array.length);
  span.innerText = array[rand];

  return span;
}

function createLayout(section, obj, obj2) {
  if (obj.userId === obj2.id) {
    const div = document.createElement("div");
    const author = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const authorImage = document.createElement("img");
    const authorInfo = document.createElement("span");
    const editor = document.createElement("span");
    let span = document.createElement("span");

    let titleText = obj.title[0].toUpperCase() + obj.title.slice(1);
    const bodyText = obj.body[0].toUpperCase() + obj.body.slice(1);

    body.textContent = bodyText;

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(author);
    author.appendChild(authorImage);
    author.appendChild(authorInfo);
    author.appendChild(editor);

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
  }
}

function firstDraw(section) {
  for (let i = 0; i < postsJson.length; i++) {
    for (let j = 0; j < authorJson.length; j++) {
      createLayout(section, postsJson[i], authorJson[j]);
    }
  }

  for (let i = 0; i < 12; i++) {
    let activeDiv = section.childNodes[i];
    activeDiv.classList.remove("inactive");
    activeDiv.classList.add("active");
  }
}
