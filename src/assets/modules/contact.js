import image from "../images/location.png";

function createContactContainer() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");

  const contactNumber = document.createElement("p");
  contactNumber.classList.add("contact-number");
  contactNumber.textContent = "📞 123 456 789";

  const contactLocationText = document.createElement("p");
  contactLocationText.classList.add("contact-location-text");
  contactLocationText.textContent =
    "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const contactLocationImg = document.createElement("img");
  contactLocationImg.classList.add("contact-img");
  contactLocationImg.src = image;
  contactLocationImg.alt = "Restaurant location";

  contactContainer.appendChild(contactNumber);
  contactContainer.appendChild(contactLocationText);
  contactContainer.appendChild(contactLocationImg);

  return contactContainer;
}

export default function loadContact() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  main.appendChild(createContactContainer());
}
