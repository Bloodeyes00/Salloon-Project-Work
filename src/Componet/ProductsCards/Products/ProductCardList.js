import React, { Component } from 'react'
import SloneProductCard from './ProductCard';
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import topImge1 from '../../../assets/imge/pexels-photo-4239014.jpeg';
import topImge2 from '../../../assets/imge/WhatsApp Image 2021-05-03 at 10.34.08 PM.jpeg';
import topImge3 from '../../../assets/imge/pexels-photo-6621472.jpeg';
import topImge4 from '../../../assets/imge/pexels-photo-3736397.jpeg';
import topImge5 from '../../../assets/imge/pexels-photo-6621281.jpeg';
import topImge6 from '../../../assets/imge/pexels-photo-3738363.jpeg';
import topImge7 from '../../../assets/imge/pexels-photo-6621472.jpeg';
let object =[
   {
   imge: topImge6
  },
   {
   imge: topImge2
  },
   {
   imge: topImge3
  },
   {
   imge: topImge4
  },
   {
   imge: topImge5
   },
   {
      imge: topImge1
   }, 
   {
      imge: topImge7
   },  
]
let settings = {
   dots: false,
   infinite: false,
   autoplay: true,
   speed: 500,
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
            slidesToScroll: 1,
         }
      }
   ]
}
const SloneProducts = ({data}) => (
 
         <div className='topSlickSlider'>
            <Slider {...settings}>
               {data.map(res => {
                  return (
                     <div>
                        <SloneProductCard data={res} />
                     </div>
                  )
               })}
            </Slider>
         </div>
)

export default SloneProducts
