import React, { Component } from "react";
import { Link } from "react-router-dom";

import sideImge from "../../assets/imge/photo1.jpeg";
import logo from "../../assets/imge/Biglogo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import googleIcon from "../../assets/imge/google-logo.png";
import facebookIcon from "../../assets/imge/facebook_icon_130940.png";
import emailIcon from "../../assets/icon/Icon ionic-ios-mail@2x.png";
import appleIcon from "../../assets/icon/download@2x.png";
import passwordIcon from "../../assets/icon/Icon feather-key@2x.png";

import userIcon from "../../assets/icon/userIcon.png";
import PhoneIcon from "../../assets/icon/phoneIcon.png";
import DataIcon from "../../assets/icon/DateIcon.png";
import AuthApi from "../../api/authApi";
import BtnLoader from "../../Componet/loaders/btnLoader";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";
const SiginSchema = Yup.object().shape({
  name: Yup.string().required("User Name is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  mobile_number: Yup.string()
    .required("Phone Number is required.")
    .min(6, "Phone Number should 6 digits."),
  terms: Yup.bool().oneOf([true], "Accept Terms & Conditions is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password should 6 digits."),
  password_confirmation: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same."
    ),
  }),
});

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      apiError: "",
      apiLoader: false,
      showPassword: false,
    };
  }
  responseGoogle = (response) => {};
  responseFacebook = (response) => {};
  hideAndShowPassword = () => {
    ("button testing clicked");
    this.setState(
      { showPassword: this.state.showPassword === false ? true : false },
      () => {}
    );
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
            <h3>Welcome User !</h3>
            <p id="para">
              Sign up with Saloon to find the latest and greatest saloons in
              your country and avail the best services in areas at your nearest
              location
            </p>
            <div className="loginInerContainer">
              {/* ***************** */}
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  password_confirmation: "",
                  mobile_number: "",
                  DOB: "",
                  terms: false,
                }}
                validationSchema={SiginSchema}
                onSubmit={(values) => {
                  let object = { ...values };
                  localStorage.setItem("mobile_number", object.mobile_number);
                  delete object.password_confirmation;
                  delete object.terms;

                  this.setState({ apiLoader: true, apiError: "" });
                  if (this.props.match.params.user == "user") {
                    let data = {
                      name: values.name,
                      email: values.email,
                      password: values.password,
                      // DOB:values.DOB,
                      mobile_number: values.mobile_number,
                    };

                    AuthApi.signUp(data)
                      .then((response) => {
                        if (response.data.Error == false) {
                          this.setState({
                            apiError: "",
                            apiLoader: false,
                          });
                          setTimeout(() => {
                            this.props.history.push("/varifiy_pin/user");
                          }, 1000);
                        }
                        if (response.data.Error == true) {
                          this.setState({
                            apiError: response.data.msg,
                            apiLoader: false,
                          });
                        }
                      })
                      .catch((error) => {
                        ("there is an error");

                        this.setState({
                          apiLoader: false,
                        });
                        // if(error.response.status==400){
                        // }
                      });
                  } else {
                    let data = {
                      Name: values.name,
                      Email: values.email,
                      Password: values.password,
                      Mobile_Number: values.mobile_number,
                    };
                    AuthApi.signUpSaloon(data)
                      .then((response) => {
                        if (response.data.Error == false) {
                          this.setState({
                            apiError: "",
                            apiLoader: false,
                          });
                          setTimeout(() => {
                            this.props.history.push("/varifiy_pin/saloon");
                          }, 1000);
                        }
                        if (response.data.Error == true) {
                          this.setState({
                            apiError: response.data.msg,
                            apiLoader: false,
                          });
                        }
                      })
                      .catch((error) => {
                        ("error");

                        this.setState({
                          apiLoader: false,
                        });
                        // if(error.response.status==400){
                        // }
                      });
                  }

                  // same shape as initial values
                }}
              >
                {({ values, setFieldValue, errors }) => (
                  <Form>
                    {/* {JSON.stringify(values,null,2)} */}
                    {/* {JSON.stringify(errors,null,2)} */}
                    <div className="loginInputs">
                      <div>
                        <div>
                          <div>
                            <img src={userIcon} />
                          </div>
                        </div>
                        <div>
                          <Field
                            type="text"
                            placeholder="Shop Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <img src={emailIcon} />
                          </div>
                        </div>
                        <div>
                          <Field type="text" placeholder="Email" name="email" />
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            {" "}
                            <img src={PhoneIcon} />
                          </div>
                        </div>
                        <div>
                          <Field
                            type="number"
                            placeholder="Phone number"
                            name="mobile_number"
                          />
                        </div>
                      </div>
                      {this.props.match.params == "user" ? (
                        <div>
                          <div>
                            <div>
                              <img src={DataIcon} />
                            </div>
                          </div>
                          <div>
                            <Field
                              type="text"
                              placeholder="Date of Birth"
                              name="DOB"
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div>
                        <div>
                          <div>
                            <img src={passwordIcon} />
                          </div>
                        </div>
                        <div className="d-flex">
                          <input
                            type={`${
                              this.state.showPassword === false
                                ? "password"
                                : "text"
                            }`}
                            className="latter-space-none"
                            onChange={(e) => {
                              setFieldValue("password", e.target.value, true);
                            }}
                            value={values.password}
                            placeholder="Password"
                          />
                          <i
                            className="cursor-pointer"
                            onClick={this.hideAndShowPassword}
                          >
                            {this.state.showPassword ? (
                              <AiFillEye />
                            ) : (
                              <AiFillEyeInvisible />
                            )}
                          </i>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <img src={passwordIcon} />
                          </div>
                        </div>
                        <div className="d-flex">
                          <input
                            type={`${
                              this.state.showPassword === false
                                ? "password"
                                : "text"
                            }`}
                            className="latter-space-none"
                            onChange={(e) => {
                              setFieldValue(
                                "password_confirmation",
                                e.target.value,
                                true
                              );
                            }}
                            value={values.password_confirmation}
                            placeholder="Confirm Password"
                          />
                          <i
                            className="cursor-pointer"
                            onClick={this.hideAndShowPassword}
                          >
                            {this.state.showPassword ? (
                              <AiFillEye />
                            ) : (
                              <AiFillEyeInvisible />
                            )}
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="terms-privacy mt-1">
                      <div className="pr-2">
                        <Field type="checkbox" name="terms" />
                      </div>
                      <div>
                        <p>
                          By continuing <a href="#">Sign Up</a> you agree to the
                          following
                          <a href="#"> Terms & Conditions</a> without
                          reservation
                        </p>
                      </div>
                    </div>
                    <div className="text-danger ">
                      <div>{this.state.apiError}</div>
                      <div>
                        <ErrorMessage name="name" />
                      </div>
                      <div>
                        <ErrorMessage name="email" />
                      </div>
                      <div>
                        <ErrorMessage name="password" />
                      </div>
                      <div>
                        <ErrorMessage name="role" />
                      </div>
                      <div>
                        <ErrorMessage name="mobile_number" />
                      </div>
                      <div>
                        <ErrorMessage name="DOB" />
                      </div>
                      <div>
                        <ErrorMessage name="password_confirmation" />
                      </div>
                      <div>
                        <ErrorMessage name="terms" />
                      </div>
                    </div>

                    {this.state.apiLoader && (
                      <div className="py-3">
                        <BtnLoader />
                      </div>
                    )}
                    {!this.state.apiLoader && (
                      <div className="py-2 mt-1 formBtns">
                        <button type="submit" className="active mx-0 ">
                          Sign Up
                        </button>
                      </div>
                    )}

                    {/* {JSON.stringify(values, null, 2)} */}
                  </Form>
                )}
              </Formik>
              {/* ***************** */}

              {!this.state.apiLoader && (
                <>
                  <div className="my-1 mt-3">
                    <p className="alreact-account">Already have an account?</p>
                  </div>
                  <div className="py-2 mb-3 mt-1 formBtns">
                    <button
                      className="active mx-0 "
                      onClick={() => this.props.history.push("/login")}
                    >
                      Sign In
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
