import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/imge/slider1.png";
import ModernDatepicker from "react-modern-datepicker";
import "slick-carousel/slick/slick.css";
import { FaChevronDown } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import applePlayStore from "../../assets/imge/apple.png";
import googleplayStore from "../../assets/imge/google.png";
import calendar11 from "../../assets/imge/calendar11.png";
const SliderCarol = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <div
              className="home_slider_caption carousel-caption"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <h1>
                A <span>spot</span> where all your <br /> <span>beauty</span>{" "}
                appointments <br />
                meet{" "}
              </h1>
              <div className="main_inpt_slider first_inp d-flex">
                <input type="search" alt="" placeholder="Enter Your Area" />
                <input type="date" alt="" />
                <select id="cars" name="carlist" form="carform">
                  <option value="volvo">Select the Field</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <button>Search</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="Second slide" />

          <Carousel.Caption>
            <div className="main_download_app">
              <h1>Download the app</h1>
              <p>
                An application that provides you with the list of Saloons
                nearby, saloon’s services, prices, and customer reviews, to make
                your beauty bookings easier
              </p>
              <div className="playStoreIcons">
                <div>
                  <img src={applePlayStore} />
                </div>
                <div>
                  <img src={googleplayStore} />
                </div>
              </div>
              <button className="link">Sign Up Now-It's free</button>
            </div>
            <div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderCarol;
