// import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import PaymentApp from "./Pages/PaymentApp";
import ContactForm from "./Pages/ContactForm";
import About from "./Pages/About";
import Office from "./Pages/Office";
import Company from "./Pages/Company";
import Login from "./Pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          {/* ShopCategory passing two props banner and category .Banner of display and category define which men,women and kid ,these two props are gettig in shopcategory and use it */}
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/payment" element={<PaymentApp />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/office" element={<Office />} />

          <Route path="/company" element={<Company />} />
          <Route path="/logiin" element={<Login />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
