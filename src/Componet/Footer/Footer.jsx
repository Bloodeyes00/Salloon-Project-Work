import React from 'react'
import { Component } from 'react';
import {IoLogoInstagram} from 'react-icons/io'
import {FaFacebook, FaTiktok} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import ScrollToTop from "react-scroll-to-top";

import { ReactComponent as MySVG } from "../../assets/icon/up-arrow.svg";

import foter_logo from '../../assets/imge/partnerimage/Biglogo.png'
import { Link } from 'react-router-dom';
import {AiFillWechat} from 'react-icons/ai'
import applePlayStore from '../../assets/imge/apple.png'
import googleplayStore from '../../assets/imge/google.png'


class Footer extends Component {
    render () {
        return (
            <>
                <footer>
                    <div className="container-fluid">
                    <ScrollToTop smooth component={<MySVG />} />
                        <div className="main_footer">
                            <div className="row">
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="main_logo">
                                        <img src={foter_logo} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer_links_mani">
                                        <h4>Meet Salloon</h4>
                                        <ul>
                                            <li>
                                                <Link to="/aboutus">About Us</Link>
                                                <Link to="/">How It works</Link>
                                                <Link to="/careers">Careers</Link>
                                                <Link to="/">Terms & Conditions</Link>
                                                <Link to="/contactus">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer_links_mani">
                                        <h4>For Business</h4>
                                        <ul>
                                            <li>
                                                <Link to="/">For Partners</Link>
                                                <Link to="/">Features</Link>
                                                <Link to="/">Pricing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                        <div className="footer_links_mani">
                                            <h4>Subscribe to <br /> Our Newsletter</h4>
                                            <div className="newslatter">
                                                <div className="main_nlatter">
                                                    <label htmlFor="newslatter">Email</label>
                                                    <input type="email" id="newslatter" placeholder="Enter email address here..." />
                                                </div>
                                                </div>
                                                <button type="submit" className="newslatter_btn mt-2 mr-1">Subscribe</button>
                                            <div className="social_links_footer">
                                                <a href="#"> <IoLogoInstagram /> </a>
                                                <a href="#">< FaFacebook /></a>
                                                <a href="#"> < FaTiktok /> </a>
                                                <a href="#"> < FaLinkedinIn /> </a>
                                                <a href="#"> < GrYoutube /> </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                {/* <div className="row">
                                    <div className="col-md-3">
                                        <div className="head_footer_link">
                                            <h3>About <br /> Us</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Our Story</a>
                                                </li>
                                                <li>
                                                    <a href="#">Our Team</a>
                                                </li>
                                                <li>
                                                    <a href="#">Our CEO</a>
                                                </li>
                                                <li>
                                                    <a href="#">Beauty Blogs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Help & FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="#">How it Works</a>
                                                </li>
                                                <li>
                                                    <a href="#">Careers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Terms & Condition</a>
                                                </li>
                                                <li>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="head_footer_link">
                                            <h3>Customer <br /> Services</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Makeup & Hair</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bridal</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hair Styling</a>
                                                </li>
                                                <li>
                                                    <a href="#">Eyebrows</a>
                                                </li>
                                                <li>
                                                    <a href="#">Eyelashes</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hair Colour</a>
                                                </li>
                                                <li>
                                                    <a href="#">Nails</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hair Extension</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="head_footer_link">
                                            <h3>Available <br /> Locations</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Sydney</a>
                                                </li>
                                                <li>
                                                    <a href="#">Melbourne</a>
                                                </li>
                                                <li>
                                                    <a href="#">Brisbane</a>
                                                </li>
                                                <li>
                                                    <a href="#">Perth</a>
                                                </li>
                                                <li>
                                                    <a href="#">Canberra</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hobart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Adelaide</a>
                                                </li>
                                                <li>
                                                    <a href="#">Darwin</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 pl-lg-0">
                                        <div className="head_footer_link">
                                            <h3>Subscribe to <br /> Our Newsletter</h3>
                                            <div className="newslatter">
                                                <div className="main_nlatter">
                                                    <label htmlFor="newslatter">Email</label>
                                                    <input type="email" id="newslatter" placeholder="Enter email address here..." />
                                                </div>
                                                <button type="submit" className="newslatter_btn">Subscribe</button>
                                            </div>
                                            <div className="social_links_footer">
                                                <a href="#"> <IoLogoInstagram /> </a>
                                                <a href="#">< FaFacebook /></a>
                                                <a href="#"> < FaTwitter /> </a>
                                                <a href="#"> < FaLinkedinIn /> </a>
                                                <a href="#"> < GrYoutube /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div className="bottom_footer">
                                <p>© 2021 <b> Salloon</b>. All rights reserved.</p>
                                <p>Made with love by <a href="#"> <b> Ivylab Technologies </b> </a> </p>
                            </div> */}



                        </div>
                    </div>
                    <div className="botom_footer_main">
                                <div className="container-custom">
                                    <div className="row m-0">
                                        <div className="col-md-4">

                                        </div>
                                        <div className="col-md-4 w-full d-flex justify-content-between ">
                                            <div className='playStoreIcons mt-3'>
                                                <div data-aos="fade-right"><img src={applePlayStore} className='appicon' /></div>
                                                <div data-aos="fade-left" ><img src={googleplayStore} className='appicon ml-2' /></div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                                        </div>
                                    </div>
                                            <div className="bottom_footer p-0 mt-4">
                                                <p>© 2021 <b> Salloon</b>. All rights reserved.</p>
                                                {/* <p>Made with love by <a href="#"> <b> Ivylab Technologies </b> </a> </p> */}
                                            </div>
                                </div>
                            </div>
                </footer>
            </>
        )
    }
}

export default Footer