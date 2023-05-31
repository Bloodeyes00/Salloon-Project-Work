import React, { Component, useState } from "react";
import Header from "../../Componet/Headers/Header";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import errowImage from "../../assets/imge/newimages/errowImge.png";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/imge/slider1.png";
import whyImge from "../../assets/imge/Path 35.png";
import slider2 from "../../assets/imge/partnerimage/slider.png";
import applePlayStore from "../../assets/imge/apple.png";
import googleplayStore from "../../assets/imge/google.png";
import internetImge from "../../assets/imge/partnerimage/sales.png";
import calendar from "../../assets/imge/partnerimage/push.png";
import groth from "../../assets/imge/partnerimage/yoga.png";
import Path36 from "../../assets/imge/partnerimage/Path 36.png";
import GroupPhone from "../../assets/imge/partnerimage/newdesignorg.png";
import slider3 from "../../assets/imge/2090218.jpg";
import bookPhones from "../../assets/imge/partnerimage/multimob.png";
import errorIcons from "../../assets/imge/errorIcons1.png";
import errowimge from "../../assets/imge/newimages/errowImge.png";
import Slider from "react-slick";
import { FaCalendarAlt, FaLaptopCode, FaCheck, FaTimes } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import PriceTable from "../../Componet/PriceingTable";
import storiesImges from "../../assets/imge/pexels-photo-220453.jpeg";
import "slick-carousel/slick/slick.css";
import Footer from "../../Componet/Footer/Footer";
import SloneProducts from "../../Componet/ProductsCards/Products/ProductCardList";
// import "slick-carousel/slick/slick-theme.css";
import { GiRoundStar } from "react-icons/gi";
import Products from "../../api/products";
import feat1 from "../../assets/imge/Path 28705.png";
import feat2 from "../../assets/imge/system.png";
import feat3 from "../../assets/imge/collaboration.png";
import booking_img from "../../assets/imge/newimages/Group 21257.png";
import { RiSendPlaneLine } from "react-icons/ri";
import cs_1 from "../../assets/imge/speech-bubble.png";
import cs_2 from "../../assets/imge/gift.png";
import cs_3 from "../../assets/imge/reaction.png";
import cs_4 from "../../assets/imge/database.png";
import cs_5 from "../../assets/imge/Group 20516.png";
import mobile_try from "../../assets/imge/newimages/trygrp.png";
import smart1 from "../../assets/imge/booking.png";
import smart2 from "../../assets/imge/bell.png";
import smart3 from "../../assets/imge/online-appointment.png";
import smart4 from "../../assets/imge/bullhorn.png";
import img_track from "../../assets/imge/Group 20648.png";
import arrow_left from "../../assets/imge/Group 206091.png";
import arrow_text from "../../assets/imge/newimages/text.png";
import { GoCheck } from "react-icons/go";
import price_img from "../../assets/imge/laptop.png";
import GoSmart from "../../Componet/GoSmart";
import AOS from "aos";
import "aos/dist/aos.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export class PartnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    AOS.init({
      duration: 3000,
    });
  }

  componentDidMount() {
    Products.getAllProducts().then((res) => {
      this.setState({ data: res.data.data });
    });
  }
  render() {
    const homeslider = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 800,
      nextArrow: (
        <span className="homeslidericon right">
          <AiOutlineRight />
        </span>
      ),
      prevArrow: (
        <span className="homeslidericon left">
          <AiOutlineLeft />
        </span>
      ),
    };

    var settings = {
      dots: false,
      className: "center",
      centerMode: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      // nextArrow: <span className='slickErrow right'><AiOutlineRight /></span>,
      // prevArrow: <span className='slickErrow left'><AiOutlineLeft /></span>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="partner_page">
        <div className="bgDarkHeader">
          <Header />
        </div>

        <div className="carouselSlider">
          <div className="partner_slider_main">
            <Slider {...homeslider}>
              <div className="main_slider_home home_main_slider ">
                <div className="img_home_slier">
                  <img
                    className="d-block w-100"
                    src={slider3}
                    alt="First slide"
                  />
                </div>
                <div
                  className="home_slider_caption carousel-caption"
                  data-aos="fade-down-right"
                  data-aos-duration="1000"
                >
                  <h2 className="mt-5">
                    {" "}
                    <b>
                      <span style={{ color: "black" }}>Book</span>{" "}
                      Ulforglemmelige <br />
                      Salloon <span style={{ color: "black" }}>
                        Oplevelser
                      </span>{" "}
                      I <br />
                      Naerheden Af Dig{" "}
                    </b>{" "}
                  </h2>
                  <p>
                    Maximize the efficiency of your Salloon by <br />
                    having all your products, services, <br />
                    appointments and statistics in one place.
                  </p>
                  <div className="playStoreIcons">
                    <div>
                      <img src={applePlayStore} />
                    </div>
                    <div>
                      <img src={googleplayStore} className="ml-2" />
                    </div>
                  </div>
                  <Link className="link btn-primary" to="/signup/saloon">
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* why section starts */}
        <div className="whySectio">
          <img src={whyImge} />
          <div className="textSeciotn">
            <h2>Why should you become our partner?</h2>
            <p>
              Benefits of an online barber booking application <br />
              for customer satisfaction
            </p>
          </div>
        </div>
        {/* why section ends*/}
        {/*  */}
        <div className="container mt-1">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-6 mt-2">
              <div
                className="whyCardsContainer pt-4 pb-2 px-1"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={internetImge} alt="cardImge" />
                <h4>Increase Sales</h4>
                <p>
                  We make your salloon more visible, giving you more
                  opportunities to attract new customers and encourage existing
                  customers to return.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 mt-2">
              <div
                className="whyCardsContainer pt-4 pb-2 px-1"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={calendar} alt="cardImge" />
                <h4>More Controle</h4>
                <p>
                  We make your salloon more visible, giving you more
                  opportunities to attract new customers and encourage existing
                  customers to return.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 mt-2">
              <div
                className="whyCardsContainer pt-4 pb-2 px-1"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={groth} alt="cardImge" />
                <h4>Less Worries</h4>
                <p>
                  We make your salloon more visible, giving you more
                  opportunities to attract new customers and encourage existing
                  customers to return.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <div className="text-center">
                {/* <Link className='btnthem' to='/features'>View all Features</Link> */}
                <a href="#feature_scroll" className="btnthem">
                  View all Features
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className="bgImge  mt-4"
          style={{ backgroundImage: `url('${Path36}')` }}
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 py-5">
                <div
                  className="phoneContentContainer py-4"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h2 className="mt-3">
                    Organize <br />
                    your salloon <br />
                    services
                  </h2>{" "}
                  <br />
                  <p>
                    By listing your service offerings within the app, you can
                    manage and promote them, giving your salloon business access
                    to a much larger target market. By putting all your services
                    in one place, your customers will be able to see and access
                    them more easily.{" "}
                  </p>{" "}
                  <br />
                  <p>
                    This way, the most profitable clients will be drawn to your
                    salloon and perceive you to be the prestigious business that
                    you are. The services listed can be viewed, booked, and
                    ranked. Aside from your Salloon's visibility through the
                    service listing, getting ranked on our platform is another
                    free way to advertise your business to your target market.
                  </p>
                  <div className="text-center mt-5">
                    <Link className="btnthem d-block " to="/login">
                      Sign IN
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-md-5 py-1 d-flex align-items-center">
                <div className="phoneContainerImge py-md-5 py-1">
                  <img
                    src={GroupPhone}
                    alt="phone"
                    className="oranizesaloon"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fetaure_main" id="feature_scroll">
          <div className="container">
            <div className="feature_tilte text-center">
              <h2>Features & Integration</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <a href="#management" className="mian_managelinks">
                  <div
                    className="main_img_feat text-center"
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                  >
                    <img src={feat1} alt="" className="img-fluid" />
                    <p>Customer Management</p>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="#System" className="mian_managelinks">
                  <div
                    className="main_img_feat text-center"
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                  >
                    <img src={feat2} alt="" className="img-fluid" />
                    <p>Smart System</p>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="#Employees" className="mian_managelinks">
                  <div
                    className="main_img_feat text-center"
                    data-aos="zoom-out-left"
                    data-aos-duration="2000"
                  >
                    <img src={feat3} alt="" className="img-fluid" />
                    <p>Track Employees</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="dynamic_booking">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <div className="left_img_book">
                    <img
                      src={booking_img}
                      alt=""
                      className="img-fluid bookingimg"
                    />
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="zoom-in-down"
                  data-aos-duration="900"
                >
                  <div className="heading_bookinbg">
                    <h2>
                      Dynamic Booking & <br />
                      Business Management Solution
                    </h2>
                    <p>
                      Explore the range of features that make Salloon.com the
                      best online booking and management system for businesses
                      of any size and industry. Salloon.com offers over 60
                      custom features to help you attract new clients, nurture
                      your current ones and manage your business like a pro!
                    </p>
                    <div className="buy_btn">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                          this.props.history.push("/signup/saloon")
                        }
                      >
                        Sign Up <RiSendPlaneLine />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="customer_management" id="management">
            <div className="title_customer_manage text-center">
              <h2>
                <span>Customer</span> Management
              </h2>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  <div className="customer_manage_img text-center">
                    <img src={cs_1} alt="" className="img-fluid" />
                    <h2>Communication</h2>
                    <p>
                      Business and the customer have the opportunity to
                      communicate directly via the app. Whether there are
                      questions about the booking, services or products, Salloon
                      helps in providing answers faster and efficiently.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  <div className="customer_manage_img text-center">
                    <img src={cs_2} alt="" className="img-fluid" />
                    <h2>Offers/Free time slots</h2>
                    <p>
                      You have the opportunity to send your customers
                      notifications about offers, discounts, free
                      times/cancellation times and special events
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  <div className="customer_manage_img text-center">
                    <img src={cs_3} alt="" className="img-fluid" />
                    <h2>Receive feedback</h2>
                    <p>
                      Lift your business up with the help of ratings from your
                      customers to improve your service for existing customers
                      and build trust for new customers
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  <div className="customer_manage_img text-center">
                    <img src={cs_4} alt="" className="img-fluid" />
                    <h2>Customer Database</h2>
                    <p>
                      You are always a click away from your customers. By
                      knowing your customers, fulfilling their needs is easy by
                      sending them latest deals&offers customized specifically
                      for them.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  <div className="customer_manage_img text-center">
                    <img src={cs_5} alt="" className="img-fluid" />
                    <h2>Customer Support</h2>
                    <p>
                      Support@salloon.dk is ready to support and help you every
                      day from 9:00 to 16:00.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="try_noe">
            <div className="container">
              <div className="row" data-aos="zoom-out" data-aos-duration="2000">
                <div className="col-md-4">
                  <div className="img_try">
                    <img
                      src={mobile_try}
                      alt=""
                      className="img-fluid mobiletry"
                    />
                  </div>
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <div className="img_try_des">
                    <button
                      type="button"
                      className="btn btn-primary trynow"
                      onClick={() => this.props.history.push("/signup/saloon")}
                    >
                      TRY NOW
                    </button>
                    <img
                      src={arrow_left}
                      alt=""
                      className="img-fluid arrow_img"
                    />
                    <img
                      src={arrow_text}
                      alt=""
                      className="img-fluid arrow_text "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="smart_system" id="System">
            <div className="container">
              <div className="title_change_color text-center">
                <h2>
                  <span>Smart</span> system
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="img_smart text-center"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                  >
                    <img src={smart1} alt="" className="img-fluid" />
                    <h2>Smart Calender</h2>
                    <p>
                      Smart calendar has a simple and clear interface. It makes
                      it easy and straightforward for you to find your way
                      around.With a smart calendar, you get an overview of your
                      and your employees' bookings.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="img_smart text-center"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                  >
                    <img src={smart2} alt="" className="img-fluid" />
                    <h2>Notifications</h2>
                    <p>
                      Notification will be sent directly to your salloon as soon
                      as a booking request is received. You have the option to
                      accept or reject the booking. Unlimited number of bookings
                      is included.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="img_smart text-center"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                  >
                    <img src={smart3} alt="" className="img-fluid" />
                    <h2>Online Booking</h2>
                    <p>
                      The customer can easily and quickly book an appointment on
                      Salloon.dk or via our SALLOON app.User-friendly interface
                      that makes bookings management simple
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="img_smart text-center"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                  >
                    <img src={smart4} alt="" className="img-fluid" />
                    <h2>Marketing</h2>
                    <p>
                      Your business will be made visible through our OMNI
                      channels and therefore constantly exposed to online
                      traffic.The salloons that perform best will be highlighted
                      in search, so there will be an opportunity to achieve even
                      more exposure in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="track_employees" id="Employees">
            <div className="container">
              <div
                className="title_change_color text-center tracking_head"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2>
                  <span>Track</span> employees
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div
                    className="track_img"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <img
                      src={img_track}
                      alt=""
                      className="img-fluid trackimg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="track_data"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <div className="track_listing">
                      <h4>Performance</h4>
                      <p>
                        Keep track of all activities in your salloon. Have an
                        overview of employees' efforts, bookings, sales and work
                        schedule. Salloon offers an option for weekly work
                        schedule availability to be visible, in order to let
                        customers choose prefered employee for their booking
                        appointment
                      </p>
                    </div>
                    <div className="track_listing">
                      <h4>Economy</h4>
                      <p>
                        Ability to generate dynamic reports on a daily, weekly
                        or yearly basis and compare with historical data to
                        illuminate progress or decline on specific working days,
                        weeks and m.m.
                      </p>
                    </div>
                    <div className="track_listing">
                      <h4>Reminders</h4>
                      <p>
                        The customer has the opportunity to choose the type of
                        booking reminder when they register on the platform.
                        With SALLOON's automatic reminder system, it is possible
                        to be reminded of the booking appointment via salloon
                        notification and email.
                      </p>
                    </div>
                    <div className="track_listing">
                      <h4>Payment</h4>
                      <p>
                        Payment is settled automatically after each completed
                        booking at the store. Several forms of payment will be
                        supported in the near future so that your customers have
                        the opportunity to pay with Dankort, Visa card and
                        Mobilepay etc.
                      </p>
                    </div>
                    <div className="track_listing">
                      <h4>Schedule</h4>
                      <p>
                        Schedule is an essential part of well - organized
                        business. With Salloon, it is easy and fast to create a
                        schedule for you and your employees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="priicng_table_listng" id="pricing">
            <div className="container">
              <div className="price_head_main">
                <h3>Our PRices</h3>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="listing_price"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <div
                      className="main_head_price"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <h4>Salloon Business</h4>
                    </div>

                    <div
                      className="pricing_start"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <ul>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Smart Calendar{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Marketing{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Employees’ Performance Tracking{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Financial Reports{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Employees’ Performance Tracking{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Financial Reports{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Reminders Via Notification & Email{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> No Set – Up Fee{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Unlimited Bookings{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Customers’ Reviews{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Messenger{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Shift Schedule{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Salloon E – Shop: Products Selling
                            Through The App{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Free Customers’ Booking Reminders{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Approving And Cancelling Booking
                            Requests{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            <GoCheck /> Offers/Free Time Slots{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="price_titile ml-2">
                      <h2>
                        499DKK<sub>/mo</sub>{" "}
                      </h2>
                      <p>Excl. VAT </p>
                    </div>
                  </div>
                  <div className="price_listing_links_app">
                    <div
                      className="playStoreIcons my-5"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <div>
                        <img src={applePlayStore} />
                      </div>
                      <div>
                        <img src={googleplayStore} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <div
                    className="price_new_img"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <img
                      src={price_img}
                      alt=""
                      className="img-fluid priceimg"
                    />
                    <div className="box_image_round">
                      <div className="conten_main_pri">
                        <h3>
                          One Month <strong> Free Trial Period </strong>
                        </h3>
                        <button
                          className="btn btntry"
                          onClick={() =>
                            this.props.history.push("/signup/saloon")
                          }
                        >
                          Try For Free
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* <div className='container'>
                              <div className='row'>
                                    <div className='col-12'>
                                          <div className='slickContainer py-4'>
                                                <h2>TOP <br />
                                                      SALOONS</h2>
                                                <p>Browse the top-rated options to find the services and<br /> professionals that are perfect for you.</p>
                                          </div>
                                    </div>
                              </div>

                              {!this.props.SaloonList && <SliderPlaceHolder />}
                              {this.props.SaloonList && (
                                    <>
                                    <div className='row'>
                                          <div className='col-12'>
                                                <ProductCardList data={this.props.SaloonList} />
                                          </div>
                                    </div>
                                          <div className='row'>
                                                <div className='col-12 d-flex justify-content-center mt-5'>
                                                      <Link className='btnthem' to="/saloons" >lOAD MORE</Link>
                                                </div>
                                          </div>
                                    </>
                              )}





                        </div> */}
        {/*  */}

        {/*  */}
        {/* <section className='deluxeProducst py-3 pb-4'>
                              <div className='container deluxeProducst'>
                                    <div className='row'>
                                          <div className='col-12'>
                                                <div className='slickContainer py-4'>
                                                      <h2 className=' font-weight-bold text-uppercase'>Deluxe Producst <br /> at your Doorstep
                                                      </h2>
                                                      <p className='color-dark'>Pay in just a click and get luxurious products recommended and used by top<br /> salloon professionals delivered to your home..</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='row'> <div className='col-12'>

                                          {this.state.data && <SloneProducts data={this.state.data} />
                                                }
                                          </div>
                                    </div>

                              </div>

                        </section> */}
        {/*  */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="tryBookingHeading">
                <h2>
                  PArtner with us for the long run ! <br /> start your trial
                  today
                </h2>
                <p>Get the premium features for free for One month</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 d-flex flex-column align-self-center"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="bookingOptions">
                <div>
                  <div>
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <span>Unlimited </span> number of bookings included during
                    the trial period
                  </div>
                </div>
                <div>
                  <div>
                    <FiCheckSquare />
                  </div>
                  <div>
                    <span>All </span> of the features included
                  </div>
                </div>
                <div>
                  <div>
                    <FaLaptopCode />
                  </div>
                  <div>
                    <span>Your </span> own booking website
                  </div>
                </div>
              </div>
              <button
                className="btnsup"
                onClick={() => this.props.history.push("/signup/saloon")}
              >
                Sign up
              </button>
              <div className="textBtnImge d-flex mt-3">
                <div className="animatedImges">
                  <img
                    src={errowimge}
                    alt="sdf"
                  />
                  <img src={errorIcons} alt="sdf" />
                </div>
                {/* <img src={textBtnImge} className='w-auto' alt='Imge'/> */}
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className=" p-lg-5 ">
                <div>
                  <img
                    src={bookPhones}
                    className="w-100 bookphoneimg"
                    alt="bookPhones"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <GoSmart />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SaloonList: state.SaloonList.Top,
    categoriesList: state.categoriesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateFilters: (data) => {
    //    dispatch(ACTIONS.update_filters(data))
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PartnerHome));
