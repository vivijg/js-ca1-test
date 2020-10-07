import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<div class="product"><a  href="detail.html?id=${product.id}">
                                        <h4>${product.name}</h4>
                                        <p>Price: ${product.price}</p>
                                        <p>Descrition: ${product.description}</p>
                                        
                                    </a> <i class="fas fa-minus-circle"></i></div>`;

      console.log(product);
    });
  } catch (error) {
    console.log(error);
  }
})();
