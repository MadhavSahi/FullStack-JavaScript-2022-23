document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [];
  const productContainer = document.querySelector(".product-list");
  const cartContainer = document.querySelector(".cart-items");

  fetchProducts();

  function fetchProducts() {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then(handleResponse)
      .then(populateProductList)
      .catch(handleError);
  }

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }

  function populateProductList(products) {
    productContainer.innerHTML = "";

    products.forEach((product) => {
      const productElement = createProductElement(product);
      productContainer.appendChild(productElement);
    });
  }

  function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.title;

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("product-details");

    const titleElement = document.createElement("h2");
    titleElement.textContent = product.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price : $${product.price}`;

    productElement.addEventListener("click", () => {
      saveProductToLocalStorage(product);
      openSingleProductPageInNewTab();
    });

    function saveProductToLocalStorage(product) {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    }

    function openSingleProductPageInNewTab() {
      const url = window.location.href.split("/");
      url.pop();
      url.push("single-product.html");
      const newTabUrl = url.join("/");
      window.open(newTabUrl, "_blank");
    }
    const buttonsElement = document.createElement("div");
    buttonsElement.classList.add("product-buttons");

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to cart";
    addToCartButton.addEventListener("click", () => addToCart(product));

    buttonsElement.appendChild(addToCartButton);

    detailsElement.appendChild(titleElement);
    detailsElement.appendChild(priceElement);

    productElement.appendChild(imageElement);
    productElement.appendChild(detailsElement);
    productElement.appendChild(buttonsElement);

    return productElement;
  }

  function addToCart(product) {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    displayCartItems();
  }

  function displayCartItems() {
    cartContainer.innerHTML = "";
    cartItems.forEach((item) => {
      const cartItemElement = createCartItemElement(item);
      cartContainer.appendChild(cartItemElement);
    });
  }

  function createCartItemElement(item) {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    const imageElement = document.createElement("img");
    imageElement.src = item.image;
    imageElement.alt = item.title;

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("cart-item-details");

    const titleElement = document.createElement("h2");
    titleElement.textContent = item.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price : $${item.price}`;

    const quantityElement = document.createElement("p");
    quantityElement.textContent = `Quantity: ${item.quantity}`;

    const buynow = document.createElement("button");
    buynow.classList.add("buynow");
    buynow.textContent = "Buy";

    cartItemElement.addEventListener("click", () => {
      saveProductToLocalStorage(item);
      openSingleProductPageInNewTab();
    });
    function saveProductToLocalStorage(product) {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    }
    function openSingleProductPageInNewTab() {
      const url = window.location.href.split("/");
      url.pop();
      url.push("single-product.html");
      const newTabUrl = url.join("/");
      window.open(newTabUrl, "_blank");
    }

    detailsElement.appendChild(titleElement);
    detailsElement.appendChild(priceElement);
    detailsElement.appendChild(quantityElement);

    cartItemElement.appendChild(imageElement);
    cartItemElement.appendChild(detailsElement);
    cartItemElement.appendChild(buynow);

    return cartItemElement;
  }

  function handleError(error) {
    console.error(error);
  }
});
