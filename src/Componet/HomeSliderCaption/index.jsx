import React, { Component } from "react";

import ModernDatepicker from "react-modern-datepicker";
import { MdLocationOn } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
class HomeSliderCaption extends Component {
  render() {
    return (
      <>
        <div className="home_slider_caption carousel-caption">
          <h1>
            A <span>spot</span> where all your <br /> <span>beauty</span>{" "}
            appointments <br />
            meet{" "}
          </h1>
          <div className="form_search_slider ">
            <div className="main_inpt_slider first_inp">
              <input
                type="text"
                className="form-control"
                placeholder="Search your saloon"
              />
              <MdLocationOn />
            </div>
            <div className="main_inpt_slider date_pik ">
              <ModernDatepicker
                className="modern-datepicker"
                date={this.props.startDate}
                format={"DD-MM-YYYY"}
                showBorder
                onChange={(date) => this.props.handleChange(date)}
                placeholder={"Select Date"}
              />
              <GoCalendar />
            </div>
            <div className="mani_select_slider">
              <select name="" id="" className="form-control">
                <option value="name">Select Category</option>
              </select>
            </div>
            <div className="search_btn_slider">
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeSliderCaption;
