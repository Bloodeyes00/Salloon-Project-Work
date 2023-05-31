import React, { Component } from 'react'
import { GiRoundStar } from 'react-icons/gi'
import topImge1 from '../../../assets/imge/Group 1006.png';
import topImge2 from '../../../assets/imge/cataImge1.png';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import pic2 from '../../../assets/imge/newimages/11.png';
import pic3 from '../../../assets/imge/newimages/15.png';
import pic4 from '../../../assets/imge/newimages/12.png';
import pic5 from '../../../assets/imge/newimages/15.png';
export class SloneProductCard extends Component {
   render() {
      return (
         // <div onClick={()=>{("ff"); this.props.history.push(`/saloons/${this.props.data._id}`)}} className='CategorieCardContainer'>
         //    {/* <div className='imgeContainer'>
         //       <img src={`${process.env.REACT_APP_BASE_URL}/${this.props.data.Background_Pic}`} alt='Picture' />
         //    </div> */}
         //    {/* <div className='CatedesContainer'>
         //       <div>
         //          <img src={`${process.env.REACT_APP_BASE_URL}/${this.props.data.Icon}`} alt='Picture' />
         //       </div>
         //    </div> */}



         //    <div className='BottomTitle'>
         //      {this.props.data.title}
         //    </div>
         // </div>

         <div className="CategorieCardContainer">
            <div className='imgeContainer'>
               <img src={pic2} alt='Picture' />
               <div className='CatedesContainer'>
                  <img className="img-catedes" src={pic3} alt='Picture' />
               </div>
            </div>
         </div>



      )
   }
}

export default withRouter(SloneProductCard)

