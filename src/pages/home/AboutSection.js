import { Link } from "react-router-dom";
import shoes1 from "../../assets/images/footware/shoes4.jpg";

const About = () => {
  return (
    <div className="about__area about__area_one p-relative pt---10 pb---120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about__image">
              {/* <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={aboutBadge} alt="Shape Image" /> */}
              <img src={shoes1} alt="About" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about__content">
              <h2
                className="about__title wow animate__fadeInUp"
                data-wow-duration="0.3s"
              >
                Welcome to <br /> <em>Black Force Shoes Collection</em>
              </h2>
          

              <p className="wow animate__fadeInUp" data-wow-duration="0.6s">
              Discover the perfect blend of style, comfort, and durability with our premium shoe collection. 
      Crafted with precision and designed for all occasions, Black Force Shoes ensures that every step 
      you take is both stylish and comfortable.
              </p>
              <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                <li className="last-li">
                  <em>Get Support</em>
                  <Link to="mailto:info@gmail.com.com">support@react.com</Link>
                </li>
                <li className="last-li">
                  <em>call us on Whatsapp</em>
                  <Link to="mailto:info@gmail.com.com">9800000001</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
