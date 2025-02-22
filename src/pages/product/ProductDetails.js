import React from "react";
import { useParams } from "react-router-dom";
import shoesData from "../../data/Products";

import SectionTitle from "../../components/SectionTitle";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";
import Footer from "../../components/Footer";
import Logo from "../../assets/images/logos/logo2.png";
import "./product.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = shoesData.find((product) => product.id === parseInt(id));
  console.log(product);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Header
        parentMenu="Product-details"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <Breadcrumb pageTitle="Product-details" />

          {/* Product Details Area Start */}
          <div className="product-details-area pt---100 pb---100">
            <div className="container">
              <div className="row">
                {/* Left Column - Product Image */}
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-detail-image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                {/* Right Column - Product Info */}
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <h2>{product.name}</h2>
                  <p className="product-brand">
                    <strong>Brand: </strong>
                    {product.brand}
                  </p>
                  <p className="product-category">
                    <strong>Category: </strong>
                    {product.category}
                  </p>
                  <p>
                    <strong>Price: </strong>
                    {product.price}
                  </p>

                  <p>
                    <strong>Description: </strong>
                    {product.description}
                  </p>

                  {/* Add to Cart Button */}
                  <button className="add-to-cart-btn ">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          {/* Product Details Area End */}

          <ScrollToTop />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
