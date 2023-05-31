import React, { Component } from 'react' 
import { FaCalendarAlt, FaLaptopCode, FaCheck, FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import errowImge from '../assets/imge/newimages/errowImge.png'
import errorIcons from '../assets/imge/errorIcons.png'
class OurTable extends Component {
  render() {
    return (
      <>
        <section className="bg-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-4 d-lg-block d-none px-0">
                <div className="pricingTable">
                  <div className="PirceHeader"></div>
                  <ul className="rounded-left">
                    <li>
                      <span>Included bookings</span>
                    </li>
                    <li>
                      <span>Custom Features</span>
                    </li>
                    <li>
                      <span>Users/ Providers</span>
                    </li>
                    <li>
                      <span>Admin App</span>
                    </li>
                    <li>
                      <span>Client App</span>
                    </li>
                    <li>
                      <span>Booking Website</span>
                    </li>
                    <li>
                      <span>Booking Widget</span>
                    </li>
                    <li>
                      <span>Directory Listing</span>
                    </li>
                    <li>
                      <span>Sales POS</span>
                    </li>
                    <li>
                      <span>Link Removal</span>
                    </li>
                    <li>
                      <span>HIPAA</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 px-lg-0 px-md-0">
                <div className="pricingTable hover hilight">
                  <div className="PirceHeader">
                    <div>
                      <h3>FRee</h3>
                    </div>
                  </div>
                  <ul className="text-center">
                    <li>
                      <span className="text-d">Included bookings</span>
                      <span>50</span>
                    </li>
                    <li>
                      <span className="text-d">Custom Features</span>
                      <span>01</span>
                    </li>
                    <li>
                      <span className="text-d">Users/ Providers</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Admin App</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Client App</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Website</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Widget</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Directory Listing</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Sales POS</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Link Removal</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">HIPAA</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 px-lg-0 px-md-0">
                <div className="pricingTable hover">
                  <div className="PirceHeader">
                    <div>
                      <h3>Basic</h3>
                      <div className="pirceDetials">
                        <div>
                          <h2>$9.99/ </h2>
                        </div>
                        <div>
                          <small>per month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="text-center">
                    <li>
                      <span className="text-d">Included bookings</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span className="text-d">Custom Features</span>
                      <span>03</span>
                    </li>
                    <li>
                      <span className="text-d">Users/ Providers</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Admin App</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Client App</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Website</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Widget</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Directory Listing</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Sales POS</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Link Removal</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">HIPAA</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 px-lg-0 px-md-0">
                <div className="pricingTable hover hilight">
                  <div className="PirceHeader">
                    <div>
                      <h3>Standard</h3>
                      <div className="pirceDetials">
                        <div>
                          <h2>$29.9/ </h2>
                        </div>
                        <div>
                          <small>per month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="text-center">
                    <li>
                      <span className="text-d">Included bookings</span>
                      <span>500</span>
                    </li>
                    <li>
                      <span className="text-d">Custom Features</span>
                      <span>08</span>
                    </li>
                    <li>
                      <span className="text-d">Users/ Providers</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Admin App</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Client App</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Website</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Widget</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Directory Listing</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Sales POS</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Link Removal</span>
                      <span className="tick-danger">
                        <FaTimes />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">HIPAA</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 px-lg-0 px-md-0">
                <div className="pricingTable hover">
                  <div className="PirceHeader">
                    <div>
                      <h3>Premium</h3>
                      <div className="pirceDetials">
                        <div>
                          <h2>$59.9/ </h2>
                        </div>
                        <div>
                          <small>per month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="text-center rounded-right">
                    <li>
                      <span className="text-d">Included bookings</span>
                      <span>20000</span>
                    </li>
                    <li>
                      <span className="text-d">Custom Features</span>
                      <span>Unlimited</span>
                    </li>
                    <li>
                      <span className="text-d">Users/ Providers</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Admin App</span>
                      <span>Branded</span>
                    </li>
                    <li>
                      <span className="text-d">Client App</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Website</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Booking Widget</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Directory Listing</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Sales POS</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">Link Removal</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                    <li>
                      <span className="text-d">HIPAA</span>
                      <span className="tick-success">
                        <FaCheck />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-12">
                <div className="tableViewMoreContainer">
                  <div className="d-flex justify-content-center">
                    {/* <div>
                                 <Link className='btnthem px-5' to='#link'>View all plans</Link>
                            </div> */}
                  </div>
                  <div>
                    <div className="animatedImges">
                      <img src={errowImge} alt="sdf" />
                      <img src={errorIcons} alt="sdf" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
      </>
    );
  }
}
export default OurTable;
