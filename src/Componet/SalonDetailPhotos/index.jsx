import React from "react";
import { Component } from "react";
import { FaCircle } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import map_img from "../../assets/imge/newimages/downloadd.png";
import s_over from "../../assets/imge/pexels-photo-1813272.png";
import s_over2 from "../../assets/imge/pexels-photo-3065171.png";
import full_over from "../../assets/imge/pexels-photo-3992855.png";
import s_over3 from "../../assets/imge/pexels-photo-3993133.png";
import s_over4 from "../../assets/imge/pexels-photo-2061820.png";
import full_over2 from "../../assets/imge/pexels-photo-3993469.png";
import Reviews from "../Reviews";
class SalonDetailPhotos extends Component {
  render() {
    return (
      <>
        <div className="main_detail_photos">
          <div className="overview_photos">
            <div className="title_photos">
              <h6>Photos</h6>
              {/* <a href="#">View All</a> */}
            </div>
            <div className="photos_overview">
              <div className="row m-0">
                {/* {JSON.stringify(this.props.data.Photos, null, 2)} */}
                {this.props.data &&
                  this.props.data.Photos.map((data) => {
                    return (
                      <div className="col-md-4 col-lg-3 col-6 px-1">
                        <div className="overview_small">
                          {data.Photo ? (
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/${data.Photo}`}
                              alt=""
                              className="img-fluid"
                            />
                          ) : (
                            <img src={this.props.noImage} alt="" />
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* < Reviews /> */}
          </div>
        </div>
      </>
    );
  }
}
export default SalonDetailPhotos;
