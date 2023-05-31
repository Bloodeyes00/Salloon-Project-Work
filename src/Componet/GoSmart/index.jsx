import React from 'react'
import GroupPhones from '../../assets/imge/partnerimage/Group 21293.png'
import applePlayStore from '../../assets/imge/partnerimage/apple.png'
import googleplayStore from '../../assets/imge/partnerimage/google.png'
const GoSmart = () => {
    return (
        <>
            <div className="main_groups_photos">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6' data-aos="fade-left" data-aos-duration="1000">
                            <div className='GoSmartImgeContainer px-5 mb-3'>
                                <img src={GroupPhones} alt='imge' className='img-fluid groupcall' />
                            </div>
                        </div>
                        <div className='col-md-6' data-aos="fade-right" data-aos-duration="1000">
                            <div className='goSmartDes py-3'>
                                <h2>Go Smart – <span>Go Mobile</span></h2>
                                <p>Experience the most exclusive spa and salloon services at your
                                    fingertips, available for booking at your convenience via our sleek
                                    new mobile app.</p>
                                <h3>Salloon App</h3>
                                <p>Register your salloon on the Salloon Mobile App to become the preferred option for
                                    your target audience. When we feature you, you will notice your revenue grow as
                                    customers have easy access and visibility to your services, location, ratings,
                                    and more.</p>
                                <div className='playStoreIcons mt-3'>
                                    <div><img src={applePlayStore} /></div>
                                    <div><img src={googleplayStore} className='ml-2' /></div>
                                </div>
                                <a className='btnthem d-inline-block mt-5 font-weight-bold  text-center' href="#link">LEarn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoSmart
