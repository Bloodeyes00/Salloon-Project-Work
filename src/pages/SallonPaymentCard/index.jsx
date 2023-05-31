import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
import Header from '../../Componet/Headers/Header'
import payment_img from '../../assets/imge/payment_img.png'
import { FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa'
import map_s from '../../assets/imge/map.png'
import cash from '../../assets/imge/casho.png'
import visa from '../../assets/imge/visa.png'
import { connect } from 'react-redux'
import ACTIONS from '../../store/actions/index';
import { Modal, Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../checkout/CheckoutForm";
import moment from 'moment'

import Checkout from '../../api/checkout'


const PUBLIC_KEY = "pk_test_51JQslcLnbF7BsxGc12ixZM95mOTizy9pTg5y0cFC3PkyP0eBPtNv9jrVDpSVgTg9uPfrlCwGqD9s07VD5Gnpg4D000sJG4pMA0";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

class SallonPaymentCard extends Component {

    state = {
        show: false,
        AddFormshow: false,
        paymentModal: false,
        Coupon_loader: false,
        Coupon_code: "",
        Coupon_id: null,
        Coupon_codeEror: "",
        Coupon_codeStatus: "",
        showCopon: true,
        DiscountAmount: 0,
        totalPrice: 0,
    }


    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })



    }




    varifyCopon = () => {
        if (this.state.Coupon_code == "") {
            this.setState({
                Coupon_codeEror: "Enter code.",
                Coupon_codeStatus: "danger"
            })
        } else {
            this.setState({
                Coupon_codeEror: "",
                Coupon_codeStatus: "success",
                Coupon_loader: true
            })
            let data = {
                Coupon_code: this.state.Coupon_code,
                Saloon_id: this.props.cart.Saloon._id
            }
            Checkout.checkcoupon(data).then(res => {

                if (res.data.Error == true) {
                    this.setState({
                        Coupon_codeEror: res.data.msg,
                        Coupon_codeStatus: "danger",
                        Coupon_loader: false,
                    })
                } else {
                    let discount = 0
                    if (res.data.Data.Price) {
                        let message = `You got $${res.data.Data.Price} discount.`;
                        discount = res.data.Data.Price
                        this.setState({
                            Coupon_codeEror: message,
                            Coupon_codeStatus: "success",
                            Coupon_id: res.data.Data._id,
                            DiscountAmount: discount
                        })
                    } else {
                        let message = `You got %${res.data.Data.Percentage} discount.`;
                        discount = (res.data.Data.Percentage / 100) * this.state.totalPrice;
                        this.setState({
                            DiscountAmount: discount,
                            Coupon_codeEror: message,
                            Coupon_id: res.data.Data._id,
                            Coupon_codeStatus: "success",

                        })
                    }

                    this.setState({
                        // Coupon_codeEror: res.data.msg,
                        // Coupon_codeStatus: "success",
                        Coupon_loader: false,
                        showCopon: false,
                    })
                }

            }).catch(error => {
                if (error.response.data.Error == true) {
                    this.setState({
                        Coupon_codeEror: error.response.data.msg,
                        Coupon_codeStatus: "danger",
                        Coupon_loader: false,
                    })
                } else {
                    this.setState({
                        Coupon_codeEror: "Server error.s",
                        Coupon_codeStatus: "danger",
                        Coupon_loader: false,
                    })
                }

            })
        }

    }

    render() {
        var price = 0
        if (this.props.cart.Services) {
            this.props.cart.Services.Services.map((data) => {
                return price += parseInt(data.Price)
            })
        }
        if (this.props.cart.Products.length > 0) {
            this.props.cart.Products.map((data) => {
                return price += data.Price * data.quantity
            })
        }
        return (

            <>
                <div className='bgDarkHeader'>
                    <Header />
                </div>
                <div className="main_payment">
                    <div className="container">
                        <div className="page_title">
                            <h3 className="mt-3 mb-3 font-weight-bold">{this.props.cart.Saloon != null ? "Choose Payment Method" : "Cart is Empty"}</h3>
                        </div>
                        {this.props.cart.Saloon ?
                            <div className="row">
                                <div className="col-md-5">
                                    {
                                        ((this.props.cart.Products.length > 0) && (this.props.cart.Services)) || this.props.cart.Services == null ?
                                            <div className="image_section_payment">
                                                <img src={`${process.env.REACT_APP_BASE_URL}/${this.props.cart.Saloon.Profile_Pic}`} alt="" className="img-fluid" />

                                            </div>
                                            :
                                            <div className="image_section_payment">
                                                <img src={`${process.env.REACT_APP_BASE_URL}/${this.props.cart.Services.Staff.Staff_pic}`} alt="" className="img-fluid" />
                                                <div className="imae_p_title">
                                                    <h4>{this.props.cart.Services.Staff.Name} <br />
                                                    </h4>
                                                    <p>{this.props.cart.Services.Staff.Designation.title}</p>
                                                </div>
                                            </div>

                                    }

                                    <div className="select_pay_ser">
                                        {this.props.cart.Services != null ?
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="servies_pay">
                                                        <div className="tilte_pay">
                                                            <h3>Selected Services</h3>
                                                        </div>
                                                        <div className="pay_listing_icons">
                                                            {
                                                                this.props.cart.Services.Services && this.props.cart.Services.Services.map((data) => {
                                                                    return (
                                                                        <div className="icons_lkisting">
                                                                            < FaCheckCircle />
                                                                            <p>{data.Name}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="servies_pay">
                                                        <div className="tilte_pay">
                                                            <h3>Price</h3>
                                                        </div>
                                                        <div className="pay_listing_icons">
                                                            {
                                                                this.props.cart.Services.Services && this.props.cart.Services.Services.map((data) => {
                                                                    return (
                                                                        <div className="icons_lkisting">
                                                                            <p>{data.Price}$</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            ""
                                        }



                                        <div className="row">

                                            <div className="col-md-8">

                                                <div className="servies_pay">
                                                    {this.props.cart.Products.length > 0 ?
                                                        <>
                                                            <div className="tilte_pay">
                                                                <h3>Selected Products</h3>
                                                            </div>
                                                            <div className="pay_listing_icons">
                                                                {this.props.cart.Products && this.props.cart.Products.map((data) => {
                                                                    return (
                                                                        <div className="icons_lkisting">
                                                                            < FaCheckCircle />
                                                                            <p>{data.Name} ({data.quantity})</p>
                                                                        </div>
                                                                    )

                                                                })}
                                                            </div>
                                                        </>
                                                        :
                                                        ""
                                                    }


                                                    <div className="total_pay">
                                                        <p>Total</p>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="col-md-4">
                                                <div className="servies_pay">
                                                    <div className="tilte_pay">
                                                        <h3>Price</h3>
                                                    </div>
                                                    <div className="pay_listing_icons">
                                                        {this.props.cart.Products && this.props.cart.Products.map((data) => {
                                                            return (<div className="icons_lkisting">
                                                                <p>{data.Price * data.quantity}$</p>
                                                            </div>
                                                            )
                                                        })}

                                                        <div className="total_doll">
                                                            <p>{price - this.state.DiscountAmount}$</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <div className="col-md-7">
                                    <div className="content_pay">
                                        <div className="tilte_pay_top">
                                            <h2>{this.props.cart.Saloon.Name ? this.props.cart.Saloon.Name : ""}</h2>
                                            <p>{this.props.cart.Saloon.Address ? this.props.cart.Saloon.Address.Address : ""}</p>
                                            {/* <h5>10km away</h5> */}
                                        </div>
                                        <div className="map_pay">
                                            {
                                                this.props.cart.Services != null ?
                                                    <div className="pay_date">
                                                        < FaRegCalendarAlt />
                                                        <p>{moment(this.props.cart.Services.Appointment_Date).format('DD MMMM YYYY')} @ {this.props.cart.Services.Time_Slot}</p>
                                                    </div>
                                                    :
                                                    ""
                                            }

                                            <div className="map_direc">
                                                <img src={map_s} alt="" />
                                                {/* <h5>Get Directions</h5> */}
                                            </div>

                                            {this.state.showCopon && (
                                                <div className="couponContainer">
                                                    <p>Have A Coupon</p>
                                                    <div className="couponForm">
                                                        <div><input type="text"
                                                            onChange={(e) => {
                                                                let offPrice = price
                                                                this.setState({
                                                                    Coupon_code: e.target.value,
                                                                    totalPrice: offPrice
                                                                })
                                                            }}
                                                        /></div>
                                                        <div>
                                                            {this.state.Coupon_loader && (<button>Loading...</button>)}
                                                            {!this.state.Coupon_loader && (<button onClick={this.varifyCopon}  >Check</button>)}

                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <small className={`text-${this.state.Coupon_codeStatus}`}>{this.state.Coupon_codeEror}</small>
                                            <div className="payment_methods">
                                                {/* {
                                                        (this.props.cart.Products.length >0) &&(this.props.cart.Services==null)  ?
                                                            <div className="method_title">
                                                        <h6>Shipping Address</h6>
                                                        <a href="#" onClick={()=>{this.setState({show:true})}}>+Add Or Select</a>
                                                    </div>
                                                    :
                                                    ""
                                                    } */}

                                                {/* <div className="method_title">
                                                        <h6>Payment Method</h6>
                                                        <a href="#">+Add a New Card</a>
                                                    </div> */}
                                                <div className="buttons_delivery">
                                                    {/* <div className="main_delivery_btn">
                                                            <div className="card_pay_img">
                                                                <img src={cash} alt="" className="img-fluid" />
                                                                <p>Cash on Service</p>
                                                            </div>
                                                            <input type="radio" name="pay" id="" />
                                                        </div> */}
                                                    <div className="main_delivery_btn active_pay">
                                                        <div className="card_pay_img">
                                                            <img src={visa} alt="" className="img-fluid" />
                                                            <p>Credit/ Debit Card</p>
                                                        </div>
                                                        <input type="radio" name="pay" id="" checked />
                                                    </div>
                                                </div>
                                                <button onClick={() => { this.setState({ paymentModal: true }) }} className="pay_btn">Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""


                        }
                    </div>
                </div>

                < Footer />


                {/* Modal */}

                <Modal show={this.state.show} onHide={() => { this.setState({ show: false }) }} className="custom_modal_setting custom_width_boxes">
                    <Modal.Header closeButton>
                        <Modal.Title className="billing_modal_title">Billing Addresses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_boxes_billing">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="main_box_add_bill pointer" onClick={() => { this.setState({ AddFormshow: true }) }} >
                                        <div className="new_card_popup" >
                                            <AiOutlinePlus />
                                            <p>Add New Card</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="main_box_add_bill_saved">
                                        <div className="listing_previcous_boxes">
                                            <div className="details_saved">
                                                <h2>John Doe (Name Here) </h2>
                                                <p>Street Address Here</p>
                                                <p>Unit/Apt Here</p>
                                                <p>Town/City Here</p>
                                                <p>State Here</p>
                                                <p>Phone Number here</p>
                                            </div>
                                            <div className="saved_default_link">
                                                <a href="#">Set As Default</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="main_box_add_bill_saved">
                                        <div className="listing_previcous_boxes">
                                            <div className="details_saved">
                                                <h2>John Doe (Name Here) </h2>
                                                <p>Street Address Here</p>
                                                <p>Unit/Apt Here</p>
                                                <p>Town/City Here</p>
                                                <p>State Here</p>
                                                <p>Phone Number here</p>
                                            </div>
                                            <div className="saved_default_link">
                                                <a href="#">Set As Default</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="main_box_add_bill_saved">
                                        <div className="listing_previcous_boxes">
                                            <div className="details_saved">
                                                <h2>John Doe (Name Here) </h2>
                                                <p>Street Address Here</p>
                                                <p>Unit/Apt Here</p>
                                                <p>Town/City Here</p>
                                                <p>State Here</p>
                                                <p>Phone Number here</p>
                                            </div>
                                            <div className="saved_default_link">
                                                <a href="#">Set As Default</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>


                <Modal show={this.state.AddFormshow} onHide={() => { this.setState({ AddFormshow: false }) }} className="custom_modal_setting">
                    <Modal.Header closeButton>
                        <Modal.Title className="billing_modal_title">Add New Billing Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_form_main">
                            <div className="billing_form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">Street Address</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">Apt/Unit</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">Town/City</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">State</label>
                                            <select name="" id="" className="form-control">
                                                <option value="">Dummy</option>
                                                <option value="">Dummy</option>
                                                <option value="">Dummy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">Zip Code</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="main_div_inputs form_main">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="submit_payemnt_btn text-right">
                                    <button type="submit" className="btn btn-primary">Continue to Payment</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.paymentModal} onHide={() => { this.setState({ paymentModal: false }) }} className="custom_modal_setting">
                    <Modal.Header closeButton>
                        <Modal.Title className="billing_modal_title">Payment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_form_main">
                            <div className="billing_form">
                                <div className="row">
                                    <Elements stripe={stripeTestPromise}>
                                        <CheckoutForm totalprice={price} Coupon_id={this.state.Coupon_id ? this.state.Coupon_id : null} cart={this.props.cart} />
                                    </Elements>
                                    {/* <div className="col-md-12">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">Full Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">Street Address</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">Apt/Unit</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">Town/City</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">State</label>
                                        <select name="" id="" className="form-control">
                                            <option value="">Dummy</option>
                                            <option value="">Dummy</option>
                                            <option value="">Dummy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">Zip Code</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="main_div_inputs form_main">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>


            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.Cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addtoCart: (data) => {
            dispatch(ACTIONS.addCart(data))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SallonPaymentCard)