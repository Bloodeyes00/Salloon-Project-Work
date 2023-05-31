import React, { Component } from "react";
import home_icon from "../../assets/imge/newimages/Group 20923.png";
import { FiChevronLeft } from "react-icons/fi";
import google_mig from "../../assets/imge/newimages/google-logo.png";
import fb_mig from "../../assets/imge/newimages/facebook_icon_130940.png";
import ip_mig from "../../assets/imge/newimages/download.png";
import { Link } from "react-router-dom";
import loc_blue from "../../assets/imge/newimages/Repeat Grid 1.png";
import loca_blue2 from "../../assets/imge/newimages/blueloca.png";
import loca_blue3 from "../../assets/imge/newimages/blue_clock.png";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import Saloon from "../../api/saloon";
import moment from "moment";

class InfoTab extends Component {
  state = {
    addcustomer: false,
    customers: [],
    name: "",
    email: "",
    phone: "",
    customerBtn: false,
    voucherCode: "",
    msg: "",
    codeValid: this.props.bookingDetail.Discounted_Price ? true : false,
    percentage: null,
  };

  addCustomer = () => {
    let { name, email, phone } = this.state;
    if (!name || !phone || !email) {
      // toast.error("All Fields Are Required")
    } else {
      let data = {
        name: name,
        email: email,
        mobile_number: phone,
      };
      //   API.adminusersignup(data).then((res)=>{
      //       if(res.data.Error==false){
      //          this.props.setBookingDetail("User",res.data.data._id)
      //          this.setState({
      //              customerBtn:true
      //          })

      //       }else if(res.data.Error==true){
      //         toast.error(res.data.msg)
      //         this.setState({
      //             customerBtn:false
      //         })
      //       }
      //   })
    }
  };
  Increment = (id) => {
    let a = this.props.bookingDetail.Products.map((data) => {
      if (data._id == id) {
        data.Quantity = data.Quantity + 1;
      }
      return data;
    });
    this.props.setBookingDetail("Products", a);
    if (this.state.codeValid) {
      this.calDiscount(this.state.percentage);
    }
  };
  Decrement = (id) => {
    let a = this.props.bookingDetail.Products.map((data) => {
      if (data._id == id) {
        data.Quantity = data.Quantity - 1;
      }
      return data;
    });
    this.props.setBookingDetail("Products", a);
    if (this.state.codeValid) {
      this.calDiscount(this.state.percentage);
    }
  };
  verifyCode = async () => {
    let sal = localStorage.getItem("saloon");
    this.setState({
      msg: "",
    });

    let data = {
      Coupon_code: this.state.voucherCode,
      Saloon_id: sal,
    };
    Saloon.checkCoupon(data)
      .then((res) => {
        if (res.data.Error == false) {
          this.setState({
            msg: "Code is Valid",
            codeValid: true,
            percentage: res.data.Data.Percentage,
          });
          this.calDiscount(res.data.Data.Percentage);
        } else {
          this.setState({
            msg: "Code is invalid",
            codeValid: false,
          });
          this.props.setBookingDetail("Discounted_Price", "");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  calDiscount = (per) => {
    let productsPrice = 0;
    this.props.bookingDetail.Products &&
      this.props.bookingDetail.Products.filter((data) => {
        return (productsPrice += parseInt(data.Price) * data.Quantity);
      });
    let totalprice =
      parseInt(this.props.bookingDetail.Services.Price) + productsPrice;
    let percentage = per;
    let dicountPrice = (totalprice * percentage) / 100;
    let dicounted_Price = totalprice - dicountPrice;
    this.props.setBookingDetail("Discounted_Price", dicounted_Price);
  };
  render() {
    let productsPrice = 0;
    this.props.bookingDetail.Products &&
      this.props.bookingDetail.Products.filter((data) => {
        return (productsPrice += parseInt(data.Price) * data.Quantity);
      });
    return (
      <>
        <div className="fourth_tab">
          <div className="head_backarrow">
            <button
              type="button"
              className="btn"
              onClick={this.props.changeTab}
            >
              {" "}
              <FiChevronLeft /> <img src={home_icon} alt="" />{" "}
            </button>
          </div>
          <div className="info_main_tabb">
            <div className="row m-0">
              <div className="col-md-8">
                <div className="main_heading_info">
                  <h3>Sign up to Continue</h3>
                </div>
                <div className="not_login_box">
                  <div className="not_login_boxes">
                    <button type="button" className="btn btn-block btn-primary">
                      Sign up with email
                    </button>
                    <button
                      type="button"
                      className="btn btn-block btn-transparent"
                    >
                      {" "}
                      <img src={google_mig} alt="" className="img-fluid" />{" "}
                      Connect with Google
                    </button>
                    <button
                      type="button"
                      className="btn btn-block btn-transparent"
                    >
                      {" "}
                      <img src={fb_mig} alt="" className="img-fluid" /> Sign up
                      with email
                    </button>
                    <button type="button" className="btn btn-block btn-dark">
                      {" "}
                      <img src={ip_mig} alt="" className="img-fluid" /> Sign up
                      with email
                    </button>
                  </div>
                  <div className="already_acc">
                    <h3>Already have an account?</h3>
                    <Link to="/login">Log In Now</Link>
                  </div>
                </div>
                <div className="loged_in_box">
                  <div className="fields_book">
                    <label htmlFor="">Name</label>
                    <input
                      name="name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      value={this.state.name}
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="main_field">
                    <label htmlFor="">Phone</label>
                    <input
                      name="phone"
                      value={this.state.phone}
                      onChange={(e) => {
                        this.setState({ phone: e.target.value });
                      }}
                      type="number"
                      className="form-control"
                      placeholder="+9456-865-987"
                    />
                  </div>
                  <div className="main_field">
                    <label htmlFor="">Email</label>
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      type="email"
                      className="form-control"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="add_customer_btn">
                    <button
                      disabled={this.state.customerBtn}
                      onClick={this.addCustomer}
                      type="button"
                      className="btn btn-primary"
                    >
                      {" "}
                      Login{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="main_added_summary">
                  <div className="box_detail_show">
                    <div className="heade_dtl_sho">
                      <h3>Summary</h3>
                    </div>
                    <div className="top_text">
                      <p>
                        Cancellation must be made 24 hours before reservation.
                        For late cancellations and uncancelled times company has
                        right to collect 50& of actual price
                      </p>
                    </div>
                    <div className="location_texte">
                      <h3>Looks unisex Saloon</h3>
                      <div className="location_addresses">
                        <p>
                          {" "}
                          <img src={loc_blue} alt="" />{" "}
                          {this.props.allData.Saloon.Address}
                        </p>
                        <p>
                          {" "}
                          <img src={loca_blue2} alt="" /> 12km away
                        </p>
                        <p>
                          {" "}
                          <img src={loca_blue3} alt="" />{" "}
                          {this.props.bookingDetail.Time_Slot}{" "}
                          {moment(
                            this.props.bookingDetail.Appointment_Date
                          ).format("Do MMM YYYY")}
                        </p>
                      </div>
                    </div>
                    <div className="serv_price">
                      <div className="head_serv_pric">
                        <h3>Services</h3>
                        <h3>Price</h3>
                      </div>

                      {this.props.bookingDetail.Services ? (
                        <div className="mani_serv_price">
                          <p>
                            {this.props.bookingDetail.Services.Name},{" "}
                            {this.props.bookingDetail.Services.Time_required}{" "}
                            min
                          </p>
                          <p>
                            {" "}
                            <b>{this.props.bookingDetail.Services.Price}</b>
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="service_price_main">
                      <div className="main_alignment_serv_div">
                        <div className="add-one">
                          {this.props.bookingDetail.Products.length > 0 ? (
                            <h3>Add-ons</h3>
                          ) : (
                            ""
                          )}

                          {this.props.bookingDetail.Products &&
                            this.props.bookingDetail.Products.map((data) => {
                              return <p>{data.Name}</p>;
                            })}
                        </div>
                        <div className="qauntity_main">
                          {this.props.bookingDetail.Products.length > 0 ? (
                            <h3>Quantity</h3>
                          ) : (
                            ""
                          )}

                          {this.props.bookingDetail.Products &&
                            this.props.bookingDetail.Products.map((data) => {
                              return (
                                <p>
                                  {" "}
                                  <AiFillMinusCircle
                                    onClick={() => this.Decrement(data._id)}
                                  />{" "}
                                  {data.Quantity}{" "}
                                  <AiFillPlusCircle
                                    onClick={() => this.Increment(data._id)}
                                  />{" "}
                                </p>
                              );
                            })}

                          <h5>Sum</h5>
                          {this.props.bookingDetail.Discounted_Price ? (
                            <h5>Discounted Price</h5>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="price_main_one">
                          {this.props.bookingDetail.Products.length > 0 ? (
                            <h3>Price</h3>
                          ) : (
                            ""
                          )}
                          {this.props.bookingDetail.Products &&
                            this.props.bookingDetail.Products.map((data) => {
                              return (
                                <p>
                                  {" "}
                                  <b>{data.Price * data.Quantity}</b>
                                </p>
                              );
                            })}

                          <h5>
                            {" "}
                            {parseInt(this.props.bookingDetail.Services.Price) +
                              productsPrice}
                          </h5>
                          {this.props.bookingDetail.Discounted_Price ? (
                            <h5>
                              {parseInt(
                                this.props.bookingDetail.Discounted_Price
                              )}
                            </h5>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="voucher_field">
                      <input
                        onChange={(e) => {
                          this.setState({ voucherCode: e.target.value });
                        }}
                        className="form-control my-3"
                        placeholder="Enter Voucher Code..."
                      />

                      {this.state.voucherCode.length > 0 ? (
                        <button onClick={this.verifyCode}>
                          Click to verify
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                    {this.state.msg ? (
                      <p className="alert alert-primary">{this.state.msg}</p>
                    ) : (
                      ""
                    )}
                    <div className="buttom_button">
                      <button
                        onClick={() => {
                          this.props.updateTabs(4);
                        }}
                        type="button"
                        className="btn btn-primary"
                      >
                        {" "}
                        Make Reservation{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default InfoTab;
