import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
import Header from '../../Componet/Headers/Header'
import { FaFilter, FaStar, FaReply, FaShoppingCart } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { BsFillHeartFill,BsHeart } from 'react-icons/bs'
import { BiShareAlt } from 'react-icons/bi'
import { AiOutlineCheckCircle, AiOutlineMinus } from 'react-icons/ai'
import listingh_1 from '../../assets/imge/74-745904_beauty-personal-care-products.png'
import sideImge from '../../assets/imge/salon-retail (1).jpg'
import backSlash from "../../assets/imge/backSlash.png";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal , Button } from 'react-bootstrap';



import sliderImge1 from '../../assets/imge/slider1s.png'
import feedBack from '../../assets/imge/download.peg.jfif'
import { connect } from 'react-redux'
import Products from '../../api/products'
import ACTIONS from '../../store/actions/index';
import PlaceHolder from '../../Componet/PlaceHolder'
import Reviews from '../../Componet/Reviews'
import CartApi from '../../api/cart'
import { withRouter } from 'react-router-dom'
import ReactPlaceholder from 'react-placeholder/lib'





class ProductDetails extends Component {
   constructor(props) {
      super();
      this.state = {
         productCount: 0,
         product: {},
         loading: false,
         quantity: 0,
         totalquantity: 0,
         productQnt: 0,
         Reviews: [],
         cartModal:false,
         favrt:false
      }
   }

   componentDidMount() {
      this.setState({
         loading: true
      })
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
      this.products()
      this.getFavrtProduct()
   }
   products = () => {
      let { id } = this.props.match.params
      let data = {
         id: id
      }
      Products.getProduct(data).then((res) => {
         if (res.data.Error == false) {
            let productQnt = 0
            let totalquantity = 0
            this.props.cart.Products && this.props.cart.Products.map((data) => {
               if (data._id == res.data.Data._id) {
                  productQnt = data.quantity
                  totalquantity = this.props.cart.totalquantity

               }
            })
            this.setState({
               product: res.data.Data,
               Reviews: res.data.Reviews,
               productCount: productQnt,
               productQnt: productQnt,
               totalquantity: this.props.cart.totalquantity ? this.props.cart.totalquantity : 0
            })
         }
         this.setState({
            loading: false
         })
      })
   }
   componentWillReceiveProps(nextProps) {
      let { id } = nextProps.match.params
      if (id !== this.props.match.params.id) {
         this.getFavrtProduct()

      } else {
         this.products()
      }
   }

   addCart = () => {
      if(localStorage.getItem("token")){
         if (this.state.productCount >= 0) {
            if (this.props.cart.Products.length > 0) {
               if (this.props.cart.Saloon._id == this.state.product.Saloon._id) {
                  let product = this.state.product;
                  product.quantity = this.state.productCount
                  let totalquantity = this.state.totalquantity
                  if (product.quantity == 0) {
                     let data = {
                        Product: this.state.product._id,
                        Quantity: this.state.productCount
                     }
                     ("removefrom cart")
                     this.props.removeCartItem({ product, totalquantity })
                     CartApi.addCartApi(data).then((res) => {

                     })
                  }
                  else {
                     this.props.addtoCart({ product, totalquantity })
                     let data = {
                        Product: this.state.product._id,
                        Quantity: this.state.productCount
                     }
                     CartApi.addCartApi(data).then((res) => {

                     })


                  }
               } else {
                  this.setState({
                     cartModal:true
                  })
               }
            } else {
               let data = {
                  Product: this.state.product._id,
                  Quantity: this.state.productCount
               }
               let product = this.state.product;
               if(this.state.productCount>0){
                  product.quantity = this.state.productCount
                  let totalquantity = this.state.totalquantity
                  this.props.addtoCart({ product, totalquantity })
                  CartApi.addCartApi(data).then((res) => {

                  })
               }
            }
         }
         else {

         }
      }
      else{
         this.props.history.push("/login")
      }

   }
   subQnt = () => {
      if (this.state.productCount > 0) {
         this.setState({
            productCount: this.state.productCount - 1,
            totalquantity: this.state.totalquantity - 1
         })
      }

   }
   addQnt = () => {

      this.setState({
         productCount: this.state.productCount + 1,
         totalquantity: this.state.totalquantity + 1
      })

   }
   removeCartModal=()=>{
      this.props.removeAllProducts()
      CartApi.emptyCart().then(res => {

      })
      this.setState({
         cartModal:false
      })
   }
   getFavrtProduct=()=>{
      this.props.favrtproducts && this.props.favrtproducts.map((data)=>{
         if(data==this.props.match.params.id){
            this.setState({
               favrt:true
            })
         }
      })}
      addFavrtProduct=()=>{
         this.setState({
            favrt:true
         })
         let favrtproducts=this.props.favrtproducts
          favrtproducts.push(this.props.match.params.id)
          this.props.addfavrtProduct(favrtproducts)
          Products.addfavouriteproduct({Product_Id:this.props.match.params.id}).then((res)=>{

          })
      }
      removeFavrtProduct=()=>{
         this.setState({
            favrt:false
         })
        let data= this.props.favrtproducts.filter((dat)=>{
           if(dat!==this.props.match.params.id){
              return dat
           }
        })

         this.props.addfavrtProduct(data)
         Products.addfavouriteproduct({Product_Id:this.props.match.params.id}).then((res)=>{

         })

      }
   render() {

      let { product } = this.state
      let a = 4 - product.Rating;
      return (

         <>


                     <section className='headerSections add_opacity2' style={{ backgroundImage: `url('${sideImge}')` }}>
                        <Header />
                        <div className='soloneHeaderCon custom_heading_gheader'>
                           <div>
                              {/* <div className='HeadersDropDowns'>
                                 <div>
                                    <DropdownButton id="dropdown-basic-button" title="Hair Care">
                                       <Dropdown.Item href="#/action-1">Shampoo</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">Hair Tonic</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Shampoo</Dropdown.Item>
                                    </DropdownButton>
                                 </div>
                                 <div>
                                    <DropdownButton id="dropdown-basic-button" title="Skin Care">
                                       <Dropdown.Item href="#/action-1">Shampoo</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">Hair Tonic</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Shampoo</Dropdown.Item>
                                    </DropdownButton>
                                 </div>
                                 <div>
                                    <DropdownButton id="dropdown-basic-button" title="Body Care">
                                       <Dropdown.Item href="#/action-1">Shampoo</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">Hair Tonic</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Shampoo</Dropdown.Item>
                                    </DropdownButton>
                                 </div>
                                 <div>
                                    <DropdownButton id="dropdown-basic-button" title="Family Care">
                                       <Dropdown.Item href="#/action-1">Shampoo</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">Hair Tonic</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Shampoo</Dropdown.Item>
                                    </DropdownButton>
                                 </div>
                                 <div>
                                    <DropdownButton id="dropdown-basic-button" title="Body Care">
                                       <Dropdown.Item href="#/action-1">Shampoo</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2">Hair Tonic</Dropdown.Item>
                                       <Dropdown.Item href="#/action-3">Shampoo</Dropdown.Item>
                                    </DropdownButton>
                                 </div>
                              </div> */}
                           </div>
                        </div>
                     </section>
                     {
               this.state.loading ?
               <div className="container">

               <div className="row mt-5 mb-5">
               <div className="col-md-5">
               <div className='ProductDetailsSlider'>

               <ReactPlaceholder showLoadingAnimation={true} style={{ width: '100%', height: 350,borderRadius:'10px' }} type='rect' color='#E0E0E0'>
               </ReactPlaceholder>
               <br></br>
               </div>
               </div>
               <div className='col-md-7 pt-4'>
               <ReactPlaceholder showLoadingAnimation={true} type='text' color='#E0E0E0'>
               </ReactPlaceholder>
               </div>
               </div>
               <div className="row mt-5 mb-5">
               <ReactPlaceholder showLoadingAnimation={true} type='text' color='#E0E0E0'>
               </ReactPlaceholder>
                </div>

            </div>
                  :
                     <section className='bg-white'>

                        <div className="container">
                           <div className='row'>
                              <div className='col-12'>
                                 <div className='divWithFilters py-3'>
                                    <div>
                                       <ul className='navPath '>
                                          <li>Home</li>
                                          <li><img src={backSlash} /></li>
                                          <li>Products</li>
                                          <li><img src={backSlash} /></li>
                                          <li>Product Detail</li>
                                       </ul>
                                    </div>
                                    <div>

                                    </div>
                                 </div>
                              </div>
                           </div>


                           {/* porduct details secitons */}

                           <div className='row'>
                              <div className='col-md-5'>
                                 <div className='ProductDetailsSlider'>
                                    <Carousel
                                       autoPlay
                                       showArrows='false'
                                    >
                                       {product.Photos && product.Photos.map((data, i) => {
                                          return (
                                             <div key={i} >
                                                <img src={`${process.env.REACT_APP_BASE_URL}/${data}`} />
                                             </div>
                                          )
                                       })

                                       }
                                    </Carousel>
                                 </div>
                              </div>
                              <div className='col-md-7'>
                                 <div className='porductOtherDetails'>
                                    <h4>{product.Name}</h4>
                                    <h5 className='stockCheck'><span className='mr-2'><AiOutlineCheckCircle /></span>{product.Available ? "Stock Available" : "Out Of Stock"}</h5>
                                    <div className='porductRatings'>
                                       {
                                          Array.apply(0, Array(product.Rating)).map(function (x, i) {
                                             return <div className="active" >
                                                <FaStar />
                                             </div>;
                                          })
                                       }
                                       {
                                          Array.apply(0, Array(5)).map(function (x, i) {
                                             if ((5 - product.Rating) > i) {
                                                return <div className="" >
                                                   <FaStar />
                                                </div>
                                             }

                                          })
                                       }

                                       <div className='ratingResults' >
                                          {product.Rating}.0
                              </div>
                                    </div>
                                    <div className='price'>
                                       Price:<span>{product.Price}$</span>
                                    </div>
                                    <div className='countControler'>
                                       <div>
                                          <div
                                             onClick={() => { this.subQnt() }}
                                          ><AiOutlineMinus /></div>
                                          <div>{this.state.productCount == 1 ? "1" : this.state.productCount == 0 ? "0" : this.state.productCount}</div>
                                          <div onClick={() => { this.addQnt() }}><IoMdAdd /></div>
                                       </div>
                                    </div>
                                    <div className='proDes'>
                                       <h5>Product Description</h5>
                                       <p>{product.Description}</p>
                                    </div>
                                    <div className='productBtns'>
                                       <button className='share'><span className='text-hid'>Share product</span><BiShareAlt /></button>
                                       <button onClick={this.addCart} className='cart'><span  >{this.state.productQnt > 1 ? "Update Cart" : "Add to Cart"}</span><FaShoppingCart /></button>
                                          {
                                             this.state.favrt==true
                                             ?
                                             <button onClick={this.removeFavrtProduct} className='fav'><span>
                                             <BsFillHeartFill />
                                             </span></button>
                                             :
                                             <button onClick={this.addFavrtProduct} className='fav'><span>
                                             <BsHeart />
                                             </span></button>

                                          }
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* porduct details secitons */}

                           {/* <div className="all_products">
                              <div className="title_all_products">
                                 <h3 className='font-weight-bold'>Products you may like</h3>
                                 <a href="#">View All</a>
                              </div>
                              <div className="listing_all_products">
                                 <div className="row">
                                    {[1, 1, 1, 1].map(data => {
                                       return (
                                          <div className="col-md-3">
                                             <div className='topCardContainer listing_all_prods'>
                                                <div className='imgeContainer'>
                                                   <div className='info'>
                                                      <span>New</span>
                                                   </div>
                                                   <img src={listingh_1} alt='topImge' className="img-fluid" />
                                                </div>
                                                <div className='desContainer'>
                                                   <div >
                                                      <p>Looks unisex Saloon</p>
                                                      <span>16km</span>
                                                   </div>
                                                   <div className='align-self-stretch'>
                                                      <p>Looks unisex Saloon</p>
                                                      <div className='bookNowBtn'>Add to Cart</div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>

                                       )
                                    })}
                                 </div>
                              </div>

                           </div> */}
                        </div>



                        <div className='container mt-5 mb-4'>
                           <div className='row'>
                              <div className='col-12'>
                                 <Reviews saloone={false} Reviews={this.state.Reviews} dataId={this.props.match.params.id} />


                              </div>
                           </div>
                        </div>

                     </section>
                       }
                     <Footer />
                     <Modal  show={this.state.cartModal} onHide={()=>{this.setState({cartModal:false})}} className="custom_modal_setting">
                <Modal.Header closeButton>
                    <Modal.Title className="billing_modal_title"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_form_main">
                        <div className="billing_form">
                          <p>You have already selected products from a different Saloon.if you continue your cart and selection will be removed</p>
                            <div className="submit_payemnt_btn text-right mt-5">
                                <button onClick={this.removeCartModal} className="btn btn-primary mr-5">Continue</button>
                                <button onClick={()=>{this.setState({cartModal:false})}} className="btn btn-primary">Cancel</button>

                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
         </>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      cart: state.Cart,
      favrtproducts:state.CustomerDetail.FavouriteProducts ? state.CustomerDetail.FavouriteProducts:[]
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addtoCart: (data) => {
         dispatch(ACTIONS.addCart(data))
      },
      removeCartItem: (data) => {
         dispatch(ACTIONS.removeCartItem(data))
      },
      removeAllProducts: () => {
         dispatch(ACTIONS.removeAllProducts())
      },
      addfavrtProduct: (data) => {
         dispatch(ACTIONS.addFavrtProducts(data))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetails))