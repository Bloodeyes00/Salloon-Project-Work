import React from "react";
import { Component } from "react";
import Footer from "../../Componet/Footer/Footer";
import Header from "../../Componet/Headers/Header";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

import { FaEdit } from "react-icons/fa";
import dummy_img from "../../assets/imge/portrait-young-pretty-girl-using-mobile-phone_171337-11435.jpg";
import AuthApi from "../../api/authApi";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      file: null,
      hideImg: false,
      image: "",
      password: "",
      mag: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      image: event.target.files[0],
    });
    if (event.target.files[0]) {
      this.setState({
        hideImg: true,
      });
    }

    // this.setState({
    //   image: event.target.files[0],
    // });
  };

  componentDidMount() {
    AuthApi.getCustomerDetail().then((res) => {
      if (res.data.Error == false) {
        this.setState({ profile: res.data.Data });
      }
    });
  }

  handleClick(e) {
    // ("Hellooww world")
    this.refs.fileUploader.click();
  }
  update = () => {
    this.setState({
      msg: "",
    });

    let data;
    if (this.state.password) {
      data = {
        name: this.state.profile.name,
        email: this.state.profile.email,
        password: this.state.password,
        mobile_number: this.state.profile.mobile_number,
        Profile_Pic: this.state.image.name,
      };
    } else {
      data = {
        name: this.state.profile.name,
        email: this.state.profile.email,
        mobile_number: this.state.profile.mobile_number,
        Profile_Pic: this.state.image.name,
      };
    }
    AuthApi.updateCustomerDetail(data).then((res) => {
      // const data1 = new FormData();
      // data1.append("file", event.target.files[0]);
      // AuthApi.updateCustomerDetail(data1).then((res) => {
      //   this.setState({
      //     image: res.data.image,
      //   });
      // }
      // );
      //upload picture to server
      const data1 = new FormData();
      data1.append("file", this.state.image);
      AuthApi.updateCustomerDetail(data1).then((res) => {
        this.setState({
          image: res.data.image,
        });
      });
      if (res.data.Error == false) {
        this.setState({
          msg: "Profile Updated Successfully",
        });
      }
    });
  };

  render() {
    return (
      <>
        <div className="bgDarkHeader">
          <Header />
        </div>

        <div className="container " style={{ marginTop: "6rem" }}>
          <div className="main_profile">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body p-0">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                          <div className="main_edit_profile">
                            {this.state.profile.Profile_Pic ? (
                              <img
                                src={
                                  this.state.file
                                    ? this.state.file
                                    : `${process.env.REACT_APP_BASE_URL}/${this.state.profile.Profile_Pic}`
                                }
                                alt=""
                              />
                            ) : (
                              <img src={dummy_img} alt="Maxwell Admin" />
                            )}
                            <div
                              className="chose_img_icon"
                              onClick={this.handleClick}
                            >
                              <FaEdit />
                            </div>
                            <input
                              type="file"
                              ref="fileUploader"
                              accept="image/*"
                              name="Profile_Pic"
                              id="file"
                              style={{ display: "none" }}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>

                        <h5>{this.state.profile.name}</h5>
                        <h6>{this.state.profile.email}</h6>
                        {/* <h5 className="user-name">{this.state.data.name}</h5> */}
                        {/* <h6 className="user-email">{this.state.data.email}</h6> */}
                      </div>
                      <div className="profilelinks">
                        <div className="main_links_profile">
                          <ul>
                            {/* <li>
                                                        <a href="#"> < AiOutlineDashboard /> Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> < RiEditLine /> Edit Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> < AiOutlineDashboard /> Dashboard</a>
                                                    </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="main_title_profile_page">
                      <h6 className="mb-3">Personal Details</h6>
                      {this.state.msg ? (
                        <p
                          style={{
                            color: "green",
                            fontWeight: "600",
                            letterSpacing: "1px",
                          }}
                        >
                          {this.state.msg}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="row gutters">
                      {/* {JSON.stringify(this.state.data,null,2)} */}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="fullName">Username</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  name: e.target.value,
                                },
                              }));
                            }}
                            value={this.state.profile.name}
                            id="fullName"
                            placeholder="Enter Username"
                          />
                          <FaUserAlt />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="eMail">Email</label>
                          <input
                            value={this.state.profile.email}
                            type="email"
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  email: e.target.value,
                                },
                              }));
                            }}
                            id="eMail"
                            placeholder="Enter email ID"
                          />
                          <HiOutlineMail className="custom_font_email" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="password">Password</label>
                          <input
                            value={this.state.password}
                            type="password"
                            onChange={(e) => {
                              this.setState({
                                password: e.target.value,
                              });
                            }}
                            id="password"
                            placeholder="Enter Password"
                          />
                          <HiOutlineMail className="custom_font_email" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="phone">Phone</label>
                          <input
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  mobile_number: e.target.value,
                                },
                              }));
                            }}
                            value={this.state.profile.mobile_number}
                            type="text"
                            id="phone"
                            placeholder="Enter phone number"
                          />
                          <FiPhone />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="update_btns_profile">
                          <button
                            onClick={() => {
                              this.update();
                            }}
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Profile;
