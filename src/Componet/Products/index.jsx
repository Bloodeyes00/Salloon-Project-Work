import React, { Component } from 'react'
import noImage from "../../assets/imge/newimages/noimage.jpg"
import product_img from '../../assets/imge/pexels-photo-4239014.png'
import product_img2 from '../../assets/imge/pexels-photo-5798000.png'
import product_img3 from '../../assets/imge/pexels-photo-3738363.png'
import product_img4 from '../../assets/imge/pexels-photo-3800060.png'
import { withRouter } from 'react-router-dom'


import {BiDetail} from 'react-icons/bi'


class Products extends Component {
    render () {
        return (
            <>
            <div className="products_roe">
            <div className="pro_title">
                <h3>Products</h3>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h4 className='font-weight-bold'>{this.props.data == 0 && "No Product Found"}</h4>
                </div>
            </div>
                <div className="row">


                    {this.props.data.map(data=>{
                      return data.products.map((data1)=>{
                           return(
                            <div className="col-md-4 col-6" onClick={()=>{this.props.history.push(`/product_details/${data1._id}`)}}>
                            <div className="poducts_slider_main">
                                <div className="produc_main_img">
                                {data1.Profile_Pic ? (
                                    <img src={`${process.env.REACT_APP_BASE_URL}/${data1.Profile_Pic}`} alt="" className="img-fluid" />
                                    ) : (
                                  <img src={noImage} alt="noimage" />
                                )}
                                    <div className="hover_icon_detail">
                                    < BiDetail />
                                    </div>
                                </div>
                                <div className="products_slider_title">
                                    <p>{data1.Name}</p>
                                    <h4>${data1.Price}</h4>
                                </div>
                            </div>
                        </div>
                           )
                       })
                    })}
                      </div>
                <div className="all_btn_prod">
                    {/* <button type="button" className="btn btn-primary">View All Products</button> */}
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(Products)