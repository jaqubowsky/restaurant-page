export default function createFooter() {
  const footerContainer = document.querySelector(".footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © 2023 Jakub Nalewajk";

  footerContainer.appendChild(footerText)
}
