import React from "react";
import { Component } from "react";
import { FaCircle } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

import s_over from "../../assets/imge/pexels-photo-1813272.png";
import s_over2 from "../../assets/imge/pexels-photo-3065171.png";
import full_over from "../../assets/imge/pexels-photo-3992855.png";
import s_over3 from "../../assets/imge/pexels-photo-3993133.png";
import s_over4 from "../../assets/imge/pexels-photo-2061820.png";
import full_over2 from "../../assets/imge/pexels-photo-3993469.png";

import Reviews from "../Reviews";

class Overview extends Component {
  state = {
    readDes: false,
  };

  setDescription = (des) => {
    if (this.state.readDes) {
      return des;
    } else {
      if (des) {
        return des.substring(0, 200);
      }
    }
  };
  render() {
    return (
      <>
        <div className="main_review_content_tabs">
          <div className="reviw_title_link">
            <h3>About the Lux Saloon</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              corrupti, ab possimus aliquid modi est consequatur blanditiis iure
              voluptates nam nobis recusandae necessitatibus quisquam illum
              odit! Ut tenetur molestiae harum repellendus porro. Unde, amet,
              necessitatibus non sint accusamus ipsa fuga laboriosam laborum nam
              veniam numquam porro expedita aperiam placeat ab!
            </p>
            <p>
              {this.setDescription(this.props.data.Description)}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.setState({ readDes: !this.state.readDes });
                }}
              >
                {this.state.readDes ? "Read Less" : "Read More"}
              </span>
            </p>
            {/* <h3>{this.props.data.Name}</h3>
            <p>{this.props.data.Description} </p> */}
          </div>
          <div className="opening_timeing">
            <div className="title_openin">
              <h3>Opening Hours</h3>
            </div>
            <div className="alignment_revoews_with_map">
              <div className="opening_timing_slots">
                <div className="align_slots_over_view">
                  <div className="day_slots_op">
                    <p>
                      {" "}
                      <FaCircle /> Monday-Friday
                    </p>
                    <p>
                      {" "}
                      <FaCircle /> Saturday-Sunday
                    </p>
                  </div>
                  {/* <div className="timing_op">
                                        <p>{this.props.data.Hours.sat_to_sunday.open} - {this.props.data.Hours.sat_to_sunday.close}</p>
                                        <p>{this.props.data.Hours.mon_to_friday.open} - {this.props.data.Hours.mon_to_friday.close}</p>

                                </div> */}
                </div>
                <div className="address_main_over">
                  <h4>Address</h4>
                  <h6>
                    {this.props.data.Address && this.props.data.Address.Address}
                  </h6>
                  {/* <p> < GrSend /> Get Directions-12km</p> */}
                </div>
              </div>
              <div className="img_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3387541.8154145274!2d71.68314665!3d33.98877565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1660975832070!5m2!1sen!2s"   style={{height:300,width:680}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Overview;
