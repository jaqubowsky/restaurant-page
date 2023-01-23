import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

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
  const buttonTitles = ["HOME", "MENU", "ABOUT"];

  for (let i = 0; i < buttonTitles.length; i++) {
    listElement.innerHTML += ` <button class="nav-btn btn" data-id="${i}">${buttonTitles[i]}</button> `;
  }

  listElement.addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-btn")) return;
    if (e.target.classList.contains("active")) return;

    if (e.target.innerHTML === "HOME") loadHome();
    if (e.target.innerHTML === "MENU") loadMenu();
    if (e.target.innerHTML === "ABOUT") loadContact();
    addActiveClass(e.target);
  });

  navBar.appendChild(listElement);
  return navBar;
}

export function addActiveClass(target) {
  const btns = document.querySelectorAll(".nav-btn");

  btns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.id === target.dataset.id) btn.classList.add("active");
  });
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
  addActiveClass(document.querySelector("[data-id='0']"));
}
