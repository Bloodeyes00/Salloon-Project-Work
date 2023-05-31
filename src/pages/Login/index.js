import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import AppleLogin from "react-apple-login";
import { withRouter } from "react-router";
import sideImge from "../../assets/imge/photo1.jpeg";
import logo from "../../assets/imge/Biglogo.png";
import googleIcon from "../../assets/imge/google-logo.png";
import facebookIcon from "../../assets/imge/facebook_icon_130940.png";
import emailIcon from "../../assets/icon/Icon ionic-ios-mail@2x.png";
import appleIcon from "../../assets/icon/download@2x.png";
import passwordIcon from "../../assets/icon/Icon feather-key@2x.png";
import AuthApi from "../../api/authApi";
import BtnLoader from "../../Componet/loaders/btnLoader";
import Signup from "../Signup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import App2 from "../../App2";
const SiginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .min(6, "Password is too Short!")
    .required("Password is required."),
  // terms: Yup.boolean().required('Required')
});

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      apiError: "",
      apiLoader: false,
    };
  }
  responseGoogle = (response) => {
    console.log("google", response);
  };
  responseFacebook = (response) => {
   console.log("facebook", response);
  };
  render() {
    const clientId = "760680645403-mrvuaie01oo3juglh17qbhms57f5gb7j.apps.googleusercontent.com"
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="sideImgeContainer">
              <img src={sideImge} />
            </div>
          </div>
          <div className="col-md-6 LoginContainer bg-white">

            <div className="loginInerContainer ">
              {/* ***************** */}
              <div
              className="logoContainer "
              onClick={() => this.props.history.push("/")}
            >
              <img src={logo} />
            </div>
            <div className="my-2">
            <h3>Welcome Back !</h3>
            <p>
              Find the latest and greatest saloons in your country and avail the
              best services in areas at your nearest location
            </p>
            </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  terms: "",
                }}
                validationSchema={SiginSchema}
                onSubmit={(values) => {

                  this.setState({ apiLoader: true, apiError: "" });
                  AuthApi.login(values)
                    .then((response) => {
                      if (response.data.Error == false) {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem(
                          "profile",
                          JSON.stringify(response.data.user)
                        );
                        this.props.history.push("/");
                      }


                      this.setState({
                        apiError: response.data.msg,
                        apiLoader: false,
                      });
                    })
                    .catch((error) => {
                      ("error");

                      this.setState({
                        apiLoader: false,
                      });
                      // if(error.response.status==400){
                      // }
                    });
                  // same shape as initial values
                }}
              >
                {({ values, setFieldValue }) => (
                  <Form className="">
                    {/* {JSON.stringify(values, null, 2)} */}
                    <div className="loginInputs">
                      <div>
                        <div>
                          <img src={emailIcon} />
                        </div>
                        <div>
                          <Field
                            type="email"
                            placeholder="abc@example.com"
                            name="email"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="">
                          <img src={passwordIcon} />
                        </div>
                        <div>
                          {/* <Field type="password"
                          placeholder="123456"
                          name="password" /> */}
                          {/* placeholder */}
                          <input
                            type="password"
                            onChange={(e) => {
                              setFieldValue("password", e.target.value, true);
                            }}
                            placeholder="......"
                            value={values.passowrd}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="py-4 reminderContainer">
                      <div>
                        <div>
                          {" "}
                          <Field type="checkbox" name="terms" />
                          Remember Me
                        </div>
                        <div>
                          <small className="text-danger ">
                            {" "}
                            <ErrorMessage name="terms" />
                          </small>
                        </div>
                      </div>
                      <div>
                        <Link to="/forget">Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="text-danger ">
                      <div>{this.state.apiError}</div>

                      <div>
                        {" "}
                        <ErrorMessage name="email" />{" "}
                      </div>
                      <div>
                        {" "}
                        <ErrorMessage name="password" />{" "}
                      </div>
                    </div>
                    {this.state.apiLoader && <BtnLoader />}
                    {!this.state.apiLoader && (
                      <div className="py-2 formBtns">
                        <div>
                          <button type="submit" className="active">
                            Login
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => this.props.history.push("/signup/:user")}
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
              {/* ***************** */}

              <p className="otherThenLogin mb-0">Or</p>
              <div>
                {/* <GoogleLogin
                  clientId={clientId}
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  isSignedIn= {true}
                  // redirectUri="http://localhos/"
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <button
                      className="loginWithGoolge"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <img src={googleIcon} />
                      Connect with Google
                    </button>
                  )}
                /> */}
<App2/>
                {/* <FacebookLogin
                  appId="1088597931155576 "
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={() => {
                    ("facebook clicked");
                  }}
                  callback={() => this.responseFacebook}
                  render={(renderProps) => (
                    <button
                      className="loginWithFacebook"
                      onClick={renderProps.onClick}
                    >
                      <img src={facebookIcon} />
                      Connect with Facebook
                    </button>
                  )}
                /> */}
{/*
                <AppleLogin
                  clientId="com.react.apple.login"
                  redirectURI="https://redirectUrl.com"
                  render={(renderProps) => (
                    <button
                      className="loginWithApple"
                      onClick={renderProps.onClick}
                    >
                      <img src={appleIcon} />
                      Connect with Apple
                    </button>
                  )}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
