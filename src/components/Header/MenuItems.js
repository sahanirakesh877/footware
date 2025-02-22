import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItems = (props) => {
  const { parentMenu } = props;

  const location = useLocation();

  const [home, setHome] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
    } else if (menu === "product") {
      setHome(false);
    } else if (menu === "gallery") {
      setHome(false);
    } else if (menu === "contact") {
      setHome(false);
    }
  };

  return (
    <>
      <li className={parentMenu === "home" ? "has-sub menu-active" : "has-sub"}>
        <Link
          to="/"
          className={home ? "hash menu-active" : "hash"}
          onClick={() => {
            openMobileMenu("home");
          }}
        >
          Home
          <span className="arrow "></span>
        </Link>
      </li>

      <li className={location.pathname === "/product" ? "menu-active" : ""}>
        <Link to="/product">Product</Link>
      </li>

      <li className={location.pathname === "/gallery" ? "menu-active" : ""}>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className={location.pathname === "/contact" ? "menu-active" : ""}>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};

export default MenuItems;
