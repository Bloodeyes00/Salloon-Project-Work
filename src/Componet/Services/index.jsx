import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";
import colapse_icon from "../../assets/imge/womans_hair_200px.png";
import colapse_icon2 from "../../assets/imge/straight_razor_200px.png";
import colapse_icon3 from "../../assets/imge/barbershop5.png";
import colapse_icon4 from "../../assets/imge/makeup_100px.png";
import colapse_icon5 from "../../assets/imge/hair_dryer_240px.png";
import { Tab, Tabs } from "react-bootstrap";
import { HiOutlineChevronDown } from "react-icons/hi";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
    };
  }

  updateTabe = (value) => {
    if (value.activeTab == this.state.activeTab) {
      this.setState({ activeTab: null });
    } else {
      this.setState({ activeTab: value.activeTab });
    }
  };

  render() {
    let { activeTab } = this.state;
    return (
      <>
        <div className="main_servies_tabs">
          <div className="main_header_name_tabs">
            <h3>Services</h3>
          </div>

          <Tabs
            defaultActiveKey="Services"
            id="uncontrolled-tab-example"
            className="services_tabs"
          >
            <Tab eventKey="Services" title="Services">
              <Accordion className="privacyContainer" defaultActiveKey="0">
                {this.props.data &&
                  this.props.data.map((data, index) => {
                    return (
                      <Card
                        className={`${activeTab == index ? "tabActive" : ""}`}
                      >
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={`1${index}`}
                        >
                          <div
                            className="custom_head_collapse"
                            onClick={() => {
                              this.updateTabe({ activeTab: index });
                            }}
                          >
                            <div className="main_services_cards">
                              <div className="servuces_cards_image">
                                <div className="collapse_img">
                                  {data.Icon ? (
                                    <img
                                      src={`${process.env.REACT_APP_BASE_URL}/${data.Icon}`}
                                      alt="image"
                                      className="img-fluid"
                                    />
                                  ) : (
                                    <img
                                      src={this.props.noImage}
                                      alt="noimage"
                                    />
                                  )}
                                </div>
                                <div className="collapse_titles">
                                  <p>Service Type</p>
                                  <h3>{data.Category.title}</h3>
                                </div>
                              </div>

                              <div className="chevron_icons_serv">
                                <HiOutlineChevronDown />
                              </div>
                            </div>
                          </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={`1${index}`}>
                          <Card.Body className="adjust_padding">
                            <div className="description_collapse">
                              <div className="main_custom_chk_desri">
                                {data.services &&
                                  data.services.map((data1) => {
                                    return (
                                      <div className="custom_ceckbox_description">
                                        <div class="form-group mb-0">
                                          <input type="checkbox" id="2" />
                                          <label htmlFor="2"></label>
                                        </div>
                                        <div className="name_checkbox">
                                          <h3>
                                            {data1.Name}, {data1.Time_required}{" "}
                                            min
                                          </h3>
                                          <p>{data1.Description}</p>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );
                  })}
              </Accordion>
            </Tab>
            {/* <Tab eventKey="Package & Offers" title="Package & Offers" className="add_border">

                    </Tab>
                    <Tab eventKey="Price Table" title="Price Table">

                    </Tab> */}
          </Tabs>
        </div>
      </>
    );
  }
}

export default Services;
