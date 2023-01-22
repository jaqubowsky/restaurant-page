function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "MENU";

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items");

  menuItemsContainer.appendChild(
    createMenuItem(
      "Pizza Pepperoni",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      "25$"
    )
  );
  menuItemsContainer.appendChild(
    createMenuItem(
      "Pizza Simplicita",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      "22$"
    )
  );
  menuItemsContainer.appendChild(
    createMenuItem(
      "Pizza Hawajska",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      "29$"
    )
  );

  menuItemsContainer.appendChild(
    createMenuItem(
      "Pizza Zbójecka",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      "38$"
    )
  );

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuItemsContainer);

  return menuContainer;
}

function createMenuItem(name, description, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const menuItemName = document.createElement("h2");
  menuItemName.classList.add("menu-item-name");
  menuItemName.textContent = name;

  const menuItemDescription = document.createElement("p");
  menuItemDescription.classList.add("menu-item-description");
  menuItemDescription.textContent = description;

  const menuItemPrice = document.createElement("h2");
  menuItemPrice.classList.add("menu-item-price");
  menuItemPrice.textContent = price;

  menuItem.appendChild(menuItemName);
  menuItem.appendChild(menuItemDescription);
  menuItem.appendChild(menuItemPrice);

  return menuItem;
}

export default function loadMenu() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  main.appendChild(createMenu());
}
