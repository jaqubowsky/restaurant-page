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

  const contactLocationLink = document.createElement("a");
  contactLocationLink.href =
    "https://www.google.com/maps/place/Hollywood+Blvd,+Los+Angeles,+CA,+Stany+Zjednoczone/@34.1015499,-118.3424453,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bf3b245207d5:0xae58054941bd8669!8m2!3d34.1015455!4d-118.3402566?hl=pl-PL";
  contactLocationLink.target = "_blank";

  const contactLocationImg = document.createElement("img");
  contactLocationImg.classList.add("contact-img");
  contactLocationImg.src = image;
  contactLocationImg.alt = "Restaurant location";

  contactContainer.appendChild(contactNumber);
  contactContainer.appendChild(contactLocationText);
  contactLocationLink.appendChild(contactLocationImg);
  contactContainer.appendChild(contactLocationLink);

  return contactContainer;
}

export default function loadContact() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  main.appendChild(createContactContainer());
}
