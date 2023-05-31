import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
// import Header from '../../Componet/Headers/Header'
import BookBg from '../../assets/imge/bookbanner.png'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Slider from "react-slick";
import slider_img_book from '../../assets/imge/book_slider.png'
import slider_img_book2 from '../../assets/imge/slider_img2.png'
import slider_img_book3 from '../../assets/imge/Group 1007.png'
import slider_img_book4 from '../../assets/imge/Group 1006.png'
import checkTick from '../../assets/imge/checkTick.png'
import { Moment } from 'react-moment';
import Api from '../../api/landingPage'
import Loaders from '../../Componet/PlaceHolder'
import TimeSlots from 'time-slots-generator'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ACTIONS from '../../store/actions/index';
import CartApi from '../../api/cart'
import { Modal , Button } from 'react-bootstrap';




class BookAppointment extends Component {
    constructor(props) {
        super();
        this.state = {
            Staff: [],
            Hours: {},
            Slots: [],
            soloon_id:"",
            SpecialistLoader: false,
            saveBookingLoader:false,

            date: "",
            specialist: "",
            time: "",
            service: [],
            checkedService: [],
            saloon:{},
            staffData:null,
            cartModal:false
        }
    }

    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth', })
        this.setState({
            Staff: this.props.data.Staff,
            Hours: this.props.data.Saloon.Hours,
            soloon_id: this.props.data.Saloon._id,
            saloon:this.props.data.Saloon
        })
    }


    updateSlots = (date) => {
        var d = new Date(date);
        let index = d.getDay()
        if (index == 0 || index == 6) {

            let TimePeriods = this.state.Hours.sat_to_sunday;
            let starttime = this.convertTime12to24(TimePeriods.open);
            let endtime = this.convertTime12to24(TimePeriods.close);

            let start_time = this.parseTime(starttime),
                end_time = this.parseTime(endtime),
                interval = 30;

            let times_ara = this.calculate_time_slot(start_time, end_time, interval);


            this.setState({ Slots: times_ara })
        } else {

            let TimePeriods = this.state.Hours.mon_to_friday;
            let starttime = this.convertTime12to24(TimePeriods.open);
            let endtime = this.convertTime12to24(TimePeriods.close);

            let start_time = this.parseTime(starttime),
                end_time = this.parseTime(endtime),
                interval = 30;

            let times_ara = this.calculate_time_slot(start_time, end_time, interval);


            this.setState({ Slots: times_ara })
        }


    }

    parseTime = (s) => {
        var c = s.split(':');
        return parseInt(c[0]) * 60 + parseInt(c[1]);
    }

    convertHours = (mins) => {
        var hour = Math.floor(mins / 60);
        var mins = mins % 60;
        var converted = this.pad(hour, 2) + ':' + this.pad(mins, 2);
        return converted;
    }

    pad = (str, max) => {
        str = str.toString();
        return str.length < max ? this.pad("0" + str, max) : str;
    }

    calculate_time_slot = (start_time, end_time, interval = "30") => {
        var i, formatted_time;
        var time_slots = new Array();
        for (var i = start_time; i <= end_time; i = i + interval) {
            formatted_time = this.convertHours(i);

            let [hours, minutes] = formatted_time.split(':');
            let day = 'am'
            if (hours >= 12) {
                day = 'pm'
            }
            if (hours > 12) {
                hours = hours - 12
            }
            time_slots.push(`${hours}:${minutes} ${day}`);
        }
        return time_slots;
    }

    convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');

        let [hours, minutes] = time.split(':');

        if (hours === '12') {
            hours = '00';
        }

        if (modifier === 'pm') {
            hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}`;
    }

    updateService = (data) => {
        if (!this.state.checkedService.includes(data)) {
            this.setState({ checkedService: [...this.state.checkedService, data] })
        } else {
            let index = this.state.checkedService.findIndex(e => e == data)
            let slectedList = this.state.checkedService
            slectedList.splice(index, 1)
            this.setState({ checkedService: slectedList })
        }
    }




    // *********************************
    slectSpecialist = (data_id) => {
        // let object = this.state.bookingForm.
        // object.specialist = data_id;
        // this.setState({ bookingForm: object })
        if (data_id !== this.state.specialist) {
            let datas = {
                date: this.state.date,
                id: data_id
            }
            this.setState({ SpecialistLoader: true, specialist: data_id, time: "" })
            // updaing services
            let filters = this.state.Staff.filter(data => {
                return data._id == data_id
            })
            this.setState({ service: filters[0].Services })
            // updaing services

            Api.getstaffbooking(datas).then(res => {

                let bookedSlots =   res.data.Data.map(data=>{
                    return data.Time_Slot
                })

                this.setState({ SpecialistLoader: false, bookedSlots: bookedSlots })
                this.updateSlots(this.state.date)
            }).catch(error => {

            })
        }

    }
    // *********************************

    booking = ()=>{
        let services=[]
        this.state.checkedService.map((data)=>{
            this.state.service.map((data1)=>{
                if(data==data1._id){
                  services.push(data1)
                }
            })
        })
        let data = {
            Saloon: this.state.saloon,
            Services: services,
            Staff: this.state.staffData,
            Appointment_Date: this.state.date,
            Time_Slot: this.state.time
        }
                let object = {
            Saloon: this.state.soloon_id,
            Services: this.state.checkedService,
            Staff: this.state.specialist,
            Appointment_Date: this.state.date,
            Time_Slot: this.state.time
        }
        if(this.props.cart.Saloon){
            if(this.props.cart.Saloon._id==this.state.soloon_id){
                this.props.addServices(data)
                CartApi.addCartApi(object).then((res) => {

                    this.props.history.push("/paymentcard")
                 })
            }else{
               this.setState({
                   cartModal:true
               })
            }
        }else{
            this.props.addServices(data)
            CartApi.addCartApi(data).then((res) => {

                this.props.history.push("/paymentcard")

             })
        }

        let object1 = {
            Saloon: this.state.soloon_id,
            Services: this.state.checkedService,
            Products:[],
            Staff: this.state.specialist,
            Appointment_Date: this.state.date,
            Time_Slot: this.state.time
        }
        // this.setState({ saveBookingLoader: true, })
        // Api.addbooking(object).then(res=>{
        //     (res)
        //     if(res.data.Error==false){
        //         this.props.history.push('/bookinginfo')
        //     }
        //     this.setState({ saveBookingLoader:false,})
        // }).catch(error=>{
        //     (error)
        // })
        (object)
    }

    removeCartModal=()=>{
        this.props.removeAllProducts()
        CartApi.emptyCart().then(res => {
          
        })
        this.setState({
           cartModal:false
        })
     }

    render() {

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <span className='slickErrow right'><HiChevronRight /></span>,
            prevArrow: <span className='slickErrow left'><HiChevronLeft /></span>,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <>
                {/* <div className='bgDarkHeader'>
                    <Header />
                </div> */}
                {/* {this.this.state.Staff} */}
                {/* {JSON.stringify(this.state.Hours, null, 2)} */}
                <div className="change_bg">
                    <div className="container">
                        <div className='row'>
                            <div className='col-12'>
                                <div className="booked_content">
                                    <div className="book_date">
                                        <div className="select_date">
                                            <p>Select your Date</p>
                                            <input
                                                onChange={(e) => {
                                                    this.setState({
                                                         date: e.target.value,
                                                         time:"",
                                                        specialist:""
                                                        })

                                                }}
                                                value={this.state.date}
                                                type="date" />
                                            {/* < FaRegCalendarAlt /> */}
                                        </div>
                                    </div>
                                    {/* {JSON.stringify(this.state.bookedSlots, null, 2)} */}
                                    {/* <pre>{JSON.stringify(this.state.service,null,2)}</pre> */}
                                    {this.state.date && <div className="specialist_listsing">
                                        <div className="specialist_title">
                                            <h4>Select your Specialist</h4>
                                        </div>
                                        {this.state.Staff.length == 0 ? (
                                            <div className='pb-4'>
                                                No Specialist found...
                                            </div>
                                        ):"" }
                                        <div className="specialist_slider">
                                            <Slider {...settings}>
                                                {this.state.Staff && this.state.Staff.map((data, index) => {
                                                    return (
                                                        <div className="main_parent_book"
                                                            onClick={() => {
                                                                this.slectSpecialist(data._id)
                                                                this.setState({
                                                                    staffData:data
                                                                })
                                                            }
                                                            }
                                                        >
                                                            <div className="img_main_Section_slder">
                                                                <img src={`${process.env.REACT_APP_BASE_URL}/${data.Staff_pic}`} alt="" className="img-fluid" />
                                                                {data._id == this.state.specialist ? (<div className='slectedItem'>
                                                                    <img src={checkTick} alt='Picture' />
                                                                </div>) : ""}

                                                                <div className="slider_content">
                                                                    <h3 className='pr-5'>
                                                                        {data.Name}
                                                                    </h3>
                                                                    <p> {data.Designation && data.Designation.title}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </Slider>
                                        </div>
                                    </div>
                                    }


                                </div>

                            </div>
                        </div>



                        {this.state.date && this.state.specialist && this.state.SpecialistLoader && (
                            <div className='mt-4'>
                                <Loaders />
                            </div>
                        )}

                        {this.state.date && this.state.specialist && !this.state.SpecialistLoader && (<>

                            <div className="slots_booking">
                                <div className="title_slots">
                                    <h3>Available Slots</h3>
                                </div>
                                {/* {JSON.stringify(this.state.time,null,2)} */}
                                <div className="slots_listing">
                                    <div className="start_listing_slots">
                                        {this.state.Slots.map(data => {
                                            return (<button type="button"
                                                onClick={() => {
                                                    if (!this.state.bookedSlots.includes(data)){
                                                        this.setState({ time: data })
                                                    }
                                                 }}
                                                className={`btn   ${this.state.bookedSlots.includes(data) ? "disable" : this.state.time == data ? "active" : ""}`}>
                                                    {data}
                                                    </button>)
                                        })}


                                    </div>
                                </div>
                            </div>
                            {/* {JSON.stringify(this.state.checkedService, null, 2)} */}
                            {this.state.time && (
                                <div className="choose_services">
                                    <div className="ch_title">
                                        <h3>Choose your Services</h3>
                                    </div>
                                    <div className="row">
                                        {this.state.service.map(data => {
                                            return (
                                                <div className="col-md-3"
                                                    onClick={() => { this.updateService(data._id)}}
                                                >
                                                    <div className="main_checkbox">
                                                        {this.state.checkedService.includes(data._id) && (
                                                        <div className='Checked'><img src={checkTick} alt='Picture' /></div>
                                                        )}
                                                        {!this.state.checkedService.includes(data._id) && (
                                                            <div><div className='unChecked'></div></div>
                                                        )}

                                                        <div>{data.Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.Price}{data.Prefix}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>

                            )}

                        </>
                        )}
                        {this.state.date && this.state.specialist && this.state.time && !this.state.SpecialistLoader && (
                            <div className="book_appoiint">
                                {!this.state.saveBookingLoader && <button type="button" className="btn btn-primary"
                                    onClick={() => this.booking()}
                                // onClick={() => this.props.history.push('/bookinginfo')}
                                >Book Appointment</button>}
                                {this.state.saveBookingLoader && <button type="button" className="btn btn-primary"
                                    // onClick={() => this.booking()}
                                // onClick={() => this.props.history.push('/bookinginfo')}
                                >Loading....</button>}

                            </div>
                        )}


                    </div>

                    {/* <Footer /> */}
                </div>
                <Modal  show={this.state.cartModal} onHide={()=>{this.setState({cartModal:false})}} className="custom_modal_setting">
                <Modal.Header closeButton>
                    <Modal.Title className="billing_modal_title"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_form_main">
                        <div className="billing_form">
                          <p>You have already selected products from a different Saloon.if you continue your cart and selection will be removed</p>
                            <div className="submit_payemnt_btn text-right mt-5">
                                <button onClick={this.removeCartModal} className="btn btn-primary mr-5">Continue</button>
                                <button onClick={()=>{this.setState({cartModal:false})}} className="btn btn-primary">Cancel</button>

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
        addServices: (data) => {
            dispatch(ACTIONS.addServices(data))
         },
         removeAllProducts: () => {
            dispatch(ACTIONS.removeAllProducts())
         }
    }
 }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookAppointment))