import React, { Component } from "react";
import { Link } from "react-router-dom";
import sideImge from "../../assets/imge/photo1.jpeg";
import OtpInput from "react-otp-input";
import logo from "../../assets/imge/Biglogo.png";
import AuthApi from "../../api/authApi";
import BtnLoader from "../../Componet/loaders/btnLoader";

import { withRouter } from "react-router";

export class VarificationPin extends Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      timer: 30,
      msg: "",
      error_msg: "",
      apiLoader: false,
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("mobile_number")) {
      this.props.history.push("/signup");
    }
    this.countDown();
  }
  countDown = () => {
    let times = setInterval(() => {
      let num = this.state.timer - 1;
      //  if(num<10){
      //     "0"+num
      //  }
      this.setState({ timer: num });
      if (this.state.timer == 0) {
        clearInterval(times);
      }
    }, 1000);
  };

  resendCode = () => {
    if (this.state.timer == 0) {
      this.setState({ timer: 30, otp: "" });

      this.resendOtp();
    }
  };

  otp = (e) => {
    this.setState({ otp: e, error_msg: "" });
    if (e.length == 4) {
      // this.setState({ apiLoader: true })(`Otp is submited ${e}`);
      let mobile_number = localStorage.getItem("mobile_number");
      let object = {
        mobile_number: mobile_number,
        otp: e,
      };
      AuthApi.varify_pin(object)
        .then((res) => {
          if (res.data.token) {
            this.setState({ apiLoader: false });
            this.setState({
              msg: "Otp varifid success fully.",
              error_msg: "",
            });
            localStorage.setItem("token", res.data.token);
            let updating_password = localStorage.getItem("updating_password");
            if (updating_password == "true") {
              localStorage.removeItem("updating_password");
              this.props.history.push("/update-password");
            } else {
              localStorage.removeItem("updating_password");
              this.props.history.push("/");
            }
          } else {
            this.setState({
              apiLoader: false,
              error_msg: res.data.msg,
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.setState({ apiLoader: false });
            this.setState({
              error_msg: error.response.data.msg,
              msg: "",
            });
          }
        });
    }
  };

  resendOtp = () => {
    this.setState({
      apiLoader: true,
      error_msg: "",
    });
    let mobile_number = localStorage.getItem("mobile_number");
    let object = {
      mobile_number: mobile_number,
    };
    AuthApi.res_end_otp_mobile(object)
      .then((res) => {
        if (res.data.Error == false) {
          this.countDown();
          this.setState({ apiLoader: false });
        }
      })
      .catch((error) => {});
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="sideImgeContainer">
              <img src={sideImge} />
            </div>
          </div>
          <div className="col-md-6 LoginContainer bg-white">
            <div
              className="logoContainer"
              onClick={() => this.props.history.push("/")}
            >
              <img src={logo} />
            </div>
            {this.state.valir}
            <h3 className="py-2">Phone verification</h3>
            <p className="varifyPoneNumber pb-4">Enter your OTP Code here</p>
            <div className="loginInerContainer">
              <div className="py-1 mb-3  formBtns">
                <div className="w-100">
                  <div className="otpContainer">
                    <OtpInput
                      value={this.state.otp}
                      onChange={(e) => {
                        this.otp(e);
                      }}
                      placeholder="    "
                      isInputNum={true}
                      numInputs={4}
                    />
                  </div>
                  <p className="text-success">{this.state.msg}</p>
                  <p className="text-danger">{this.state.error_msg}</p>

                  {this.state.apiLoader && <BtnLoader />}
                  {!this.state.apiLoader && (
                    <>
                      <p className="otpResend text-center ">
                        00:{this.state.timer < 10 ? 0 : ""}
                        {this.state.timer}
                      </p>
                      <p className="otpResend text-center ">
                        Didn't receive any code?
                      </p>

                      <p
                        onClick={() => {
                          this.resendCode();
                        }}
                        className={`otpResend text-center pb-4 ${
                          this.state.timer > 0 ? "disable" : ""
                        }`}
                      >
                        <span> Resend a new code</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VarificationPin);
