export default function createHeader() {
  const headerContainer = document.querySelector(".header");

  const navBar = document.createElement("nav");
  navBar.classList.add("nav-bar");

  const ulEl = document.createElement("ul");
  const linkTitles = ["HOME", "MENU", "ABOUT US"];

  for (let i = 0; i < linkTitles.length; i++) {
    ulEl.innerHTML += ` <a class="nav-link"><li>${linkTitles[i]}</li></a> `;
  }
  ulEl.addEventListener("click", (e) => {
    if (e.target.innerHTML === "HOME") console.log("home")
    if (e.target.innerHTML === "MENU") console.log("menu")
    if (e.target.innerHTML === "ABOUT US") console.log("about us")
  })

  headerContainer.appendChild(navBar);
  navBar.appendChild(ulEl);
}
