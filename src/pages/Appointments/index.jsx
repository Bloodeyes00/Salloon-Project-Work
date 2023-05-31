import React from "react";
import { Component } from "react";
import Footer from "../../Componet/Footer/Footer";
import Header from "../../Componet/Headers/Header";
import appointment_img from "../../assets/imge/appointment.png";
import { AiFillStar } from "react-icons/ai";
import { Tabs, Tab } from "react-bootstrap";
import Api from "../../api/landingPage";
import ReactPaginate from "react-paginate";
import ReactStars from "react-rating-stars-component";
import BookingsPlaceholder from "../../Componet/BookingsPlaceholder";
import img from "../../assets/imge/74-745904_beauty-personal-care-products.jpg";

class AppointMents extends Component {
  constructor() {
    super();
    this.state = {
      apiLoader: true,
      data: [],
      pageCount: 1,
      ratings: 0,
      pageNumber: 0,
      totalItem: "",
      CustomTabs: 1,
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.getAppointments("all");
  }

  getAppointments = (status) => {
    if (status == "all") {
      Api.getBookings()
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, data: res.data.Data });
          }
        })
        .catch((error) => {});
    } else if (status == "upcoming") {
      let data = {
        Status: "Upcoming",
      };
      Api.getBookings(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, data: res.data.Data });
          }
        })
        .catch((error) => {});
    } else if (status == "completed") {
      let data = {
        Status: "History",
      };
      Api.getBookings(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, data: res.data.Data });
          }
        })
        .catch((error) => {});
    } else if (status == "cancelled") {
      let data = {
        Status: "Cancelled",
      };
      Api.getBookings(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, data: res.data.Data });
          }
        })
        .catch((error) => {});
    }
  };
  handlePageClick = (page) => {
    this.setState({
      pageNumber: page.selected,
    });
    setTimeout(() => {
      this.getAppointments();
    }, 200);
  };

  // handleTab = () => {
  //     this.setState ({
  //         CustomTabs: 2
  //     })
  // }

  render() {
    return (
      <>
        <div className="bgDarkHeader">
          <Header />
        </div>

        <div className="container">
          <div className="py-3">
            <div>
              <h2 className="font-weight-bold">My Bookings</h2>
            </div>
          </div>
        </div>

        <div className="d-flex">
          {/* <button  onClick={() => this.setState ({ CustomTabs : 1 })}>1</button> */}
        </div>

        <div className="main_custom_tabs">
          <div className="booking_custom_tabb">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    this.setState({ CustomTabs: 1 });
                    this.getAppointments("all");
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    this.setState({ CustomTabs: 2 });
                    this.getAppointments("upcoming");
                  }}
                >
                  TODAY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    this.getAppointments("completed");
                    this.setState({ CustomTabs: 3 });
                  }}
                >
                  WEEKLY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    this.getAppointments("cancelled");
                    this.setState({ CustomTabs: 4 });
                  }}
                >
                  MONTHLY
                </a>
              </li>
            </ul>
          </div>
        </div>
        {this.state.apiLoader && <BookingsPlaceholder />}
        {!this.state.apiLoader && (
          <>
            <div className="container">
              {this.state.data.length == 0 ? (
                <h4 className="mb-5">No Records Found</h4>
              ) : (
                ""
              )}
              {this.state.data.map((data, index) => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <div className="main_tabs">
                        <div className="main_appointmen_listing">
                          <div className="start_appointemnt">
                            <div className="appoint_img">
                              {/* <img src={`${process.env.REACT_APP_BASE_URL}/${data.Saloon && data.Saloon.Profile_Pic}`} alt="" className="img-fluid" /> */}
                              <img src={img} alt="" className="img-fluid" />
                            </div>
                            <div className="appointment_name">
                              <h3>{data.Saloon && data.Saloon.Name}</h3>
                              <p>
                                {" "}
                                {data.Saloon &&
                                  data.Saloon.Address &&
                                  data.Saloon.Address.Address}
                                ,
                                {data.Saloon &&
                                  data.Saloon.Address &&
                                  data.Saloon.Address.City}
                                ,
                                {data.Saloon &&
                                  data.Saloon.Address &&
                                  data.Saloon.Address.State}
                              </p>
                              <div className="apoointment_id">
                                <p>Appointment ID:</p>
                                <h3>#{data.Appointment_Id}</h3>
                              </div>
                            </div>
                            <div className="appoitnmet_timedate">
                              <div className="appointment_time">
                                <p>
                                  {data.Time_Slot &&
                                    data.Time_Slot.split(" ")[0]}
                                </p>
                                <span>
                                  {data.Time_Slot &&
                                    data.Time_Slot.split(" ")[1]}
                                </span>
                                <h5>Services:</h5>
                              </div>
                              <div className="apppoin_date">
                                <div className="dtae_appoint">
                                  <p>
                                    {data.Appointment_Date &&
                                      data.Appointment_Date.split("-")[2]}
                                  </p>
                                  <span>
                                    {data.Appointment_Date &&
                                      data.Appointment_Date.split("-")[1]}
                                    ,
                                    {data.Appointment_Date &&
                                      data.Appointment_Date.split("-")[0]}
                                  </span>
                                  <div className="d-flex flex-wrap aling_to_bottom_app">
                                    {/* ------- commit data start---------
                                                                        {data.Services && data.Services.map((datas, index) => {
                                                                            return (<span className='px-0'>{index == 0 ? "" : ","}{datas.Name}</span>)
                                                                        })}
                                                                        ------- commit data end--------- */}

                                    <span className="px-0">
                                      {data.Services.Name}
                                    </span>
                                  </div>
                                </div>
                                <div className="appoint_rating">
                                  <p>
                                    {data.Saloon && data.Saloon.Rating
                                      ? data.Saloon.Rating
                                      : ""}
                                  </p>
                                  <ReactStars
                                    count={5}
                                    edit={false}
                                    value={
                                      data.Saloon && data.Saloon.Rating
                                        ? data.Saloon.Rating
                                        : ""
                                    }
                                    size={26}
                                    activeColor="#F9D63E"
                                    isHalf={true}
                                  />
                                  {/* ------- commit data start---------

                                                                    < AiFillStar />
                                                                    < AiFillStar />
                                                                    < AiFillStar />
                                                                    < AiFillStar />
                                                                    < AiFillStar className="not_fill" />

                                                                            ------- commit data end--------- */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${
                              data.Status == "Cancelled" ? "cencledClass" : ""
                            } ${
                              data.Status == "Pending" ? "changebgcolor" : ""
                            } appointments_status`}
                          >
                            <div className="innder_data_status">
                              <h5>Status</h5>
                              {data.Status == "Pending" ? (
                                <p style={{ color: "red" }}>{data.Status}</p>
                              ) : (
                                <p>{data.Status}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ------- commit data start---------


                        <div className="mt-5 mb-4">
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            forcePage={this.state.pageNumber}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                        </div>

                        ------- commit data end--------- */}
          </>
        )}

        <Footer />
      </>
    );
  }
}

export default AppointMents;
