export function createBackWord(word) {
  const span = document.createElement("span");
  let array = word.split(" ");
  let rand = Math.floor(Math.random() * array.length);
  span.innerText = array[rand];

  return span;
}
