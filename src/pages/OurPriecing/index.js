import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import Header from '../../Componet/Headers/Header'
import Footer from '../../Componet/Footer/Footer'
import whyImge from '../../assets/imge/Path 35.png'
import OurTable from '../../Componet/PriceingTable'
import applePlayStore from '../../assets/imge/apple.png'
import googleplayStore from '../../assets/imge/google.png'
import tick from '../../assets/imge/tick.png'
class OurPriecing extends Component {
   componentDidMount() {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   render() {
      return (
         <>
            <div className='bgDarkHeader'>

               <Header />
            </div>
            <section className='OurPricingContainer-bg py-5  bg-white' style={{ backgroundImage: `url('${whyImge}')`}}>
               <div className='container'>
                  <div className='row py-1'>
                     <div className='col-12 d-flex align-items-center justify-content-center'>
                        <h1 className='mb-0 font-weight-bold pb-0'>Our Prices</h1> 
                     </div>
                  </div>
               </div>
          </section>

          {/*  */}
            <OurTable/>
          {/*  */}
            <section className='bg-white pt-2 pb-5'>
               <div className='container'>
                  <div className='row mb-4'>
                     <div className='col-12'>
                        <h2 className='viewAllPlansHeading'>All plans Include</h2>
                     </div>
                  </div>
                  <div className='row'>
                     <div className='col-md-6'>
                        <div className='allPlansInfoContainer'>
                           <h4 className='freeScriptStyle'>Free for Customers</h4>
                           <h5>Saloon plan for customers</h5>
                           <div className='listDetails'>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Customer App and Website Profile</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Overview of Preferable and Popular Saloons </div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Display of Top Products and Special Offers </div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Personalized list of your Favourite Saloons </div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Messenger </div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Simple Appointment and Service Purchase</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Customized Notifications via App and Email</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Management and review of your scheduled
                                    Appointments</div>
                              </div>
                           </div>
                        
                           <h6 className='mt-2'>Download Saloon App</h6>
                           <div className='allPlansApps'>
                              <div >
                                 <img src={applePlayStore} alt='Imge'/>
                              </div>
                              <div>
                                 <img src={googleplayStore} alt='Imge' />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-md-6'>
                        <div className='allPlansInfoContainer pt-5'>
                           <h5 className='mt-2'>Saloon plan for Saloons</h5>
                           <div className='listDetails'>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Owner and Employee App and Website Profiles</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Overview of Preferable and Popular Saloons</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Review of On-board Bookings & Booking requests</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Smart Calendar</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Overview of products and promotional offers</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Staff Management</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Messenger</div>
                              </div>
                              <div>
                                 <div>
                                    <img src={tick} alt="imge" />
                                 </div>
                                 <div>Dashboard including Analytics of your sales, financials, products, and services</div>
                               </div>
                               </div>

                           <h6 className='mt-2'>Download Saloon App</h6>
                           <div className='allPlansApps'>
                              <div >
                                 <img src={applePlayStore} alt='Imge' />
                              </div>
                              <div>
                                 <img src={googleplayStore} alt='Imge' />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
          </section>

         

          
            <Footer />
         </>
      )
   }
}
export default OurPriecing