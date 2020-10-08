import { getExistingFavs } from "./utils/theFavs.js";
import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";

const favorites = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (favorites.length === 0) {
  productContainer.innerHTML = "No favorites";
}

favorites.forEach((product) => {
  productContainer.innerHTML += `<div class="product">
  <h4>${product.Name}</h4>
  <p>Price: ${product.Price}</p>
  <p>Descrition: ${product.Description}</p>
  
<i class="far fa-heart"></i></div>`;
});
