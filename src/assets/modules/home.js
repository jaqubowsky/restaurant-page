import { addActiveClass } from "./main-page";
import loadMenu from "./menu";

function createHome() {
  const homeElement = document.createElement("div");
  homeElement.classList.add("home");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main-title");
  mainTitle.textContent = "Da Grasso";

  const mainSubtitle = document.createElement("p");
  mainSubtitle.textContent = "Najlepsza pizzera w Pułtusku";

  const mainBtn = document.createElement("button");
  mainBtn.classList.add("btn");
  mainBtn.classList.add("main-btn");
  mainBtn.dataset.id = "1";
  mainBtn.textContent = "ZAMÓW TERAZ";

  homeElement.appendChild(mainTitle);
  homeElement.appendChild(mainSubtitle);
  homeElement.appendChild(mainBtn);

  mainBtn.addEventListener("click", (e) => {
    addActiveClass(e.target);
    loadMenu();
  });

  return homeElement;
}

export default function loadHome() {
  const mainContainer = document.querySelector(".main");
  mainContainer.innerHTML = "";

  mainContainer.appendChild(createHome());
}
