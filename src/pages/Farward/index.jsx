import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import { FaTimesCircle} from 'react-icons/fa'
import sideImge from "../../assets/imge/about-img_62537.png";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import logo from "../../assets/imge/Biglogo.png";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
export class Farward extends Component {
  constructor(){
    super()
    this.state={
      value:"",
    }
  }
 responseGoogle = (response) => {

}
 responseFacebook = (response) => {

}
  submitNumber=()=>{
   this.props.history.push('/')
  }
      render() {
            return (
              <div className="container-fluid-farward">
                <div className="row" >
                  <div className="col-md-6 px-0">
                    <div className="sideImgeContainer" >
                      <img src={sideImge} className='full' />
                    </div>
                  </div>
                  <div className="col-md-6 LoginContainer" >
                    <div className="logoContainer mt-2"
                    onClick={() => this.props.history.push('/')}
                    >

                      <img src={logo} />
                    </div>
                    {this.state.value}
                    <h3 className='py-2 bookAppointment'> Book an appointment for Salon,<br />
                      Spa & Barber</h3>


                    <div className="loginInerContainer">
                      <div className="py-2 mb-3 mt-1 formBtns">
                      <div className='w-100 mt-5'>
                           <button className="shadow mb-3 border-0 mx-0 "
                            onClick={() => {this.props.history.push("/signup/user")}}
                          >Continue as Customer</button>
                           <button className="active mx-0 "
                            onClick={() => {this.props.history.push("/signup/saloon")}}
                          >Continue as Saloon</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
      }
}

export default withRouter(Farward)
