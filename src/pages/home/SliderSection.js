import { Link } from "react-router-dom";

import Slider from "react-slick";

import sliderImg1 from "../../assets/images/footware/shoes6.jpg";
import sliderImg11 from "../../assets/images/footware/shoes5.jpg";
import sliderImg2 from "../../assets/images/footware/shoes3.jpg";
import sliderImg12 from "../../assets/images/footware/shoes7.jpg";

const HomeSlider = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    margin: 0,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="react-slider-part">
        <div className="home-sliders home2">
          <Slider {...sliderSettings}>
            <div className="single-slide">
              <div className="slider-img ">
                <img className="desktop" src={sliderImg1} alt="Nike Shoes Sale" />
                <img
                  className="mobile"
                  src={sliderImg11}
                 alt="Nike Shoes Mobile Banner"
                />
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    {/* <span
                      className="slider-pretitle  wow animate__fadeInUp"
                      data-wow-duration={"1s"} 
                    >
                      Step into Style & Comfort
                    </span> */}
                    <h3
                      className="slider-title wow animate__fadeInUp "
                      data-wow-duration={"1s"}
                    >
                    Elevate Your Look with
                      <br />
                      Exclusive Footwear
                    </h3>
                    <div
                      className="slider-btn wow animate__fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <Link to="/product" className="react-btn-border">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-slide">
              <div className="slider-img">
                <img
                  className="desktop"
                  src={sliderImg2}
                 alt="Nike Shoes Sale"
                />
                <img
                  className="mobile"
                  src={sliderImg12}
                  alt="Nike Shoes Sale"
                />
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    {/* <span
                      className="slider-pretitle wow animate__fadeInUp"
                      data-wow-duration="3s"
                    >
                     Step Into Style & Confidence
                    </span> */}
                    <h2
                      className="slider-title wow animate__fadeInUp"
                      data-wow-duration="1s"
                    >
                      The Perfect Pair for <br /> Every Adventure
                    </h2>
                    <div
                      className="slider-btn wow animate__fadeInUp"
                      data-wow-duration={"1.2s"} 
                    >
                      <Link to="/product" className="react-btn-border">
                      Explore Collection
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
