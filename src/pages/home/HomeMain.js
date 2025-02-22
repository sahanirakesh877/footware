import React from "react";
import About from "./AboutSection";
import HomeSlider from "./SliderSection";
import HomeProduct from "./HomeProduct";
import ScrollToTop from "../../components/ScrollTop";

const HomeMain = () => {
  return (
    <>
      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          {/* SliderSection-start */}
          <HomeSlider />
          {/* SliderSection-start */}

          {/* HomeProduct-area-start */}
          <HomeProduct />
          {/* HomeProduct-area-end */}

          {/* About-area-start */}
          <About />
          {/* About-area-end */}

          {/* scrolltop-start */}
          <ScrollToTop scrollClassName="home react__up___scroll" />
          {/* scrolltop-end */}
        </div>
      </div>
    </>
  );
};

export default HomeMain;
