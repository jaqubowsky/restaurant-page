export default function createFooter() {
  const wrapperContainer = document.querySelector(".wrapper");
  
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © 2023 Jakub Nalewajk";

  wrapperContainer.appendChild(footerContainer);
  footerContainer.appendChild(footerText);
}
