document.addEventListener("DOMContentLoaded", fetchProducts);

function fetchProducts() {
  const url = "https://fakestoreapi.com/products";
  fetch(url).then(handleResponse).then(populateProductList).catch(handleError);
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Failed to fetch products from API");
  }
  return response.json();
}

function populateProductList(products) {
  const productContainer = document.querySelector(".product-list");

  products.forEach((product) => {
    const productElement = `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-details">
          <h2>${product.title}</h2>
          <p>Price : ${product.price} $</p>
        </div>
        <div class="product-buttons">
          <button class="addtocart">Add to cart</button>
        </div>
      </div>
    `;
    productContainer.innerHTML += productElement;
  });
}

function handleError(error) {
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";  
    const errorElement = document.createElement("h1");
    errorElement.textContent = "Error fetching API.";
    productContainer.appendChild(errorElement);
}
