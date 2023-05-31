import React, { Component } from "react";
import { withRouter } from "react-router";
import sideImge from "../../assets/imge/photo1.jpeg";
import logo from "../../assets/imge/Biglogo.png";
import passwordIcon from "../../assets/icon/Icon feather-key@2x.png";
import AuthApi from "../../api/authApi";
import BtnLoader from "../../Componet/loaders/btnLoader";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
const SiginSchema = Yup.object().shape({
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

export class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      apiError: "",
      apiLoader: false,
      mobile_numbers: "",
    };
  }
  componentDidMount() {
    this.setState({ mobile_numbers: localStorage.getItem("mobile_number") });
  }

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
            <div
              className="logoContainer "
              onClick={() => this.props.history.push("/")}
            >
              <img src={logo} />
            </div>
            <h3>Welcome Back !</h3>
            <p>
              Find the latest and greatest saloons in your country and avail the
              best services in areas at your nearest location
            </p>

            <div className="loginInerContainer">
              {/* ***************** */}
              <Formik
                initialValues={{
                  password: "",
                  password_confirmation: "",
                  mobile_number: localStorage.getItem("mobile_number"),
                }}
                validationSchema={SiginSchema}
                onSubmit={(values) => {
                  this.setState({ apiLoader: true, apiError: "" });
                  AuthApi.resetpassword(values)
                    .then((response) => {
                      "success"("success", response);
                      this.setState({
                        apiError: response.data.msg,
                        apiLoader: false,
                      });
                      if (response.data.Error == false) {
                        setTimeout(() => {
                          localStorage.clear();
                          this.props.history.push("/login");
                        }, 3000);
                        // localStorage.clear("mobile_number")
                      }
                    })
                    .catch((error) => {
                      "error"(error);
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
                  <Form>
                    {/* {JSON.stringify(values, null, 2)} */}
                    <div className="loginInputs">
                      <div>
                        <div>
                          <img src={passwordIcon} />
                        </div>
                        <div>
                          <Field
                            type="text"
                            placeholder="Enter password"
                            name="password"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src={passwordIcon} />
                        </div>
                        <div>
                          <Field
                            type="text"
                            placeholder="Confirm password"
                            name="password_confirmation"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-danger ">
                      <div>{this.state.apiError}</div>

                      <div>
                        {" "}
                        <ErrorMessage name="password" />{" "}
                      </div>
                      <div>
                        {" "}
                        <ErrorMessage name="password_confirmation" />{" "}
                      </div>
                    </div>
                    <div className="loader_forget_btn">
                      {this.state.apiLoader && <BtnLoader />}
                    </div>
                    {!this.state.apiLoader && (
                      <div className="py-2 formBtns">
                        <div className="reset_pass_btn">
                          <button type="submit" className="active">
                            Reset Password
                          </button>
                        </div>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
              {/* ***************** */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Forgot);
