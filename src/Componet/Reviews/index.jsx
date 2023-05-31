import React, { Component } from "react";
import { GiRoundStar } from "react-icons/gi";
import review_img from "../../assets/imge/userImge.png";
import ReactStars from "react-rating-stars-component";
import { Formik, Form, ErrorMessage, Field } from "formik";
import BtnLoader from "../../Componet/loaders/btnLoader";
import Api from "../../api/landingPage";
import moment from "moment";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
const ReviewsSchema = Yup.object().shape({
  Description: Yup.string()
    .required("Description is required.")
    .min(10, "Too short Description."),
  Rating: Yup.string().required("Rating is required."),
});
class Reviews extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      ratings: "",
      descriptionInput: "",
      yupErrors: [],
      apiLoader: false,
      apiSms: "",
    };
  }

  sendReviews = () => {
    if (localStorage.getItem("token")) {
      let object = {
        Description: this.state.descriptionInput,
        Rating: this.state.ratings,
      };
      if (this.props.saloone == true) {
        object.Saloon = this.props.dataId;
      } else {
        object.Product = this.props.dataId;
      }

      let changeStatee = this;
      ReviewsSchema.validate(object)
        .then(function (valid) {
          changeStatee.setState({ apiLoader: true, apiSms: "", yupErrors: [] });
          Api.addreview(object)
            .then((res) => {
              if (res.data.Error == false) {
                changeStatee.setState({
                  apiLoader: false,
                  apiSms: res.data.msg,
                });
              }
            })
            .catch((error) => {});
        })
        .catch(function (err) {
          changeStatee.setState({ yupErrors: err.errors });
          // err.name; // => 'ValidationError'
          // err.errors; // => ['Deve ser maior que 18']
        });

      // alert(JSON.stringify(object))
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    return (
      <>
        <div className="review_section">
          {/* <div className="reviews_sec_title">
                        <h6 style={{fontWeight:"bold"}}>Reviews</h6>
                    </div>   */}
          {/* {this.state.apiSms=="" && !this.state.apiLoader && (
                        <div className="review_input">
                            <input type="text"
                                value={this.state.descriptionInput}
                                onChange={(e) => this.setState({ descriptionInput: e.target.value })}
                                name="" id="" placeholder="Write your review" />
                            <div className='selectStars pt-1'>
                                <ReactStars
                                    count={5}
                                    onChange={(e) => {
                                        this.setState({ ratings: e })
                                    }}
                                    value={this.state.ratings}
                                    size={26}
                                    activeColor="#F9D63E"
                                    isHalf={true}
                                />
                            </div>
                            <button type="button"
                                onClick={() => {
                                    this.sendReviews()
                                }}
                                className="btn">Submit</button>
                        </div>
                    )} */}
          {this.state.apiLoader && <BtnLoader />}
          <span className="text-success">{this.state.apiSms}</span>

          <div className="text-danger">
            {this.state.yupErrors.map((data) => {
              return <div>{data}</div>;
            })}
          </div>

          {this.props.Reviews.map((data) => {
            return (
              <div className="reviws_listing">
                <div className="revoew_top_titles">
                  <div className="review_img">
                    <img src={review_img} alt="" className="img-fluid" />
                  </div>
                  <div className="review_title_img">
                    <div className="review_name">
                      <h2 className="mb-0">{data.User && data.User.name}</h2>
                      <div>
                        <ReactStars
                          count={5}
                          edit={false}
                          value={data.Rating}
                          size={26}
                          activeColor="#F9D63E"
                          isHalf={true}
                        />
                      </div>
                    </div>
                    <div className="review_date text-center">
                      <p>
                        {moment(data.date).format("DD-MMM")} <br />
                        {moment(data.date).format("hh:mm A")}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review_des">
                  <p>{data.Description} </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default withRouter(Reviews);
