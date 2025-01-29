// import React from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>
          <div className="productdisplau-right-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            veritatis, vel rerum nesciunt excepturi eaque molestiae dignissimos
            earum minus, impedit dolorum atque eos possimus ullam hic,
            aspernatur delectus? Cumque, veniam.
          </div>
          <div className="productdisplay-right-sizes">
            <h1>Select size</h1>
            <div className="productdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>

          <p className="productdisplay-right-cateogry">
            <span>Category</span>Women, T- shirt,Crop Top
          </p>
          <p className="productdisplay-right-cateogry">
            <span>Tags</span>Modern, Latest
          </p>
        </div>
      </div>
    
  );
};

export default ProductDisplay;
