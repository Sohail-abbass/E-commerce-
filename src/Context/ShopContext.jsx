// import React, { createContext, useState, useEffect } from "react";

// import all_product from "../Components/Assets/all_product";

// export const ShopContext = createContext(null);
// // intializes a default cart object where each product ID maps to a quantity of 0.
// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());



//   const [apiproducts, setapiProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch products");
//         return res.json();
//       })
//       .then((data) => {
//         const modified = data.map((product) => ({
//           ...product,
//           id: 1000 + product.id,
//         }));
//         setapiProducts(modified);
//       })
//       .catch((err) => setError(err.message));
//   }, []);
  
  


//   // Function to add an item to the cart
//   //  it will geting itemId as a product id from product display 
//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   // Function to calculate the total amount in the cart
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = all_product.find(
//           (product) => product.id === Number(item)
//         );
//         // multipley the product price with the quantity of that item and add the other item price
//         totalAmount += itemInfo.new_price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };
 
//   //count of total cart iteem
//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item]; // Fixed `items` to `item`
//       }
//     }
  
//     return totalItem;
//   };
  
//   const contextValue = {
//     getTotalCartItems,
//     getTotalCartAmount,
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     apiproducts,
//   };


//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;















import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [apiproducts, setApiProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        const modified = data.map((product) => ({
          ...product,
          id: 1000 + product.id, // avoid conflict
          new_price: product.price, // normalize for local comparison
        }));
        setApiProducts(modified);

        // 🛒 Update cart structure once we have API products
        const defaultCart = getDefaultCart(all_product, modified);
        setCartItems(defaultCart);
      })
      .catch((err) => setError(err.message));
  }, []);

  // ✅ Generate default cart from both local and API products
  const getDefaultCart = (local, api) => {
    let cart = {};
    [...local, ...api].forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) - 1,
    }));
  };

  // ✅ Total using both sources
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo =
          all_product.find((product) => product.id === Number(itemId)) ||
          apiproducts.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  const contextValue = {
    all_product,
    apiproducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

