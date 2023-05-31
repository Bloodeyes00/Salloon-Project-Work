import React from 'react'
import ProductCarasoleCard from './ProductCarasoleCard';
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { withRouter } from 'react-router';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
export class ProductCardList extends React.Component {
   constructor(props){
      super();
      this.state = {
         data:[],
      }
   }
componentDidMount(){
   if(this.props.data){
      this.setState({ data: this.props.data }) 
   }
}
componentDidUpdate(preState,state){
   if (preState.data !== this.props.data){ 
      this.setState({ data: this.props.data  })
   }

  
}

 

   render() {
      var settings = {
         dots: false,
         infinite: false,
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
      return (
         <div className='topSlickSlider'>
            {/* {JSON.stringify(this.props.data,null,2)}  */}
            <Slider {...settings}>
               {this.state.data.map(res => {
                  return (
                     <div 
                     onClick={()=> this.props.history.push(`/saloon/${res._id}`)} 
                     >
                        <ProductCarasoleCard data={res} />
                     </div>
                  )
               })}
            </Slider> 
         </div>
      )
   } 
}
 
 



export default withRouter(ProductCardList)
