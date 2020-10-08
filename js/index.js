import { baseUrl } from "./settings/api.js";
import { getExistingFavs } from "./utils/theFavs.js";

const productsUrl = baseUrl + "products";

(async function renderPrices() {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<div class="product">
                                        <h4>${product.Name}</h4>
                                        <p>Price: ${product.Price}</p>
                                        <p>Descrition: ${product.Description}</p>
                                        
                                   <i class="far fa-heart" data-name="${product.Name}" data-price="${product.Price}" data-description="${product.Description}" ></i></div>`;
    });
  } catch (error) {
    console.log(error);
  }

  const favButtons = document.querySelectorAll(".product i");

  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (productExists === undefined) {
      const product = { id: id, name: name };
      currentFavs.push(product);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }

  function saveFavs(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
  }
})();
