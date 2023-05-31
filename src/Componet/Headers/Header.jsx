import React, { Component, useState, useEffect } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import logo from "../../assets/imge/navicon.png";
import { Link, withRouter } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { connect } from "react-redux";
import ACTIONS from "../../store/actions/index";
import { CgSearch } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { scroller } from "react-scroll";
// let token = localStorage.getItem('admin_token')
import Sticky from "react-sticky-el";
import login_img from "../../assets/imge/newimages/dummy-image.jpg";
import { GoCalendar } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useEarthoOne } from "@eartho/one-client-react";
import AuthApi from "../../api/authApi";
function Header(props) {
  const [profile, setProfile] = useState({});
  const [ShowSearch, setShowSearch] = useState(false);
  const [Show, setShow] = useState();
  const [scrollPos, setscrollPos] = useState(0);
  const [LoginToken, setLoginToken] = useState("");
  const [loginDropdown, setloginDropdown] = useState(false);

  const getallData = async () => {
    await AuthApi.getCustomerDetail().then((res) => {
      setProfile(res.data.Data);
    });
  };

  useEffect(() => {
    getallData();
  }, []);

  const scrollToFeatures = () => {
    scroller.scrollTo("fetaure_main");
  };

  const scrollToApp = () => {
    scroller.scrollTo("main_groups_photos");
  };

  const scrollToSection = () => {
    scroller.scrollTo("priicng_table_listng");
  };

  const logout1 = () => {
    localStorage.removeItem("token");
    logout();
    props.history.push("/login");
  };
  const handleScroll = () => {
    setscrollPos = document.body.getBoundingClientRect().top;
    setShow = document.body.getBoundingClientRect().top < -100;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("props from fav:", logout1);
  }, []);
  useEffect(() => {
    window.removeEventListener('scroll', handleScroll)
  }, [])
  const { logout } = useEarthoOne();

  const handleScroll1 = () => {
    const scrollCheck = window.scrollY > 40
    if (scrollCheck !== Show) {
      setShow(scrollCheck)
      console.log("scroll is ",scrollCheck)
    }
  }
  useEffect(() => {
    document.addEventListener("scroll",handleScroll1 )
  })

  return (
    <div>
      <div className="stickey_nav-fixed">
        <div className="TopHeader">
          <div className="container-sticky">
            <div className="row ">
              <div className="col-12 pl-3px">
                <Navbar
                  collapseOnSelect
                  expand="lg"
                  id="Navdiv"
                  className={Show ? "hidden" : "hidden"}
                  variant="dark"
                  fixed="top"
                >
                  <Container>
                    <Navbar.Brand>
                      <Link to="/">
                        <img src={logo} className="logo" type="button" />
                      </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                      className="btn btn-primary"
                      aria-controls="responsive-navbar-nav "
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="m-auto main_link_navs">
                        <div className="custom_dropdown_header ">
                          {localStorage.getItem("token") ? (
                            ""
                          ) : (
                            <>
                              <Link to="/partner-home" className="nav-link">
                                For Partners
                              </Link>
                              <div className="dropdown_links_custom ">
                                <Link
                                  to="/partner-home"
                                  onClick={scrollToFeatures}
                                >
                                  Feature
                                </Link>
                                <Link to="/partner-home" onClick={scrollToApp}>
                                  Saloon App
                                </Link>
                                <Link
                                  to="/partner-home"
                                  onClick={scrollToSection}
                                >
                                  Pricing
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                        {localStorage.getItem("token") ? (
                          ""
                        ) : (
                          <Link className="nav-link" to="/aboutus">
                            About Us
                          </Link>
                        )}
                        {localStorage.getItem("token") && (
                          <Link className="nav-link" to="/appointments">
                            Appointments
                          </Link>
                        )}
                        {localStorage.getItem("token") && (
                          <Link className="nav-link" to="/favourites">
                            {" "}
                            Favourite Salloons
                          </Link>
                        )}
                        <Link className="nav-link" to="/contactus">
                          Contact us
                        </Link>
                      </Nav>
                      {localStorage.getItem("token") ? (
                        <Nav className="main_ot_links">
                          <div className="mr-4 mt-2" style={{ fontSize: 20 }}>
                            <SiMessenger />
                          </div>
                          <div className="otherLinks">
                            <div className="login_btns">
                              <div className="after_login_dropdown">
                                <div
                                  className={`${
                                    loginDropdown ? "rotate_icon" : ""
                                  } login_ig`}
                                  onClick={() =>
                                    setloginDropdown(!loginDropdown)
                                  }
                                >
                                  {profile && profile?.Profile_Pic ? (
                                    <img
                                      src={`${process.env.REACT_APP_BASE_URL}/${profile?.Profile_Pic}`}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  ) : (
                                    <img
                                      src={login_img}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  )}
                                  <div className="name_img">
                                    {props.CustomerDetail ? (
                                      <p>{props.CustomerDetail.name}</p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  {loginDropdown ? (
                                    <div className="dropdown_links_after_logni">
                                      <NavDropdown.Item >
                                        {" "}
                                        <Link to="/profile">
                                          {" "}
                                          <FaUserCircle /> My Account
                                        </Link>{" "}
                                      </NavDropdown.Item>
                                      {/* <NavDropdown.Item href="#"> <Link to="/appointments"> <GoCalendar /> My Bookings</Link> </NavDropdown.Item> */}
                                      {/* <NavDropdown.Item href="#"> <Link to="/favourites"> <MdFavoriteBorder /> Favrouite Saloons</Link> </NavDropdown.Item> */}
                                      <NavDropdown.Item >
                                        {" "}
                                        <Link onClick={logout1}>
                                          {" "}
                                          <BiLogOut /> Logout
                                        </Link>{" "}
                                      </NavDropdown.Item>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                              {/* <NavDropdown title="name" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#"> <Link to="/profile">My Account</Link> </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> <Link to="/appointments">My Bookings</Link> </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> <Link to="/login">Favrouite Saloons</Link> </NavDropdown.Item>
                              </NavDropdown> */}
                            </div>
                          </div>
                        </Nav>
                      ) : (
                        <Nav className="main_ot_links ">
                          <div className="otherLinks">
                            <div className="login_btns">
                              <Link to="/select-role" className="signup_link">
                                Sign Up
                              </Link>
                              <NavDropdown
                                title="Login"
                                id="collasible-nav-dropdown"
                              >
                                <NavDropdown.Item >
                                  {" "}
                                  <Link to="/login">For Customers</Link>{" "}
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                  {" "}
                                  <Link to="/login">For Partners</Link>{" "}
                                </NavDropdown.Item>
                              </NavDropdown>
                            </div>
                          </div>
                        </Nav>
                      )}

                      <Nav className=""></Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>

          <div className="main_search_form">
            <div
              className={`${ShowSearch ? "show_search_form" : ""} search_form `}
            >
              <input
                type="text"
                placeholder="Search for services and salons near me"
                autoFocus
              />
              <button type="button" className="search_btn">
                {" "}
                <CgSearch />
              </button>
              <div
                className="close_search_icon"
                onClick={() => setShowSearch(!ShowSearch)}
              >
                <IoMdClose />
              </div>
            </div>
          </div>
        </div>
        {/* </Sticky> */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.Cart,
    CustomerDetail: state.CustomerDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addtoCart: (data) => {
         dispatch(ACTIONS.addCart(data))
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

