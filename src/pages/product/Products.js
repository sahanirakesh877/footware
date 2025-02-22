import React from "react";
import SectionTitle from "../../components/SectionTitle";

import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollTop";
import Breadcrumb from "../../components/Breadcrumb";
import Logo from "../../assets/images/logos/logo2.png";
import Header from "../../components/Header";
import './product.css'

import shoesData from "../../data/Products"; 
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Header
        parentMenu="Product"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb pageTitle="Product" />

          <div className="popular__course__area pt---100 pb---100">
            <div className="container">
              {/* Products content start  */}
              <div className="row">
                {shoesData.map((product, index) => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <Link to={`/product/${product.id}`}>
                    <div className="card">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted">{product.category}</span>
                          <span className="fw-bold">{product.price}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <span className="text-warning">
                            {Array(Math.round(product.rating))
                              .fill("★")
                              .join("")}
                          </span>
                          <span>
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Products content end  */}
            </div>
          </div>

          <ScrollToTop />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
