import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import LoginSignup from "./components/LoginSignup/LoginSignup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  // {
  //   showLogin?`${document.body.style.overflow = 'hidden'}`:`${document.body.style.overflow = 'auto'}`
  // }
  
  return (
    <>
      {showLogin?<LoginSignup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
      <ScrollTop/>
    </>
  );
};

export default App;
