import React, { useEffect, useState } from "react";  // Added useState import
import './ImageGrid.css';

const ImageGrid = () => {
  const [products, setProducts] = useState([]); // Added useState here
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        // Filter for bags and shoes categories (simulate by using "women's clothing" & "men's clothing")
        const filtered = data.filter(
          (item) =>
            item.category === "women's clothing" ||
            item.category === "men's clothing"
        );
        setProducts(filtered);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error)
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        Error: {error}
      </div>
    );

  if (products.length === 0)
    return (
      <div style={{ textAlign: "center" }}>
        Loading products...
      </div>
    );

  return (
    <div className="image-grid-container">
      <div className="grid-header">
        <h2 className="grid-title">Explore Our Bags & Shoes Collection</h2>
        <p className="grid-description">
          Discover our premium range of bags and shoes that blend comfort, style, and quality — perfect for any occasion.
        </p>
      </div>
      <div className="grid">
        {products.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image.image} alt={image.title} className="grid-image" />
            <div className="grid-caption">{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
