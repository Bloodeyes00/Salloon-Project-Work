import React, { Component } from 'react'
import Footer from '../../Componet/Footer/Footer'
import Header from '../../Componet/Headers/Header'
import { FaFilter } from 'react-icons/fa'
import listingh_1 from '../../assets/imge/74-745904_beauty-personal-care-products.png'
import sideImge from '../../assets/imge/pexels-photo-3373746.png'
import backSlash from "../../assets/imge/backSlash.png";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ProductFilters from '../../Componet/ProductFilters'
import { connect } from 'react-redux'
import Products from '../../api/products'
import ACTIONS from '../../store/actions/index';
import SloneProductCard from '../../Componet/ProductsCards/Products/ProductCard';
import SaloonApi from '../../api/saloon'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import ProductCarasoleCard from '../../Componet/ProductsCards/ProductCarasoleCard/ProductCarasoleCard'
import ReactPaginate from 'react-paginate';





class SaloonListCaegory extends Component {

    constructor() {
        super();
        this.state = {
            showFilters: false,
            saloons: [],
            loading: false,
            pageCount: 1,
            pageNumber: 0,
            totalItem: "",

        }
    }
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
      this.getSaloons()
    }
    getSaloons=()=>{
        let id = this.props.match.params.id
        let data = {
            category: id
        }
        this.setState({
            loading: true
        })
        SaloonApi.SaloonbyCategory(data).then((res) => {
            if (res.data.Error == false) {
                this.setState({
                    saloons: res.data.data
                })
            }
            this.setState({
                loading: false
            })
        })
    }
    handlePageClick = (page) => {
        this.setState({
            pageNumber: page.selected
        })
        setTimeout(() => { this.getSaloons(); }, 200)
    }
    filterData=(dat)=>{
        
        let data={
          Category:dat.products,
          Rating:dat.ratings,
          Services:dat.services
        }
          SaloonApi.filtersaloon(data).then(res=>{
              if(res.data.Error==false){
                this.setState({
                    saloons:res.data.data
                })
              }
          })
      }
    render() {
        return (
            <>
                          <section className='headerSections' style={{ backgroundImage: `url('${sideImge}')`}}>
               <Header />
               <div className='soloneHeaderCon'>
               <div>
                     <h1>Book an appointment for <br></br>
                        Saloon, Spa & Barber</h1>
                     <p>Book your favorite by looking through <br></br>
                        variety of latest saloons in your nearby   location</p>
               </div>
               </div>
            </section>

                <section className="bg-white">

                    <div className="container-fluid container-lg bg-white">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='divWithFilters py-3'>
                                    <div>
                                        <ul className='navPath'>
                                            <li style={{cursor:"pointer"}} onClick={()=>{this.props.history.push("/")}}>Home</li>
                                            <li><img src={backSlash} /></li>
                                            <li>Saloons</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div
                                            className={`filterButtons ${this.state.showFilters ? "active" : ""}`}
                                            onClick={() => {
                                                this.setState({ showFilters: !this.state.showFilters })
                                            }}
                                        >
                                            Filters <FaFilter />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.loading ?
                                <div className="row mb-4">
                                    {[3, 3, 3, , 3].map(data => {
                                        return (
                                            <div className="col-lg-4 col-xl-3 col-md-4">
                                                <ReactPlaceholder showLoadingAnimation={true} style={{ width: '100%', height: 350, borderRadius: '10px' }} type='rect' color='#E0E0E0'>
                                                </ReactPlaceholder>
                                                <br></br>
                                                <ReactPlaceholder showLoadingAnimation={true} type='text' color='#E0E0E0'>
                                                </ReactPlaceholder>
                                            </div>
                                        )
                                    })}
                                </div>
                                :

                                <div className='row'>
                                    <div className={`${this.state.showFilters ? "col-md-9" : "col-12"}`}>
                                        <div className="all_products">
                                            <div className="title_all_products">
                                                {/* <h3 className='font-weight-bold'>Top Rated Products</h3> */}
                                            </div>
                                            <div className="listing_all_products">
                                            {this.state.saloons.length==0 ? <h4>No Records Found</h4>:""}
                                                <div className="row mb-5">

                                                    {this.state.saloons && this.state.saloons.map(data => {
                                                        return (
                                                            <div className={this.state.showFilters ? "col-lg-4 col-xl-4 col-md-6 mb-3" : "col-lg-4 col-xl-3 col-md-4 mb-3"}
                                                                onClick={() => {
                                                                    this.props.history.push(`/saloon/${data._id}`)
                                                                }}
                                                            >
                                                                <div className='topCardContainer'
                                                                    key={data._id}
                                                                >
                                                                   <div className='imgeContainer'>
                                                                        <div className='info'>
                                                                            <span>New</span>
                                                                        </div>
                                                                        <img src={`${process.env.REACT_APP_BASE_URL}/${data && data.Profile_Pic}`} alt='topImge' />
                                                                    </div>
                                                                    <div className='desContainer'>
                                                                        <div >
                                                                            {/* {JSON.stringify(data.Photos[0], null, 2)} */}
                                                                            <p>{data.Name}</p>
                                                                            <br />
                                                                            {/* <span>16km</span> */}
                                                                        </div>
                                                                        <div className='align-self-stretch'>
                                                                            {/* <p>Looks unisex Saloon</p>  */}
                                                                            <div className='bookNowBtn'>Book</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.showFilters && (<div className='col-md-3'>
                                        <ProductFilters cat={this.props.match.params.id} filterData={(data)=>this.filterData(data)} comp={"saloon"} />
                                    </div>)}

                                </div>
                        }

                    </div>

                </section>
                {/* <div className="mt-5 mb-4">
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                forcePage={this.state.pageNumber}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                            </div> */}

                <Footer />

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.ProductList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (data) => {
            dispatch(ACTIONS.getProducts(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaloonListCaegory)