import React from "react";
import SectionTitle from "../../components/SectionTitle";
import "../product/product.css";

import shoesData from "../../data/Products";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="popular__course__area pt---100 pb---100">
      <div className="container">
        <SectionTitle Title="Popular Footwares" />

        {/* main contents  start*/}

        <div className="row">
          {shoesData.slice(0,6).map((product, index) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card border border-0 ">
              <Link to={"/product"}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                 </Link>
               
                  <div className="card-body shadow ">
                    <h5 className="card-title text-decoration-none ">
                      {product.name}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">{product.category}</span>
                      <span className="fw-bold">{product.price}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="text-warning">
                        {Array(Math.round(product.rating)).fill("★").join("")}
                      </span>
                      <span>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
