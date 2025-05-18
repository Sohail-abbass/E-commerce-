// import React from 'react
import "./Offer.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;


// import React, { useState } from 'react';
// import "./Offer.css";
// import exclusive_image from "../Assets/exclusive_image.png";

// const Offer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = () => {
//     if (email.trim() === "") {
//       alert("Please enter a valid email.");
//       return;
//     }

//     // 👉 You can replace this with an API call to store/send the email
//     console.log("User Email:", email);
//     alert(`Thanks! We'll contact you at ${email}`);
//     setEmail(""); // Clear input after submission
//   };

//   return (
//     <div className="offers">
//       <div className="offers-left">
//         <h1>Exclusive</h1>
//         <h1>Offers For You</h1>
//         <p>ONLY ON BEST SELLERS PRODUCTS</p>

//         <div className="offer-input-container">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="email-input"
//           />
//           <button onClick={handleSubmit}>Check Now</button>
//         </div>
//       </div>

//       <div className="offers-right">
//         <img src={exclusive_image} alt="Exclusive Offer" />
//       </div>
//     </div>
//   );
// };

// export default Offer;

