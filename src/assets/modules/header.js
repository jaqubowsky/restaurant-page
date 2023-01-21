import createHomeContent from "./home";

export default function createHeader() {
  const wrapperContainer = document.querySelector(".wrapper");

  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header");

  const navBar = document.createElement("nav");
  navBar.classList.add("nav-bar");

  const ulEl = document.createElement("ul");
  const linkTitles = ["HOME", "MENU", "ABOUT US"];

  for (let i = 0; i < linkTitles.length; i++) {
    ulEl.innerHTML += ` <a class="nav-link"><li>${linkTitles[i]}</li></a> `;
  }
  ulEl.addEventListener("click", (e) => {
    if (e.target.innerHTML === "HOME") {
        document.querySelector(".main").remove()
        createHomeContent();
    }
    if (e.target.innerHTML === "MENU") console.log("menu");
    if (e.target.innerHTML === "ABOUT US") console.log("about us");
  });

  wrapperContainer.appendChild(headerContainer);
  headerContainer.appendChild(navBar);
  navBar.appendChild(ulEl);
}
