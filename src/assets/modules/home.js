export default function createHomeContent() {
  const wrapperContainer = document.querySelector(".wrapper");

  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main-title");
  mainTitle.textContent = "Da Grasso";

  const mainSubtitle = document.createElement("p");
  mainSubtitle.textContent = "Najlepsza pizzera w Pułtusku";

  const mainBtn = document.createElement("button");
  mainBtn.classList.add("btn");
  mainBtn.textContent = "ZAMÓW TERAZ";

  wrapperContainer.appendChild(mainContainer);
  mainContainer.appendChild(mainTitle);
  mainContainer.appendChild(mainSubtitle);
  mainContainer.appendChild(mainBtn);

  mainBtn.addEventListener("click", () => console.log("menu"));
}
