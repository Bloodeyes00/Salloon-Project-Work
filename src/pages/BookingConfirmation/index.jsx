import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
import Header from '../../Componet/Headers/Header'
import {ImList2} from 'react-icons/im'
import bookingimg from '../../assets/imge/booking.png'
import { Link } from 'react-router-dom'

class BookingConfirmation extends Component {
    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth', })
    
    }
    render () {
        return (
            <>
                <div className='bgDarkHeader'>
                    <Header />
                </div>
                <div className="main_booking">
                    <div className="container">
                        <div className="booking_box">
                            <div className="booking_img">
                                <img src={bookingimg} alt="" className="img-fluid" />
                            </div>
                            <div className="booking_data">
                                <div className="booking_title">
                                    <h1>Congratulations !</h1>
                                    <h3>Your appointment booking is done successfully</h3>
                                </div>
                                <div className="booking_statements">
                                    <h5>You can view the Appointment booking <br />
                                        into the <a href="#">Appointments</a> Section</h5>
                                </div>
                                <div className="booking_btns">
                                    {/* <button type="button" className="btn btn-primary">See Appointments < ImList2 /> </button> */}
                                    <Link to="/appointments" className="btn btn-primary" >See Appointments </Link>
                                    <Link to="/"  className="back_btn" >Return to Home Page</Link>
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
export default BookingConfirmation