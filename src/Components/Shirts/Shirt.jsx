import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Shirt.css'; // You will update this with new styles

const Shirt = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Fetch shirt-related products from dummy API
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [products]);

  if (products.length === 0) return <p>Loading products...</p>;

  const product = products[current];

  return (
    <div className="shirt-container">
      <h2 className="shirt-heading">Our Product Show</h2>
      <div className="carousel">
        <motion.img
          key={product.id}
          src={product.image}
          alt={product.title}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="carousel-image"
        />
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Shirt;
