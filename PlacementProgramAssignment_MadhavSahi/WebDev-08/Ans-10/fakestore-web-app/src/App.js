import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>All Products</h1>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img className="img" src={product.image} alt={product.title} />
            <div className="product-details">
              <h2 className="title">{product.title}</h2>
              <p className="price">Price: {product.price} $</p>
              <div className="btns">
                <button className="btn">Add to Cart</button>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
