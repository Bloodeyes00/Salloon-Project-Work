import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import sideImge from "../../assets/imge/varifyPhone.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import logo from "../../assets/imge/Biglogo.png";
import BtnLoader from "../../Componet/loaders/btnLoader";
import AuthApi from "../../api/authApi";
export class VarifyPhone extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      apiError: "",
      apiLoader: false,
    };
  }
  responseGoogle = (response) => {};
  responseFacebook = (response) => {};
  submitNumber = () => {
    if (this.state.value == "") {
      this.setState({ apiError: "Phone number is required." });
    } else {
      this.forgetBtn();
    }
  };

  forgetBtn = () => {
    this.setState({ apiLoader: true, apiError: "" });
    let values = {
      mobile_number: this.state.value,
    };
    localStorage.setItem("mobile_number", this.state.value);
    AuthApi.forgotpassword(values)
      .then((response) => {
        this.setState({
          apiError: response.data.msg,
          apiLoader: false,
        });

        localStorage.setItem("updating_password", true);
        setTimeout(() => {
          this.props.history.push("/varifiy_pin/:user");
        }, 1000);
      })
      .catch((error) => {
        "error"(error);
        this.setState({
          apiLoader: false,
        });
        // if(error.response.status==400){
        // }
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="sideImgeContainer forgot_image">
              <img src={sideImge} />
            </div>
          </div>
          <div className="col-md-6 LoginContainer bg-white">
            <div className="logoContainer">
              <img src={logo} />
            </div>
            {this.state.valir}
            <h3 className="py-2">Verify your phone number</h3>
            <p className="varifyPoneNumber pb-4">
              We have sent you an SMS with a code to number{" "}
              <span>
                {this.state.value && this.state.value.length > 0
                  ? this.state.value
                  : "+00 0000 000 ..."}
              </span>
            </p>
            <div className="loginInerContainer">
              <div className="py-2 mb-3 mt-1 formBtns">
                <div className="w-100">
                  <div className="vairfyPhoneContainer mb-0">
                    <div className="flex-grow-1">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={this.state.value}
                        international
                        onChange={(e) => this.setState({ value: e })}
                      />
                    </div>
                    <div>
                      {this.state.value && this.state.value.length > 0 && (
                        <FaTimesCircle
                          onClick={() => {
                            this.setState({ value: "" });
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-danger">{this.state.apiError}</div>
                  {/* <BtnLoader/> */}

                  <div className="loader_forget_btn">
                    {this.state.apiLoader && <BtnLoader />}
                  </div>
                  {!this.state.apiLoader && (
                    <button
                      className="active mx-0 "
                      onClick={() => {
                        this.submitNumber();
                      }}
                    >
                      Continue
                    </button>
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

export default VarifyPhone;
