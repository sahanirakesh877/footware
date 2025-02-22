import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";

//Custom Components

import Home from "../pages/home";

import Contact from "../pages/contact";
import Error from "../pages/404";
import LoadTop from "../components/ScrollTop/LoadTop";
import Gallery from "../pages/Gallery/Gallery";
import Product from "../pages/product/Products";
import ProductDetails from "../pages/product/ProductDetails";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Preloader /> : ""}
      <>
        <LoadTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
