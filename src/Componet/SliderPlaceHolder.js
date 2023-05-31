import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
var settings = {
   dots: false,
   infinite: true,
   speed: 500,
   autoplay: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   nextArrow: <span className='slickErrow right'><AiOutlineRight /></span>,
   prevArrow: <span className='slickErrow left'><AiOutlineLeft /></span>,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
let SliderPlaceHolder = () => {
   return (

      <div className='row'>
         <div className='col-12'>
            <div className='SliderPlaceHOlders'>
               <Slider {...settings}>
                  {[3, 3, 3, , 3, 3].map(data => {
                     return (
                        <div className='placesHolderDiv'>
                           <ReactPlaceholder showLoadingAnimation={true} style={{ width: '100%', height: 350,borderRadius:'10px' }} type='rect' color='#E0E0E0'>
                           </ReactPlaceholder>
                           <br></br>
                           <ReactPlaceholder showLoadingAnimation={true} type='text' color='#E0E0E0'>
                           </ReactPlaceholder>
                        </div>
                     )
                  })}
               </Slider>
            </div>
         </div>
      </div>
   )
}
export default SliderPlaceHolder