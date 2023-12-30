let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
let author = await fetch("https://jsonplaceholder.typicode.com/users");
export let postsJson, authorJson;

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
