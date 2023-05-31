import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
import  Header  from '../../Componet/Headers/Header'
import careers_img from '../../assets/imge/newimages/star.png'

class Careers extends Component {

    mailTo=(e)=>{
            window.location = "mailto:jobs@salloon.dk"
            e.preventDefault();
    }
    render() {
        return (
            <>
                <div className='bgDarkHeader'>
                    <Header />
                </div>
                <div className="main_careers">
                    <div className="container">
                        <img src={careers_img} alt="" className="img-fluid" />
                        <p>We are always on the lookout for new talent to join our team. <br />
                            Please send your resume and cover letter to the following address</p>
                            <button onClick={this.mailTo} type="button" className="btn btn-primary">jobs@salloon.dk</button>
                    </div>
                </div>


                < Footer />
            </>
        )
    }
}
export default Careers