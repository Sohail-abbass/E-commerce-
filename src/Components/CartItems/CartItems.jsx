
import { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  
  return (
    <div className="cartitems">
      <div className="cartitems-header">
        <p>Product</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cartitems-row">
              <img
                src={product.image}
                alt=""
                className="carticon-product-icon"
              />
              <p>{product.name}</p>
              <div className="cartitems-quantity">
                {cartItems[product.id]}
              </div>
              <p>${product.new_price * cartItems[product.id]}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(product.id)}
                alt="Remove item"
                className="cart-remove-icon"
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-footer">
        <div className="cartitems-summary">
          <h2>Cart Totals</h2>
          <div className="cartitems-total-row">
            <p>Subtotal:</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cartitems-total-row">
            <p>Shipping Fee:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-row">
            <h3>Total:</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
