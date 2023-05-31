import React from "react";
import { withRouter } from "react-router";
import Footer from "../../Componet/Footer/Footer";
import Header from "../../Componet/Headers/Header";
import image_main from "../../assets/imge/newimages/photo-1562322140-8baeececf3df.png";
import noImage from "../../assets/imge/newimages/noimage.jpg";

import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";
import moment from "moment";
import LikeSaloon from "../../Componet/LikeSaloon";

const Favourite = (props) => {
  const SaloonTime = (open, close) => {
    let time = moment().format("HH:mm");
    let openTime = moment(open, "HH:mm A").format("HH:mm");
    let closeTime = moment(close, "HH:mm A").format("HH:mm");
    if (time < closeTime && time > openTime) {
      return "Open";
    } else {
      return "Close";
    }
  };

  return (
    <>
      <div className="bgDarkHeader">
        <Header />
      </div>
      <div className="container">
        <div class="slickContainer py-4">
          <h2>FAVOURITE SALOONS</h2>
        </div>
        <div className="main_listing_favs">
          <div className="row">
            {props.SaloonList.Favorite &&
              props.SaloonList.Favorite.map((data) => {
                return (
                  <div className="col-md-4">
                    <div
                      style={{ minHeight: "336px" }}
                      className="main_new_saloons"
                      onClick={() => props.history.push(`/saloon/${data._id}`)}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <div className="saloons_img_content">
                        {data.Profile_pic ? (
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/${data.Profile_Pic}`}
                            alt=""
                            className="img-fluid"
                          />
                        ) : (
                          <img src={noImage} alt="" className="img-fluid" />
                        )}
                        <div className="saloon_status">
                          <button type="button" className="btn">
                            {" "}
                            {SaloonTime(data.Open_Time, data.Close_Time)}{" "}
                          </button>
                          <div className="ratings_main">
                            {[1, 1, 1, 1, 1].map((dat, i) => {
                              if (i < data.Rating) {
                                return <AiFillStar />;
                              }
                            })}
                            {[1, 1, 1, 1, 1].map((dat, i) => {
                              if (i < 5 - data.Rating) {
                                return <AiFillStar className="half_fill" />;
                              }
                            })}
                            <p>{data.Rating}</p>
                          </div>
                        </div>
                        {/* <div className="add_saloon_fav">
                                                  <AiFillHeart />
                                            </div> */}
                      </div>

                      <div className="image_saloon_content">
                        <div className="heading_saloon_new">
                          <div className="name_heading_new">
                            <h3>{data.Name}</h3>
                            <p>{data.Address ? data.Address.Address : ""}</p>
                          </div>
                          {/* <div className="aways_saloon">
                                                        <p>12km away</p>
                                                  </div> */}
                        </div>
                        {/* <div className="saloon_descri">
                                                  <p>{data.Description && data.Description.substring(0,150)}...</p>
                                            </div> */}
                      </div>
                      {/* <div className="image_saloons_tag">
                                            <p>New</p>
                                      </div> */}
                    </div>
                    {/* <LikeSaloon customerDetail={props.customerDetail} saloon={data._id}  /> */}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    SaloonList: state.SaloonList,
    customerDetail: state.CustomerDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  //  return {
  //     addtoCart: (data) => {
  //        dispatch(ACTIONS.addCart(data))
  //     }
  //  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Favourite));
