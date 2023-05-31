import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import dtl_img from '../../assets/imge/newimages/Group 20955.png'
// import collapse_icon from '../../assets/imge/womans_hair_200px.png'
// import { Card, Accordion } from 'react-bootstrap'
// import { HiOutlineChevronDown } from 'react-icons/hi'
import home_icon from "../../assets/imge/newimages/Group 20923.png";
import { FiChevronLeft } from "react-icons/fi";
import stf_img from "../../assets/imge/newimages/stf_img.png";
import { AiFillStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import Slider from "react-slick";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import google_mig from "../../assets/imge/newimages/google-logo.png";
import fb_mig from "../../assets/imge/newimages/facebook_icon_130940.png";
import ip_mig from "../../assets/imge/newimages/download.png";
import { Link } from "react-router-dom";
import loc_blue from "../../assets/imge/newimages/Repeat Grid 1.png";
import loca_blue2 from "../../assets/imge/newimages/blueloca.png";
import loca_blue3 from "../../assets/imge/newimages/blue_clock.png";
import payment1 from "../../assets/imge/newimages/Image 4.png";
import payment2 from "../../assets/imge/newimages/Image 5.png";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import map_img from "../../assets/imge/newimages/thumbnail (1).png";
import info_sub from "../../assets/imge/newimages/information.png";
import timer_end from "../../assets/imge/newimages/booking.png";
import ServicesTab from "../ServicesTab";
import TimeTab from "../TimeTab";
import InfoTab from "../InfoTab";
import BookedTab from "../BookedTab";
import Addone from "../Addone";

class WizardFrom extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: null,
      count: 2,
      booked: false,
      tabscustom: 0,
      bookingDetail: {
        Saloon: "",
        Services: null,
        Products: [],
        Staff: "",
        Appointment_Date: "",
        Payment_Type: "",
        Time_Slot: "",
        Total_Price: "",
        diableTabs: false,
        Discounted_Price: "",
      },
    };
  }
  setBookingDetail = (name, value) => {
    this.setState((prevState) => ({
      bookingDetail: {
        ...prevState.bookingDetail,
        [name]: value,
      },
    }));
  };
  resetBookingDetail = () => {
    this.setState({
      diableTabs: true,
    });
  };
  updateTabs = (value) => {
    this.setState({ activeTab: value, tabscustom: value });
  };
  updateTabe = (value) => {
    if (value.activeTab == this.state.activeTab) {
      this.setState({ activeTab: null });
    } else {
      this.setState({ activeTab: value.activeTab });
    }
  };

  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  showEnd = () => {
    this.setState({
      booked: true,
    });
  };

  handleSelect = (index) => {
    this.setState({ tabscustom: index });
  };

  changeTab = () => {
    // this.setState ({
    //     tabscustom: this.state.tabscustom-1
    // })
    if (this.state.tabscustom == 0) {
      this.setState({
        tabscustom: 0,
      });
    } else {
      this.setState({
        tabscustom: this.state.tabscustom - 1,
      });
    }
  };

  // PrevActiveTab  (index) {
  //     this.setState ({
  //         index : this.state.index-1
  //     })
  // }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: (
        <span className="slickErrow right">
          <AiOutlineRight />
        </span>
      ),
      prevArrow: (
        <span className="slickErrow left">
          <AiOutlineLeft />
        </span>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const days = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      nextArrow: (
        <span className="slickErrow right">
          <AiOutlineRight />
        </span>
      ),
      prevArrow: (
        <span className="slickErrow left">
          <AiOutlineLeft />
        </span>
      ),
      slidesToScroll: 1,
    };

    let { activeTab } = this.state;

    return (
      <>
        <Tabs
          selectedIndex={this.state.tabscustom}
          onSelect={this.handleSelect}
        >
          <TabList>
            <Tab disabled={this.state.diableTabs}>
              <div className="main_align_wizard">
                <div className="main_tabbed_wizatf">
                  <h3> Service </h3> <p>Select Services</p>
                </div>
              </div>
            </Tab>
            <Tab
              disabled={
                this.state.bookingDetail.Services == null ||
                this.state.diableTabs
              }
            >
              <div className="main_align_wizard">
                <div className="main_tabbed_wizatf">
                  <h3> Add- ons </h3> <p>Select Add-ons</p>
                </div>
              </div>
            </Tab>
            <Tab
              disabled={
                this.state.bookingDetail.Services == null ||
                this.state.diableTabs
              }
            >
              <div className="main_align_wizard">
                <div className="main_tabbed_wizatf">
                  <h3> Time </h3> <p>Select Time</p>
                </div>
              </div>
            </Tab>
            <Tab
              disabled={
                (this.state.bookingDetail.Time_Slot == "" &&
                  this.state.bookingDetail.Appointment_Date == "" &&
                  this.state.bookingDetail.Staff == "") ||
                this.state.diableTabs
              }
            >
              <div className="main_align_wizard">
                <div className="main_tabbed_wizatf">
                  <h3> Information </h3> <p>Fill information</p>
                </div>
              </div>
            </Tab>
            <Tab disabled={this.state.bookingDetail.User == null}>
              <div className="main_align_wizard">
                <div className="main_tabbed_wizatf">
                  <h3> Done </h3> <p></p>
                </div>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <ServicesTab
              selectionStaff={this.props.selectionStaff}
              reserve_id={this.props.reserve_id}
              updateTabs={this.updateTabs}
              bookingDetail={this.state.bookingDetail}
              setBookingDetail={this.setBookingDetail}
              allData={this.props.allData}
              activeTab={this.state.activeTab}
              updateTabe={this.updateTabe}
            />
          </TabPanel>
          <TabPanel>
            <Addone
              updateTabs={this.updateTabs}
              bookingDetail={this.state.bookingDetail}
              allData={this.props.allData}
              setBookingDetail={this.setBookingDetail}
              activeTab={this.state.activeTab}
              changeTab={this.changeTab}
            />
          </TabPanel>
          <TabPanel>
            <TimeTab
              selectionStaff={this.props.selectionStaff}
              reserve_id={this.props.reserve_id}
              updateTabs={this.updateTabs}
              allData={this.props.allData}
              settings={settings}
              bookingDetail={this.state.bookingDetail}
              setBookingDetail={this.setBookingDetail}
              days={days}
              changeTab={this.changeTab}
            />
          </TabPanel>
          <TabPanel>
            <InfoTab
              updateTabs={this.updateTabs}
              allData={this.props.allData}
              changeTab={this.changeTab}
              bookingDetail={this.state.bookingDetail}
              setBookingDetail={this.setBookingDetail}
              Decrement={this.Decrement}
              Increment={this.Increment}
              count={this.state.count}
            />
          </TabPanel>
          <TabPanel>
            <BookedTab
              changeTab={this.changeTab}
              bookingDetail={this.state.bookingDetail}
              booked={this.state.booked}
              Decrement={this.Decrement}
              resetBookingDetail={this.resetBookingDetail}
              Increment={this.Increment}
              count={this.state.count}
              showEnd={this.showEnd}
            />
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

export default WizardFrom;
