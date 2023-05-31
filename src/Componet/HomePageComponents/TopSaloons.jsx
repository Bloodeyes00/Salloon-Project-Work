import { withRouter } from "react-router";
import React, { Component, useState } from "react";
import "slick-carousel/slick/slick.css";
import newsaloons from "../../assets/imge/newimages/photo-1562322140-8baeececf3df.png";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import moment from "moment";
import LikeSaloon from "../LikeSaloon";
import pic1 from "../../assets/imge/newimages/4.png";

const TopSaloons = (props) => {
  const saloons = useSelector((state) => state.SaloonList);
  const customerDetail = useSelector((state) => state.CustomerDetail);


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
    <section className="home_top_saloons">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slickContainer py-4">
              <h2>TOP SALLOONS</h2>
              <p>
                Browse the top-rated options to find the services and
                <br /> professionals that are perfect for you.
              </p>
            </div>
          </div>
        </div>
        <div className="main_saloons_new">
          <div className="row">
            {saloons.Top &&
              saloons.Top.map((data) => {

                return (
                  <div className="col-md-4" key={data.id}>
                    <div
                      className="main_new_saloons"
                      onClick={() => props.history.push(`/saloon/${data._id}`)}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <div className="saloons_img_content">
                        {/* <img src={`${process.env.REACT_APP_BASE_URL}/${data.Profile_Pic}`} alt="" className="img-fluid" /> */}
                        <img src={pic1} />
                        <div className="saloon_status">
                          <button
                            type="button"
                            className={`btn ${
                              data.Open_Time
                                ? "btn-success bg-success"
                                : data.Close_Time
                                ? "btn-secondary"
                                : "btn"
                            }`}
                          >
                            {" "}
                            {SaloonTime(data.Open_Time, data.Close_Time)}{" "}
                          </button>

                          <div className="ratings_main">
                            {[1, 1, 1, 1, 1].map((data, i) => {
                              
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
                            {/* <h3>test salloon</h3> */}
                            {/* <p>{data.Address ? data.Address.Address:""}</p> */}
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                          </div>
                          {/* <div className="aways_saloon">
                                                            <p>12km away</p>
                                                      </div> */}
                        </div>
                        <div className="saloon_descri">
                          {/* <p>{data.Description && data.Description.substring(0,150)}...</p> */}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Possimus maiores impedit, perspiciatis,
                            pariatur, porro facilis ipsum sit nihil provident
                            earum illo quod eum adipisci nobis rem ab ipsam
                            quidem consequatur!
                          </p>
                        </div>
                      </div>
                      {/* <div className="image_saloons_tag">
                                                <p>New</p>
                                          </div> */}
                    <div>
                      <LikeSaloon
                      className="salloom-heart" 
                        customerDetail={customerDetail}
                           saloon={data._id}
                      />
                    </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="see_all_saloons">
            <button
              onClick={() => {
                props.history.push("/saloons");
              }}
              type="button"
              className="btn"
            >
              {" "}
              View All{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(TopSaloons);
