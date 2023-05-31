import React, { Component, useState } from "react";
import Header from "../../Componet/Headers/Header";
import { Link, withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import slider1 from "../../assets/imge/slider1.gif";
import slider2 from "../../assets/imge/2090218.jpg";
import applePlayStore from "../../assets/imge/apple.png";
import googleplayStore from "../../assets/imge/google.png";
import internetImge from "../../assets/imge/newimages/Group 21293.png";
import calendar from "../../assets/imge/newimages/Group 21291.png";
import groth from "../../assets/imge/newimages/Group 21292.png";
import Path36 from "../../assets/imge/newimages/dsa.jpg";
import cartoon from "../../assets/imge/partnerimage/download.png";
import GroupPhones2 from "../../assets/imge/newimages/homesmart.png";

import CategorieCardList from "../../Componet/ProductsCards/CategoriesList/CategorieCardLists";

// service Imges

import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import storiesImges from "../../assets/imge/pexels-photo-220453.jpeg";

import "slick-carousel/slick/slick.css";
import Footer from "../../Componet/Footer/Footer";

// import "slick-carousel/slick/slick-theme.css";
import { GiRoundStar } from "react-icons/gi";
import Products from "../../api/products";
import Saloon from "../../api/saloon";

import { HiChevronRight } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import BookIMg from "../../assets/imge/newimages/Saloon-CustomerBanner-6-1920x700.png";
import ModernDatepicker from "react-modern-datepicker";
import { GoCalendar } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import TopSaloons from "../../Componet/HomePageComponents/TopSaloons";
import LandingPage from "../../api/landingPage";
import calendar11 from "../../assets/imge/calendar11.png";
import AOS from "aos";
import "aos/dist/aos.css";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      startDate: "",
      categoryData: [],
      selectedCat: "",
      searchResults: [],
      SaloonId: null,
      resultDropdown: false,
      selectDropdown: false,
      SaloonName: "",
    };
    AOS.init({
      duration: 3000,
    });
  }

  componentDidMount() {
    Products.getAllProducts().then((res) => {
      this.setState({ data: res.data.data });
    });
    LandingPage.getcategories().then((res) => {
      this.setState({
        categoryData: res.data.categories,
      });
    });
  }

  handleChange(date) {
    // this.setState({
    //       startDate: date,
    // });
  }
  searchSaloon = (e) => {
    this.setState({
      SaloonName: e.target.value,
    });
    let data = {
      Search: e.target.value,
    };
    if (e.target.value.length > 3) {
      this.setState({ resultDropdown: true });

      Saloon.bannerFilters(data).then((res) => {
        if (res.data.Error == false) {
          this.setState({
            searchResults: res.data.Data,
          });
        }
      });
    } else {
      this.setState({ resultDropdown: false });
    }
  };
  search = () => {
    let { startDate, category, SaloonId } = this.state;
    if (startDate && this.state.selectedCat) {
      this.props.history.push(
        `/saloons/${this.state.selectedCat}/${startDate}`
      );
    } else if (SaloonId) {
      this.props.history.push(`/saloon/${this.state.SaloonId._id}`);
    } else if (this.state.selectedCat) {
      this.props.history.push(`/saloons/${this.state.selectedCat}`);
    }
  };
  handleDropdown1 = () => {
    this.setState({
      selectDropdown: true,
    });
  };
  render() {
    const homeslider = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 800,
      fade: true,
    };

    var settings = {
      dots: false,
      className: "center",
      centerMode: true,
      infinite: true,
      autoplay: true,
      speed: 500,
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
      <div>
        <div className="bgDarkHeader">
          <Header className="header-top1" />
        </div>

        <div className="carouselSlider adjust_slider_main">
          <Slider {...homeslider}>
            {[1].map((data, i) => {
              return (
                <div className="main_slider_home home_main_slider " >
                  <div className="img_home_slier">
                    {i == 0 ? (
                      <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                      />
                    ) : (
                      <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                      />
                    )}
                  </div>
                  <div
                    className="home_slider_caption carousel-caption"
                    data-aos="fade-down-right"
                    data-aos-duration="1000"
                  >
                    <div className="sliderheading mb-4  ">

                      {/* <div>
                        <h1 className="slidetext" data-aos="fade-out">
                          A <span>spot</span> where all your <br />{" "}
                          <span>beauty</span> appointments <br />
                          meet{" "}
                        </h1 >
                      </div> */}
                      {/* <br />
                      <div>
                        <h1 data-aos='fade-in'>
                          {" "}
                          <div id="nextpara">
                            <span style={{ color: "black" }}>Book</span>{" "}
                            Ulforglemmelige <br />
                            Salloon{" "}
                            <span style={{ color: "black" }}>
                              Oplevelser
                            </span> I <br />
                            Naerheden Af Dig{" "}
                          </b>{" "}
                        </h1>
                      </div> */}
                    </div>

                    <div className="form_search_slider">
                      <div className="main_inpt_slider first_inp">
                        <input
                          onChange={this.searchSaloon}
                          value={this.state.SaloonName}
                          type="text"
                          className="form-control"
                          placeholder="Search your salloon"
                        />
                        <MdLocationOn />
                      </div>

                      {this.state.resultDropdown ? (
                        <div className="main_locations_suggest">
                          <ul>
                            {this.state.searchResults.length > 0 ? (
                              this.state.searchResults.map((data) => (
                                <div key={data.id}>
                                  <li
                                    onClick={() => {
                                      this.setState({
                                        SaloonId: data,
                                        SaloonName: data.Name,
                                        resultDropdown: false,
                                      });
                                    }}
                                    className="saloonData"
                                  >
                                    {data.Name}
                                  </li>
                                </div>
                              ))
                            ) : (
                              <span style={{ color: "black" }}>
                                no data found
                              </span>
                            )}
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="main_inpt_slider date_pik">
                        <ModernDatepicker
                          date={
                            this.state.startDate
                              ? this.state.startDate
                              : new Date()
                          }
                          minDate={new Date()}
                          format={"DD-MM-YYYY"}
                          showBorder
                          className="calendar11"
                          icon={calendar11}
                          onChange={(e) => {
                            this.setState({ startDate: e });
                          }}
                          placeholder={"Select Date"}
                        />
                        {/* < GoCalendar/> */}
                      </div>

                      <div className="mani_select_slider">
                        <select
                          defaultValue={"DEFAULT"}
                          onChange={(e) => {
                            this.setState({ selectedCat: e.target.value });
                          }}
                          name=""
                          id=""
                          className="form-control"
                        >
                          {/* <option  value="">Hair Cutting </option>
                                                                                    <option value="">Facial</option>
                                                                                    <option value="">Nail Poleshing </option>
                                                                                    <option value="">Face Facial </option>
                                                                                    <option value="">Hair straight </option>
                                                                                    <option value="">Threading </option>
                                                                                    <option value="">Hair Bonding </option>
                                                                                    <option value="">Triming </option> */}

                          {/* className="form-control" */}

                          {/* {this.state.categoryData && this.state.categoryData.map((data) => {
                                                                                          return <option value={data._id}>{data.title}</option>

                                                                                    })
                                                                                    } */}
                          <option value="DEFAULT" disabled>
                            Select Category
                          </option>
                          {this.state.categoryData &&
                            this.state.categoryData.map((data) => {
                              return (
                                <option value={data._id}>{data.title}</option>
                              );
                            })}
                        </select>{" "}
                        <div className="custyom_arrow_link">
                          <FaChevronDown onClick={this.handleDropdown1} />
                        </div>
                      </div>
                      <div className="search_btn_slider">
                        <button
                          onClick={() => {
                            this.search();
                          }}
                          type="button"
                          className="btn btn-primary"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    <div className="text_clnfr">
                      <p>Book your beauty appointment straight away</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="container mt-1">
          <div className="howitsword text-center">
            <p>We make bookings simple for you.</p>
            <h3>This is how it works!</h3>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-lg-4 col-sm-6 mt-2"
              data-aos="flip-up"
              data-aos-duration="1200"
            >
              <div className="whyCardsContainer">
                <img src={internetImge} alt="cardImge" />
                <h4>
                  Search for salloon <br />& services
                </h4>
                <p>
                  Enter your street name or let us find your location to
                  discover recommended salons near you
                </p>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-6 mt-2"
              data-aos="flip-up"
              data-aos-duration="1200"
            >
              <div className="whyCardsContainer">
                <img src={calendar} alt="cardImge" />
                <h4>
                  Choose Salloon <br />& Service
                </h4>
                <p>
                  We provide you with the list of top salons, services,products,
                  and reviews for easier choice.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4 col-sm-6 mt-2"
              data-aos="flip-up"
              data-aos-duration="1200"
            >
              <div className="whyCardsContainer">
                <img src={groth} alt="cardImge" />
                <h4>
                  Finalize your <br />
                  booking
                </h4>
                <p>
                  Confirm your chosen booking options, choose your paying
                  method, and start looking forward to your new upcoming beauty
                  appointment!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          className="bgImge bg_img_alignment mt-4"
          // style={{ backgroundImage: `url('${Path36}')` }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="container d-flex py-3">
            <div className="main_download_app">
                <div className="downapp">
                  <h1>Download the app</h1>
              </div>
              <p>
                An application that provides you with the list of Salloons
                nearby, salloon’s services, prices, and customer reviews, to
                make your beauty bookings easier
              </p>
              <div className="playStoreIcons">
                <div>
                  <img src={applePlayStore} />
                </div>
                <div>
                  <img src={googleplayStore} className="ml-2" />
                </div>
              </div>
              <button style={{ color: 'white' }} className="link btn btn-primary" onClick={() => {
                this.props.history.push("/signup/:user");
              }}>Sign Up Now-It's free</button>
            </div>
            <div className='main_download_app backimg ml-5 '>

            </div>
          </div>

        </div>

        {/*  */}

        <section className="categories_home">
          <div className="container">
            <div className="heading_home_categories">
              <h3>TOP CATEGORIES</h3>
              <p>
                Browse the top-rated options to find the services and <br />{" "}
                professionals that are perfect for you.
              </p>
            </div>
            <div className="categories_list_home">
              <CategorieCardList />
            </div>
          </div>
        </section>

        <TopSaloons />

        <section className="adjust_home_go">
          <div className="main_groups_photos">
            <div className="container py-5">
              <div className="row">
                <div
                  className="col-md-6"


                >
                  <div className="GoSmartImgeContainer px-5 mb-3" data-aos="fade-right"   >
                    <img
                      src={GroupPhones2}
                      alt="imge"
                      className="img-fluid smartgroupimg"
                    />
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                  <div className="goSmartDes py-3">
                    <h2 className="gosmart">
                      Go Smart – <span>Go Mobile</span>
                    </h2>
                    <p>
                      Experience the most exclusive spa and salloon services at
                      your fingertips, available for booking at your convenience
                      via our sleek new mobile app.
                    </p>
                    <h3>Business App</h3>
                    <p>
                      You will be served luxury and relaxation as we assist you
                      in making the best possible choice and arranging your
                      salloon appointment with ease. Explore the services you
                      are excited about and receive recommendations, navigation,
                      appointments, and more.
                    </p>
                    <div className="playStoreIcons my-4 responsive  ">
                      <div>
                        <img src={applePlayStore} />
                      </div>
                      <div>
                        <img src={googleplayStore} className="ml-2" />
                      </div>
                    </div>
                    <div>
                      <Link to="/aboutus" className="btn btn-primary w-50">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className='deluxeProducst py-3 pb-4'>
                              <div className='container deluxeProducst'>
                                    <div className='row'>
                                          <div className='col-12'>
                                                <div className='slickContainer py-4'>
                                                      <h2 className=' font-weight-bold text-uppercase'>Deluxe Producst <br /> at your Doorstep
                                                      </h2>
                                                      <p className='color-dark'>Pay in just a click and get luxurious products recommended and used by top<br /> salon professionals delivered to your home..</p>
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
        {/* <div className='container mt-5'>
                              <div className='row'>
                                    <div className='col-12'>
                                          <div className='tryBookingHeading'>
                                                <h2 >Try Booking System</h2>
                                                <p>Get the premium features </p>

                                          </div>
                                    </div>
                              </div>
                              <div className='row'>
                                    <div className='col-md-6 d-flex flex-column align-self-center'>
                                          <div className='bookingOptions'>
                                                <div>
                                                      <div><FaCalendarAlt /></div>
                                                      <div><span>Unlimited </span>  number of bookings included during the trial period</div>
                                                </div>
                                                <div>
                                                      <div><FiCheckSquare /></div>
                                                      <div><span>All </span>  of the features included</div>
                                                </div>
                                                <div>
                                                      <div><FaLaptopCode /></div>
                                                      <div><span>Your </span>  own booking website</div>
                                                </div>
                                          </div>
                                          <div className='textBtnImge d-flex mt-3'>
                                                <div className='animatedImges'>
                                                      <img src={errowImge} alt='sdf' />
                                                      <img src={errorIcons} alt='sdf' />
                                                </div>
                                          </div>
                                    </div>
                                    <div className='col-md-6'>
                                          <div className=' p-lg-5 '>
                                                <img src={bookPhones} className='w-100' alt="bookPhones" />

                                          </div>
                                    </div>
                              </div>
                        </div> */}
        {/*  */}
        {/* <div className='container'>
                              <div className='row'>
                                    <div className='col-12 mt-4 mb-2'>
                                          <div className='tryBookingHeading'>
                                                <h2 > One stop solution for <span>Salloon Services</span></h2>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='container-fluid'>
                              <div className='row'>
                                    {this.props.categoriesList.services && this.props.categoriesList.services.map((data, i) => {
                                          if (i < 4) {
                                                return (
                                                      <div onClick={() => { this.props.history.push(`/services_salloons_list/${data._id}`) }} className='col-sm-12 col-md-6 col-lg-3 px-0'>
                                                            <div className='searicessContainer'>
                                                                  <img src={`${process.env.REACT_APP_BASE_URL}/${data.Profile_pic}`} alt='Imge' />
                                                                  <div className='titleContainer'>
                                                                        <h1>{data.Name}</h1>
                                                                        <p>View More</p>
                                                                  </div>
                                                                  <div className='desContainerService'>
                                                                        <div>
                                                                              <h2>Trimming  & hair do</h2>
                                                                              <p>Get rid of those pesky split ends and you'll step out with your hair glossy and gleaming. Get an intricate hair-do made and serve the glamour this evening</p>
                                                                              <a href="#link">View More</a>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                )
                                          }
                                    })}

                              </div>
                        </div> */}
        {/*  */}
        <section className="storiesSeciton">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="storiesHeader">
                  <h6>STORIES THAT MATTER</h6>
                  <h2>
                    CHECK What others have to say <br></br>
                    about us!
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="storiesSlider">
                  <Slider {...settings}>
                    {[3, 3, 3, , 3, 3].map((data) => {
                      return (
                        <div className="memberContainer">
                          <div className="main_div_slider_Setting">
                            <div className="image_settnig_slider">
                              <div>
                                <div className="ImgeContianer">
                                  {" "}
                                  <img src={storiesImges} alt="imges" />
                                </div>
                              </div>
                              <div className="Details flex-grow-1 pt-2">
                                <h6>Secure Payments</h6>
                                <p>Business owner at co.chart</p>
                              </div>
                              <div>
                                <div className="ratingStars">
                                  <span>
                                    <GiRoundStar />
                                  </span>
                                  <span>
                                    <GiRoundStar />
                                  </span>
                                  <span>
                                    <GiRoundStar />
                                  </span>
                                  <span>
                                    <GiRoundStar />
                                  </span>
                                  <span>
                                    <GiRoundStar className="half_star" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="memDescription">
                              <p>
                                Great service, great quality would recommend
                                with nothing more, nothing less. Thank you MSFDN
                                and will use again in the future for sure.
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="book_appoin"
          style={{ backgroundImage: `url('${BookIMg}')` }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="book_appoin_box">
              <h3>Ready to book?</h3>
              <div className="book_app_inp">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <MdLocationOn className="inpu_icon" />
                <button className="btn">
                  <HiChevronRight />
                </button>
              </div>
              <p>Explore different salloons & services</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SaloonList: state.SaloonList.Top,
    AllSaloonList: state.SaloonList,
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
