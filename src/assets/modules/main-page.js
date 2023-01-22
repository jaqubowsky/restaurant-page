import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header");

  headerContainer.appendChild(createNavBar());

  return headerContainer;
}

function createNavBar() {
  const navBar = document.createElement("nav");
  navBar.classList.add("nav-bar");

  const listElement = document.createElement("ul");
  const linkTitles = ["HOME", "MENU", "ABOUT"];

  for (let i = 0; i < linkTitles.length; i++) {
    listElement.innerHTML += ` <a class="nav-link"><li>${linkTitles[i]}</li></a> `;
  }
  listElement.addEventListener("click", (e) => {
    if (e.target.innerHTML === "HOME") loadHome();
    if (e.target.innerHTML === "MENU") loadMenu();
    if (e.target.innerHTML === "ABOUT") console.log("about us");
  });

  navBar.appendChild(listElement);
  return navBar;
}

function createMain() {
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main");

  return mainContainer;
}

function createFooter() {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © 2023 Jakub Nalewajk";

  footerContainer.appendChild(footerText);

  return footerContainer;
}

export default function initializeWebsite() {
  const wrapperContainer = document.getElementById("wrapper");

  wrapperContainer.appendChild(createHeader());
  wrapperContainer.appendChild(createMain());
  wrapperContainer.appendChild(createFooter());

  loadHome();
}
