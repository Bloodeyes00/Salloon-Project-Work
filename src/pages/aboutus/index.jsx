import React, { Component } from 'react'
import Header from '../../Componet/Headers/Header'
import { MdLocationOn } from 'react-icons/md'
import aboutbanner from '../../assets/imge/newimages/abuot.png'
import mapabout from '../../assets/imge/aboutmap.png'
import aboutimgbox from '../../assets/imge/aboutimg.png'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import Footer from '../../Componet/Footer/Footer'
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng, } from 'react-places-autocomplete';
import LandingPage from "../../api/landingPage"
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import hiwimg from '../../assets/imge/newimages/Group 21096.png'
import about1 from '../../assets/imge/newimages/istockphoto-169951897-612x612.png'
import about2 from '../../assets/imge/newimages/Online-booking-blog-hero.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

class AboutUS extends Component {
  constructor(props) {
    super(props)
    AOS.init({
    });

  }

  state = {
    address: null,
    lat: "",
    lng: "",
    saloons: null
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }
  handleChange = address => {
    this.setState({ address });
    this.handleSelect(address)
  };

  handleSelect = address => {
    this.setState({ address })
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ lat: latLng.lat, lng: latLng.lng }))
      .catch(error => console.error('Error', error));
  };
  locationSearch = async () => {
    ("faisal")
    let { lat, lng } = this.state
    let data = {
      "coordinates": [
        lng,
        lat
      ],
      "maxDistance": 500000
    }
    LandingPage.nearBySaloon(data).then((res) => {
      if (res.data.Error == false) {
        this.setState({
          saloons: res.data.data
        })
      }
    })
  }
  render() {

    return (
      <>
        <div className='bgDarkHeader'>
          <Header />
        </div>
        <div className="banner_about">
          <div className="banner_img" style={{ backgroundImage: `url('${aboutbanner}')` }}>
            <div className="banner_text">
              <div className="inner_content_abbner">
                <h1>ABOUT us</h1>
                <p>Through our website and app, Salloon connects customers with salons and spas. The company was
                  founded in February 2020 in Kolding, Denmark, and was initially published for the
                  Danish market. <br />
                  <br /> As a company that provides an online meeting place for customers and businesses, we ensure that
                  both benefit from our offerings. We provide a complete solution for businesses, allowing them to
                  become more visible to their target customers, promote their services and products, and improve
                  their scheduling and efficiency.  <br /> <br /> Customers can search for services and salons, and a list of salons in their area that match their
                  criteria will be displayed. With the help of a list of recommended salons nearby, a pricing list of
                  salon's services, and reviews from other customers, the customer can easily  choose the most
                  suitable salon and service. </p>
              </div>

            </div>
          </div>
        </div>
        <div className=" main_container_about abcd">
          <div className="row ">
            <div className="col-md-6 d-flex align-items-center" data-aos="fade-right" data-aos-duration="2000">
              <div className="about_text_main_img">
                <div className="text_about">
                  <h2>Our mission</h2>
                  <p>Our mission is to connect customers and salons by
                    making it easy for customers to find and book salon
                    services online, while also improving businesses'
                    visibility and efficiency.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0" data-aos="fade-left" data-aos-duration="2000" >
              <div className="about_img">
                <img src={about1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 p-0 order-lg-1 order-2  " data-aos="fade-right" data-aos-duration="2000">
              <div className="about_img">
                <img src={about2} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center order-lg-2 order-1 " data-aos="fade-left" data-aos-duration="2000" >
              <div className="about_text_main_img2">
                <div className="text_about">
                  <h2>Our vision</h2>
                  <p>Our vision is to become the most convenient
                    international online meeting point for customers and
                    salons to enjoy our benefits and create memorable
                    experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="main_heading_hiw">
            <div className="hiw_heading">
              <h3>How It <span>Works</span> !</h3>
            </div>
            <div className="hiw_img" data-aos="zoom-in" data-aos-duration="1000" >
              <img src={hiwimg} alt="" className="img-fluid" />

            </div>
          </div>
        </div>

        < Footer />

      </>
    )
  }
}

export default withRouter(AboutUS)