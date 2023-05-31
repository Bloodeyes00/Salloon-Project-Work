import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
import Header from '../../Componet/Headers/Header'
import feat1 from '../../assets/imge/Path 28705.png'
import feat2 from '../../assets/imge/system.png'
import feat3 from '../../assets/imge/collaboration.png'
import booking_img from '../../assets/imge/Group 20483.png'
import {RiSendPlaneLine} from 'react-icons/ri'
import cs_1 from '../../assets/imge/speech-bubble.png'
import cs_2 from '../../assets/imge/gift.png'
import cs_3 from '../../assets/imge/reaction.png'
import cs_4 from '../../assets/imge/database.png'
import cs_5 from '../../assets/imge/Group 20516.png'
import mobile_try from '../../assets/imge/Group 20651.png'
import smart1 from '../../assets/imge/booking.png'
import smart2 from '../../assets/imge/bell.png'
import smart3 from '../../assets/imge/online-appointment.png'
import smart4 from '../../assets/imge/bullhorn.png'
import img_track from '../../assets/imge/Group 20648.png'
import arrow_left from '../../assets/imge/Group 20609.png'
import arrow_text from '../../assets/imge/text.png'


class Features extends Component {
    

    
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    render () {
        return (
            <>
                <div className='bgDarkHeader'>
                    <Header />
                </div>

                <div className="fetaure_main">
                    <div className="container">
                        <div className="feature_tilte text-center">
                            <h2>
                                Features & Integration
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <a href="#management" className="mian_managelinks">
                                    <div className="main_img_feat text-center">
                                        <img src={feat1} alt="" className="img-fluid" />
                                        <p>Customer Management</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#System" className="mian_managelinks">
                                    <div className="main_img_feat text-center">
                                        <img src={feat2} alt="" className="img-fluid" />
                                        <p>Smart System</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#Employees" className="mian_managelinks">
                                    <div className="main_img_feat text-center">
                                        <img src={feat3} alt="" className="img-fluid" />
                                        <p>Track Employees</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="dynamic_booking">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left_img_book">
                                        <img src={booking_img} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heading_bookinbg">
                                        <h2>Dynamic Booking & <br />
                                            Business Management Solution</h2>
                                            <p>Explore the range of features that make Salloon.com the best 
                                                online booking and management system for businesses of any 
                                                size and industry. Salloon.com offers over 60 custom features 
                                                to help you attract new clients, nurture your current ones and 
                                                manage your business like a pro!</p>
                                                <div className="buy_btn">
                                                    <button type="button" className="btn" >Buy Now < RiSendPlaneLine /> </button>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer_management" id="management">
                        <div className="title_customer_manage text-center">
                            <h2><span>Customer</span> Management</h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="customer_manage_img text-center">
                                        <img src={cs_1} alt="" className="img-fluid" />
                                        <h2>Communication</h2>
                                        <p>Business and the customer have the opportunity to communicate directly via the app.
                                             Whether there are questions about the booking, 
                                            services or products, Salloon helps in providing answers faster and efficiently.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="customer_manage_img text-center">
                                        <img src={cs_2} alt="" className="img-fluid" />
                                        <h2>Offers/Free time slots</h2>
                                        <p>You have the opportunity to send your customers notifications about offers,
                                             discounts, free times/cancellation times and special events</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="customer_manage_img text-center">
                                        <img src={cs_3} alt="" className="img-fluid" />
                                        <h2>Receive feedback</h2>
                                        <p>Lift your business up with the help of ratings from your customers 
                                            to improve your service for existing customers and build trust for new customers</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="customer_manage_img text-center">
                                        <img src={cs_4} alt="" className="img-fluid" />
                                        <h2>Customer Database</h2>
                                        <p>You are always a click away from your customers. By knowing your customers, 
                                            fulfilling their needs is easy by sending them latest deals&offers customized specifically for them. </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="customer_manage_img text-center">
                                        <img src={cs_5} alt="" className="img-fluid" />
                                        <h2>Customer Support</h2>
                                        <p>Support@salloon.dk is ready to support and help you every day from 
                                            9:00 to 16:00.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="try_noe">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="img_try">
                                        <img src={mobile_try} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="img_try_des">
                                        <button type="button" className="btn">TRY NOW</button>
                                        <img src={arrow_left} alt="" className="img-fluid arrow_img" />
                                        <img src={arrow_text} alt="" className="img-fluid arrow_text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="smart_system" id="System">
                        <div className="container">
                            <div className="title_change_color text-center">
                                <h2><span>Smart</span> system</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img_smart text-center" data-aos = 'fade-up' data-aos-duration="2000">
                                        <img src={smart1} alt="" className="img-fluid" />
                                        <h2>Smart Calendar</h2>
                                        <p>Smart calendar has a simple and clear interface. It makes it easy and straightforward for you to 
                                            find your way around.With a smart calendar, you get an overview of your and your employees' bookings.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img_smart text-center">
                                        <img src={smart2} alt="" className="img-fluid" />
                                        <h2>Notifications</h2>
                                        <p>Notification will be sent directly to your salon as soon as a booking request is received.
                                             You have the option to accept or reject the booking. Unlimited number of bookings is included. </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img_smart text-center">
                                        <img src={smart3} alt="" className="img-fluid" />
                                        <h2>Online Booking</h2>
                                        <p>The customer can easily and quickly book an appointment on Salloon.dk or via our 
                                            SALLOON app.User-friendly interface that makes bookings management simple</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img_smart text-center">
                                        <img src={smart4} alt="" className="img-fluid" />
                                        <h2>Marketing</h2>
                                        <p>Your business will be made visible through our OMNI channels and therefore constantly exposed to 
                                            online traffic.The salons that perform best will be highlighted in
                                             search, so there will be an opportunity to achieve even more exposure in the region.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="track_employees" id="Employees">
                        <div className="container">
                            <div className="title_change_color text-center tracking_head">
                                <h2><span>Track</span> employees</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="track_img">
                                        <img src={img_track} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="track_data">
                                        <div className="track_listing">
                                            <h4>Performance</h4>
                                            <p>Keep track of all activities in your salon. Have an overview of employees' efforts, bookings,
                                                 sales and work schedule. Salloon offers an option for weekly work schedule availability to be visible, 
                                                in order to let customers choose prefered employee for their booking appointment</p>
                                        </div>
                                        <div className="track_listing">
                                            <h4>Economy</h4>
                                            <p>Ability to generate dynamic reports on a daily, weekly or yearly basis and compare 
                                                with historical data to illuminate progress or decline on specific working days, weeks and m.m.</p>
                                        </div>
                                        <div className="track_listing">
                                            <h4>Reminders</h4>
                                            <p>The customer has the opportunity to choose the type of booking reminder when they register on the platform.
                                                    With SALLOON's automatic reminder system, it is possible to be reminded of the booking appointment via salloon notification and email.</p>
                                        </div>
                                        <div className="track_listing">
                                            <h4>Payment</h4>
                                            <p>Payment is settled automatically after each completed booking at the store. Several forms of payment will be supported in
                                                 the near future so that your customers have the opportunity to pay with Dankort, Visa card and Mobilepay etc.</p>
                                        </div>
                                        <div className="track_listing">
                                            <h4>Schedule</h4>
                                            <p>Schedule is an essential part of well - organized business.
                                                 With Salloon, it is easy and fast to create a schedule for you and your employees.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />


            </>
        )
    }
}


export default Features 