import React, { Component } from 'react'
import topImge1 from '../../../assets/imge/topImge1.jpeg';
export class ProductCarasoleCard extends Component {
   render() {
      return (
         <div className='topCardContainer' 
            key={this.props.data._id}
            >
          
            <div className='imgeContainer'>
               <div className='info'>
                  <span>New</span>
               </div>
               <img src={`${process.env.REACT_APP_BASE_URL}/${this.props.data && this.props.data.Profile_Pic}`} alt='topImge' />
            </div>
            <div className='desContainer'>
               <div >
                  {/* {JSON.stringify(this.props.data.Photos[0], null, 2)} */}
                  <p>{this.props.data.Name}</p>
                  <br />
                  {/* <span>16km</span> */}
               </div>
               <div className='align-self-stretch'>
                  {/* <p>Looks unisex Saloon</p>  */}
                  <div className='bookNowBtn'>Book</div>
               </div>
            </div>
         </div>

      )
   }
}

export default ProductCarasoleCard
