document.addEventListener("DOMContentLoaded", () => {
  const singleProductContainer = document.querySelector(".single-product");

  displaySingleProduct();

  function displaySingleProduct() {
    const selectedProduct = localStorage.getItem("selectedProduct");

    if (selectedProduct) {
      const product = JSON.parse(selectedProduct);
      const productElement = createSingleProductElement(product);
      singleProductContainer.appendChild(productElement);
    }
  }

  function createSingleProductElement(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product-single");

    const imageElement = document.createElement("img");
    imageElement.classList.add("product-single-img");
    imageElement.src = product.image;
    imageElement.alt = product.title;

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("product-details-single");

    const titleElement = document.createElement("h2");
    titleElement.textContent = `Title : ${product.title}`;

    const description = document.createElement("h2");
    description.textContent = `Description : ${product.description}`;

    const category = document.createElement("h2");
    category.textContent = `Category : ${product.category}`;

    const rating = document.createElement("h2");
    rating.textContent = `Rating : ${product?.rating?.rate}`;

    const count = document.createElement("h2");
    count.textContent = `Count : ${product?.rating?.count}`;

    const btn=document.createElement("button");
    btn.classList.add("buynow-2")
    btn.textContent="Buy Now"

    const priceElement = document.createElement("h2");
    priceElement.textContent = `Price: $${product.price}`;

    detailsElement.appendChild(titleElement);
    detailsElement.appendChild(priceElement);
    detailsElement.appendChild(description);
    detailsElement.appendChild(category);
    detailsElement.appendChild(rating);
    detailsElement.appendChild(count);
    detailsElement.appendChild(btn);
    productElement.appendChild(imageElement);
    productElement.appendChild(detailsElement);

    return productElement;
  }
});
