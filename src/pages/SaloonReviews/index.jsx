import React, { Component } from "react";
import Footer from "../../Componet/Footer/Footer";
import Header from "../../Componet/Headers/Header";
import BookBg from "../../assets/imge/bookbanner.png";
import ReactStars from "react-rating-stars-component";
import moment from "moment";
import { Tabs, Tab } from "react-bootstrap";
import Overview from "../../Componet/Overview";
import Services from "../../Componet/Services";
import Products from "../../Componet/Products";
import Reviews from "../../Componet/Reviews";
import map_aside from "../../assets/imge/map_aside.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiTimeFill } from "react-icons/ri";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Api from "../../api/landingPage";
import PlaceHolder from "../../Componet/PlaceHolder";
import stf_img from "../../assets/imge/newimages/stf_img.png";
import noImage from "../../assets/imge/newimages/noimage.jpg";
import ReactPlaceholder from "react-placeholder";
import BookAppointment from "../BookAppointment/index";
import { withRouter } from "react-router-dom";
import StaffMember from "../../Componet/StaffMember";
import SalonDetailPhotos from "../../Componet/SalonDetailPhotos";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import logo_salo from "../../assets/imge/newimages/haricop.png";
import { GoCalendar } from "react-icons/go";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/imge/778.png";
import whyImge from "../../assets/imge/Path 35.png";
import slider2 from "../../assets/imge/778.png";
import applePlayStore from "../../assets/imge/apple.png";
import googleplayStore from "../../assets/imge/google.png";
import { Link } from "react-router-dom";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";
import modal_img from "../../assets/imge/newimages/pexels-photo-220453.png";

import { AiFillCloseSquare } from "react-icons/ai";
import modalimg1 from "../../assets/imge/newimages/hair-styling-processes-1080x675.png";
import modalimg2 from "../../assets/imge/newimages/unnamed (1).png";
import modalimg3 from "../../assets/imge/newimages/expocosmetica-1314554_640.png";
import WizardFrom from "../../Componet/WizardFrom";
import review_img from "../../assets/imge/Ellipse6.png"
import { GrFormClose } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import StaffDetail from "../../api/services";
import Saloon from "../../api/saloon";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class SaloonReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      product: [],
      Staff: [],
      apiLoader: true,
      bookNow: false,
      allData: {},
      Reviews: [],
      activeIndex: null,
      checked: false,
      show: false,
      showmodal: false,
      staff: {},
      reserve_id: null,
      selectionStaff: false,
      like: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.getSaloonDetail();
  }
  getSaloonDetail = () => {
    let { slug } = this.props.match.params;
    // alert(slug)

    Api.saloonDetails(slug).then((res) => {
      if (res.data.Error == false) {
        this.setState({
          allData: res.data,
          data: res.data.Saloon,
          product: res.data.Products,
          Staff: res.data.Staff,
          Reviews: res.data.Reviews,
          apiLoader: false,
        });
      }
    });
    if (localStorage.getItem("token")) {
      this.props.CustomerDetail.FavouriteSaloons &&
        this.props.CustomerDetail.FavouriteSaloons.map((data) => {
          if (data == slug) {
            this.setState({
              like: true,
            });
          }
        });
    }
  };
  setActive = (index) => {
    this.setState({ activeIndex: index });
  };

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleCloseModal = () => {
    this.setState({ showmodal: false });
  };

  handleShow(id) {
    let data = {
      id: id,
    };
    StaffDetail.getStaffDetail(data).then((res) => {
      if (res.data.Error == false) {
        this.setState({
          staff: res.data.Data,
        });
        this.setState({ show: true });
      }
    });
  }

  handleShowModal = () => {
    this.setState({ showmodal: true, checked: !this.state.checked });
  };

  handleShowModalOne = async () => {
    localStorage.setItem("saloon", this.props.match.params.slug);
    let check = await localStorage.getItem("token");
    // (check,"here")
    if (check) {
      this.setState({
        showmodal: true,
        selectionStaff: false,
      });
    } else {
      this.props.history.push("/login");
    }
  };

  ShowModalReserve = (staff) => {
    this.setState({ showmodal: true, reserve_id: staff, selectionStaff: true });
  };

 

  follow = () => {
    let data = {
      Saloon_Id: this.state.data._id,
    };
    Saloon.addfavouritesaloon(data).then((res) => {
      if (res.data.Error == false) {
        this.setState({
          like: !this.state.like,
        });
      }
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: (
        <span className="slickErrow right">
          <AiOutlineRight />
        </span>
      ),
      prevArrow: (
        <span className="slickErrow left">
          <AiOutlineLeft />
        </span>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const content = this.state.checked ? (
      <div className="main_booknow_btn">
        <div className="container">
          <div className="main_booked_btn">
            <div className="text_book_btn">
              <h3>Looks Unisex Saloon</h3>
              <p>1 Selected Service</p>
            </div>
            <div className="book_now_btn">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleShowModal}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <>
        <div className="bgDarkHeader">
          <Header />
          {content}
        </div>

        <div className="main_overviews_page">
          {/* <div className="carouselSlider">
            <Carousel interval={100000}>
              {this.state.data.Photos &&
                this.state.data.Photos.map((data) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={`${process.env.REACT_APP_BASE_URL}/${data}`}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        {/* <div className="status_salons_btn">
                                                <button type="button" className="btn">OPEN</button>
                                            </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div> */}
          <div className="container" style={{ marginTop: 130 }}>
            <div className="saloons_logo">
              <div className="salon_img_logo">
                <div className="log_content">
                  {this.state.data.Profile_Pic ? (
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/${this.state.data.Profile_Pic}`}
                      alt="profile pic"
                      className="img-fluid"
                    />
                  ) : (
                    <img src={noImage} alt="noimage" />
                  )}
                </div>
                <div className="logo_content">
                  <h3>{this.state.data.Name}</h3>
                  <h5>
                    {this.state.data.Address && this.state.data.Address.Address}
                  </h5>
                  <div className="ratings_main">
                    {[1, 1, 1, 1, 1].map((dat, i) => {
                      if (i < this.state.data.Rating) {
                        return <AiFillStar />;
                      }
                    })}
                    {[1, 1, 1, 1, 1].map((dat, i) => {
                      if (i < 5 - this.state.data.Rating) {
                        return <AiFillStar className="half_fill" />;
                      }
                    })}
                    <p>({this.state.data.Reviews})</p>
                  </div>
                </div>
              </div>

              <div className="salon_status">
                {localStorage.getItem("token") ? (
                  <button
                    onClick={() => {
                      this.follow();
                    }}
                    type="button"
                    className="btn"
                  >
                    {" "}
                    {this.state.like ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )}{" "}
                    Following{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.history.push("/login");
                    }}
                    type="button"
                    className="btn"
                  >
                    {" "}
                    <AiOutlineHeart /> Following{" "}
                  </button>
                )}
                <button
                  type="button"
                  className="btn"
                  onClick={this.handleShowModalOne}
                >
                  {" "}
                  <GoCalendar /> Book Now{" "}
                </button>
              </div>
            </div>
          </div>

          {!this.state.bookNow && (
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="top_staff_slider mb-4">
                    {/* <Slider {...staffSlider}> */}
                    <Slider {...settings}>
                      {this.state.allData.Staff &&
                        this.state.allData.Staff.map((data) => {
                          return (
                            <div className="main_staf_top_list" >
                              <div className="staff_member">
                                {data.Photos[0] ? (
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}/${data.Photos[0]}`}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                      this.props.history.push(
                                        `/staff-detail/${data._id}`
                                      );
                                    }} />
                                ) : (
                                  <img src={noImage} alt="noimage" />
                                )}
                                <div className="staff_ratig">
                                  <AiFillStar />
                                  <p>{data.Rating}</p>
                                </div>
                              </div>
                              <div className="staf_name">
                                <h3>{data.Name}</h3>
                                <h4>
                                  {data.Designation && data.Designation.title}
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                    </Slider>
                  </div>

                  <div className="main_tabs_buttons">
                    <a
                      href="#overview"
                      className={this.state.activeIndex === 0 ? "active" : ""}
                      onClick={() => this.setActive(0)}
                    >
                      Info
                    </a>
                    <a
                      href="#services"
                      className={this.state.activeIndex === 1 ? "active" : ""}
                      onClick={() => this.setActive(1)}
                    >
                      Services
                    </a>
                    <a
                      href="#products"
                      className={this.state.activeIndex === 2 ? "active" : ""}
                      onClick={() => this.setActive(2)}
                    >
                      Products
                    </a>
                    <a
                      href="#staff"
                      className={this.state.activeIndex === 3 ? "active" : ""}
                      onClick={() => this.setActive(3)}
                    >
                      Staff
                    </a>
                    <a
                      href="#reviews"
                      className={this.state.activeIndex === 4 ? "active" : ""}
                      onClick={() => this.setActive(4)}
                    >
                      Reviews
                    </a>
                    <a
                      href="#photos"
                      className={this.state.activeIndex === 5 ? "active" : ""}
                      onClick={() => this.setActive(5)}
                    >
                      Photos
                    </a>
                  </div>
                  <div className="review_tabs">
                    {this.state.apiLoader && (
                      <>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                      </>
                    )}
                    {!this.state.apiLoader && (
                      <div id="overview">
                        <Overview data={this.state.data} />
                      </div>
                    )}

                    {this.state.apiLoader && (
                      <>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                      </>
                    )}
                    {!this.state.apiLoader && (
                      <div id="services">
                        {" "}
                        <Services
                          data={
                            this.state.allData.Services &&
                            this.state.allData.Services
                          }
                          checked={this.state.checked}
                          handleChange={this.handleChange}
                          noImage={noImage}
                        />{" "}
                      </div>
                    )}

                    {this.state.apiLoader && (
                      <>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                      </>
                    )}
                    {!this.state.apiLoader && (
                      <div id="products">
                        <Products
                          data={
                            this.state.allData.Products &&
                            this.state.allData.Products
                          }
                        />
                      </div>
                    )}

                    {this.state.apiLoader && (
                      <>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                      </>
                    )}
                    {!this.state.apiLoader && (
                      <div id="staff">
                        <StaffMember
                          data={
                            this.state.allData.Staff && this.state.allData.Staff
                          }
                          show={this.state.show}
                          handleShow={this.handleShow}
                        />
                      </div>
                    )}

                    {this.state.apiLoader && (
                      <>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                        <div className="bg-white p-3 ">
                          <PlaceHolder />
                        </div>
                      </>
                    )}
                    {!this.state.apiLoader && (
                      <div id="reviews">
                        {/* <Reviews saloone={true} Reviews={this.state.Reviews} dataId={this.state.data._id} /> */}

                        <div className="pro_title">
                          <h3>Reviews</h3>
                          <div className="select_sorting_main">
                            <select
                              name=""
                              id=""
                              className="custom_select_list"
                            >
                              <option value="">Sort by</option>
                              <option value="">Worst to highest</option>
                              <option value="">Highest to lowest</option>
                            </select>
                            <FiChevronDown />
                          </div>
                        </div>

                        <div className="main_listing_reviews">
                          {this.state.allData.Reviews &&
                            this.state.allData.Reviews.map((data) => {
                              return (
                                <div className="reviws_listing">
                                  <div className="revoew_top_titles">
                                    <div className="review_img">
                                      <img
                                        src={review_img}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="review_title_img">
                                      <div className="review_name">
                                        <h2 className="mb-0">
                                          {data.User.name}
                                        </h2>
                                        <div className="ratings_main">
                                          {[1, 1, 1, 1, 1].map((dat, i) => {
                                            if (i < data.Rating) {
                                              return <AiFillStar />;
                                            }
                                          })}
                                          {[1, 1, 1, 1, 1].map((dat, i) => {
                                            if (i < 5 - data.Rating) {
                                              return (
                                                <AiFillStar className="half_fill" />
                                              );
                                            }
                                          })}
                                          <p>{data.Rating}</p>
                                        </div>
                                      </div>
                                      <div className="review_date text-center">
                                        <p>
                                          {moment(data.date).format(
                                            "Do MMM YYYY"
                                          )}{" "}
                                          <br />{" "}
                                          {moment(data.date).format("HH:mm A")}{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="review_des">
                                    <p>{data.Description}</p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {!this.state.apiLoader && (
                      <div id="photos">
                        <SalonDetailPhotos
                          data={this.state.data}
                          noImage={noImage}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {this.state.apiLoader && (
                  <div className="col-md-4">
                    <div className="bg-white shadow rounded p-3 mt-4">
                      <PlaceHolder />
                      <br></br>
                      <PlaceHolder />
                      <br></br>
                      <PlaceHolder />
                      <br></br>
                    </div>
                    <div className="bg-white shadow rounded p-3 mt-4">
                      <PlaceHolder />
                    </div>
                    <div className="bg-white shadow rounded p-3 mt-4">
                      <PlaceHolder />
                    </div>
                  </div>
                )}
                {!this.state.apiLoader && (
                  <div className="col-md-4">
                    <div className="aside_location">
                      {/* <div className="map_image">
                                                <img src={map_aside} alt="" className="img-fluid" />
                                            </div>
                                            <div className="booked_appointment_btn mt-2"

                                            >
                                                {localStorage.getItem("token") == null ?
                                                    (<button onClick={() => { this.props.history.push('/login') }} type="button" className="btn text-center w-100 bg-white shadow text-primary">   Login To Book Appointment</button>) :
                                                    (<button onClick={() => { this.setState({ bookNow: true }) }} type="button" className="btn text-center w-100 bg-white shadow text-primary"> < RiTimeFill /> Book Appointment</button>)
                                                }


                                            </div> */}

                      <div className="deals_side">
                        <div className="heading_aside">
                          <h3>Deals & Offers</h3>
                        </div>
                        <div className="aside_box_listing">
                          {this.state.allData.Coupons &&
                            this.state.allData.Coupons.map((data) => {
                              return (
                                <div className="deal_box_main">
                                  <div className="deal_off_name">
                                    <div className="deal_name">
                                      <p>Deal</p>
                                      <h4>#{data.Coupon_code}</h4>
                                    </div>
                                    <div className="deal_off">
                                      <h2>
                                        {data.Percentage}%
                                        <br /> Off
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="deal_detail_main">
                                    <div className="deal_detail">
                                      {/* <h3>
                                        {data.Category &&
                                          data.Category.replace("_", " ")}
                                      </h3> */}
                                      <h2>{data.Coupon_name}</h2>
                                    </div>
                                    <div className="deal_status">
                                      <button type="button" className="btn">
                                        {data.Category}
                                      </button>
                                    </div>
                                  </div>
                                  <div className="deal_price_main">
                                    <div className="price_main">
                                      <p>Price</p>
                                      <h4>
                                        320$ <span>400$</span>
                                      </h4>
                                    </div>
                                    <div className="vali_in_deal">
                                      <p>
                                        {" "}
                                        <RiCheckboxCircleFill /> Valid only
                                      </p>
                                      <h3>
                                        {moment(data.End_Date).format(
                                          "Do MMM YYYY"
                                        )}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          )}
          {!this.state.apiLoader && this.state.bookNow && (
            <BookAppointment data={this.state.allData} />
          )}

          <Footer />
        </div>

        {/* Modal */}

        <Modal
          size="lg"
          show={this.state.show}
          className="custom_modal"
          onHide={this.handleClose}
        >
          <Modal.Body>
            <div className="top_modal_head">
              <div className="main_top_moda_img">
                <div className="img_top_modl">
                  <img src={modal_img} alt="" className="img-fluid" />
                  <div className="top_modal_text">
                    <h3>{this.state.staff.Name}</h3>
                    <p>
                      {this.state.staff.Designation &&
                        this.state.staff.Designation.title}
                    </p>
                  </div>
                </div>
                <div className="top_modal_img_button">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      this.ShowModalReserve(this.state.staff);
                    }}
                  >
                    Reserve
                  </button>
                </div>
                <div className="close_icon_modal" onClick={this.handleClose}>
                  <AiFillCloseSquare />
                </div>
              </div>
              <div className="related_staff_img">
                {this.state.staff.Photos &&
                  this.state.staff.Photos.map((data) => {
                    return (
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/${data}`}
                        alt="logo"
                        className="img-fluid"
                      />
                    );
                  })}
              </div>
            </div>
            <div className="reviews_modal">
              <div className="reviews_list_modal">
                {!this.state.apiLoader && (
                  <div id="reviews">
                    <div className="pro_title">
                      <h3>Ratings and reviews</h3>
                      <div className="select_sorting_main">
                        <select name="" id="" className="custom_select_list">
                          <option value="">Sort by</option>
                          <option value="">Worst to highest</option>
                          <option value="">Highest to lowest</option>
                        </select>
                        <FiChevronDown />
                      </div>
                    </div>

                    <div className="main_listing_reviews">
                      <div className="reviws_listing">
                        <div className="revoew_top_titles">
                          <div className="review_img">
                            <img
                              src={review_img}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="review_title_img">
                            <div className="review_name">
                              <h2 className="mb-0">Kylie James</h2>
                              <div>
                                <ReactStars
                                  count={5}
                                  edit={false}
                                  size={26}
                                  activeColor="#F9D63E"
                                  isHalf={true}
                                />
                              </div>
                            </div>
                            <div className="review_date text-center">
                              <p>
                                15th May 2020 <br /> 02:26 PM{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review_des">
                          <p>
                            Fast shipping & excellent customer service. I had an
                            issue with my order them they replied quickly. This
                            is a perfect starting message{" "}
                          </p>
                        </div>
                      </div>
                      <div className="reviws_listing">
                        <div className="revoew_top_titles">
                          <div className="review_img">
                            <img
                              src={review_img}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="review_title_img">
                            <div className="review_name">
                              <h2 className="mb-0">Kylie James</h2>
                              <div>
                                <ReactStars
                                  count={5}
                                  edit={false}
                                  size={26}
                                  activeColor="#F9D63E"
                                  isHalf={true}
                                />
                              </div>
                            </div>
                            <div className="review_date text-center">
                              <p>
                                15th May 2020 <br /> 02:26 PM{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review_des">
                          <p>
                            Fast shipping & excellent customer service. I had an
                            issue with my order them they replied quickly. This
                            is a perfect starting message{" "}
                          </p>
                        </div>
                      </div>
                      <div className="reviws_listing">
                        <div className="revoew_top_titles">
                          <div className="review_img">
                            <img
                              src={review_img}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="review_title_img">
                            <div className="review_name">
                              <h2 className="mb-0">Kylie James</h2>
                              <div>
                                <ReactStars
                                  count={5}
                                  edit={false}
                                  size={26}
                                  activeColor="#F9D63E"
                                  isHalf={true}
                                />
                              </div>
                            </div>
                            <div className="review_date text-center">
                              <p>
                                15th May 2020 <br /> 02:26 PM{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review_des">
                          <p>
                            Fast shipping & excellent customer service. I had an
                            issue with my order them they replied quickly. This
                            is a perfect starting message{" "}
                          </p>
                        </div>
                      </div>
                      <div className="reviws_listing">
                        <div className="revoew_top_titles">
                          <div className="review_img">
                            <img
                              src={review_img}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="review_title_img">
                            <div className="review_name">
                              <h2 className="mb-0">Kylie James</h2>
                              <div>
                                <ReactStars
                                  count={5}
                                  edit={false}
                                  size={26}
                                  activeColor="#F9D63E"
                                  isHalf={true}
                                />
                              </div>
                            </div>
                            <div className="review_date text-center">
                              <p>
                                15th May 2020 <br /> 02:26 PM{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review_des">
                          <p>
                            Fast shipping & excellent customer service. I had an
                            issue with my order them they replied quickly. This
                            is a perfect starting message{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={this.state.showmodal}
          className="custom_modal_tabed"
          onHide={this.handleCloseModal}
        >
          <Modal.Body>
            <div className="main_tabbed_modal">
              <WizardFrom
                selectionStaff={this.state.selectionStaff}
                reserve_id={this.state.reserve_id}
                allData={this.state.allData}
              />
            </div>
            <div className="close_icon_modal" onClick={this.handleCloseModal}>
              <GrFormClose />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProductsFilters: state.ProductsFilters,
    CustomerDetail: state.CustomerDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateFilters: (data) => {
    //     dispatch(ACTIONS.update_filters(data))
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SaloonReviews));
