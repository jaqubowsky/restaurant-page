export default function createHomeContent() {
  const mainContainer = document.querySelector(".main");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main-title");
  mainTitle.textContent = "Da Grasso";

  const mainSubtitle = document.createElement("p");
  mainSubtitle.textContent = "Najlepsza pizzera w Pułtusku";

  const mainBtn = document.createElement("button");
  mainBtn.classList.add("btn");
  mainBtn.textContent = "ZAMÓW TERAZ"

  mainContainer.appendChild(mainTitle)
  mainContainer.appendChild(mainSubtitle)
  mainContainer.appendChild(mainBtn)

  mainBtn.addEventListener("click", () => console.log("menu"))
}
