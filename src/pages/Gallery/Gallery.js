import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";
 import Logo from "../../assets/images/logos/logo2.png";
import galleryData from "../../data/gallery"; 




const Gallery = () => {
    const styles = {
        galleryItem: {
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          cursor: "pointer",
        },
        galleryItemHover: {
          transform: "scale(1.05)",
        },
        overlay: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        },
        overlayHover: {
          opacity: 1,
        },
    
      };
  return (
    <>
      <Header
        parentMenu="Gallery"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <Breadcrumb pageTitle="Gallery" />

         
          <section className="px-2 pb-5 pt-2">

          <div className="row g-4">
              {galleryData.map((item, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div
                    className="gallery-item"
                    style={styles.galleryItem}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <img src={item.img} className="img-fluid w-100" alt={`Gallery Item ${index + 1}`} />
                    <div
                      className="overlay"
                      style={styles.overlay}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                    >
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <ScrollToTop />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
