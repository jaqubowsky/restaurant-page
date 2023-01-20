function createElement() {
  const newElement = document.createElement("div");

  newElement.innerHTML = "asd";

  return newElement;
}

document.body.appendChild(createElement())
