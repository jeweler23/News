# News
News is a project that displays posts and post authors with a [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
## Installation
Use git command
```bash
git clone https://github.com/jeweler23/News.git
```
## Build with
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
## Сode structure
1. We receive objects with posts and authors from the server.
   - In the services.js file we get objects with posts and authors.
   - Export them to news generation file news.js

  ```bash
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
  ```
  
2. We generate news based on the received data.
   - Сreate html markup and add classes to tags.
   - Place the resulting markup on the page.
   - This functionality is presented in the news.js file.
3. Add popup and burger-menu functionality in the popup-open.js file

## Contributing
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Contacts
1.Email: lopatin.lopatin2011@gmail.com
2. Project link: https://github.com/jeweler23/News.git
