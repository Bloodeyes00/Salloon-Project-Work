import React, { Component } from "react";
import Footer from "../../Componet/Footer/Footer";
import Header from "../../Componet/Headers/Header";
import { FaFilter } from "react-icons/fa";
import sideImge from "../../assets/imge/pexels-photo-3373746.png";
import backSlash from "../../assets/imge/backSlash.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ProductFilters from "../../Componet/ProductFilters";
import { connect } from "react-redux";
import Products from "../../api/products";
import ACTIONS from "../../store/actions/index";
import AllProducts from "../../api/products";
import SliderPlaceHolder from "../../Componet/SliderPlaceHolder";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import ReactPaginate from "react-paginate";

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      showFilters: false,
      topRated: [],
      pageCount: 1,
      pageNumber: 0,
      totalItem: "",
      loading: false,
    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.getProducts();
  }
  getProducts = () => {
    this.setState({
      loading: true,
    });
    AllProducts.getAllProducts().then((res) => {
      if (res.data.Error == false) {
        this.setState({
          topRated: res.data.data,
        });
      }
      this.setState({
        loading: false,
      });
    });
  };
  handlePageClick = (page) => {
    this.setState({
      pageNumber: page.selected,
    });
    setTimeout(() => {
      this.getProducts();
    }, 200);
  };
  filterData = (dat) => {
    let data = {
      Category: dat.products,
      Rating: dat.ratings,
    };
    AllProducts.filterproduct(data).then((res) => {
      if (res.data.Error == false) {
        this.setState({
          topRated: res.data.data,
        });
      }
    });
  };
  controlFilter = () => {
    this.setState({ showFilters: false });
  };
  render() {
    return (
      <>
        <section
          className="headerSections add_opacity"
          style={{ backgroundImage: `url('${sideImge}')` }}
        >
          <Header />
          <div className="soloneHeaderCon custom_heading_gheader">
            <div>
              <h1>
                Get your latest <br />
                beauty products
              </h1>
              <p>
                All beauty products are sourced from our trusted network of
                verified brands & cosmetic stores
              </p>
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

        <section className="bg-white">
          <div className="container-fluid container-lg bg-white">
            <div className="row">
              <div className="col-12">
                <div className="divWithFilters py-3">
                  <div>
                    <ul className="navPath">
                      <li>Home</li>
                      <li>
                        <img src={backSlash} />
                      </li>
                      <li>Products</li>
                    </ul>
                  </div>
                  <div>
                    <div
                      className={`filterButtons ${
                        this.state.showFilters ? "active" : ""
                      }`}
                      onClick={() => {
                        this.setState({ showFilters: !this.state.showFilters });
                      }}
                    >
                      Filters <FaFilter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.loading ? (
              <div className="row mb-4">
                {[3, 3, 3, , 3].map((data) => {
                  return (
                    <div className="col-lg-4 col-xl-3 col-md-4">
                      <ReactPlaceholder
                        showLoadingAnimation={true}
                        style={{
                          width: "100%",
                          height: 350,
                          borderRadius: "10px",
                        }}
                        type="rect"
                        color="#E0E0E0"
                      ></ReactPlaceholder>
                      <br></br>
                      <ReactPlaceholder
                        showLoadingAnimation={true}
                        type="text"
                        color="#E0E0E0"
                      ></ReactPlaceholder>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="row">
                <div
                  className={`${
                    this.state.showFilters ? "col-md-9" : "col-12"
                  }`}
                >
                  <div className="all_products">
                    <div className="title_all_products">
                      {/* <h3 className='font-weight-bold'>Top Rated Products</h3>                                     */}
                    </div>
                    <div className="listing_all_products">
                      <div className="row">
                        {this.state.topRated.length == 0 ? (
                          <h4>No Records Found</h4>
                        ) : (
                          ""
                        )}

                        {this.state.topRated &&
                          this.state.topRated.map((data) => {
                            return (
                              <div
                                className={
                                  this.state.showFilters
                                    ? "col-lg-4 col-xl-4 col-md-6"
                                    : "col-lg-4 col-xl-3 col-md-4"
                                }
                                onClick={() => {
                                  this.props.history.push(
                                    `/product_details/${data._id}`
                                  );
                                }}
                              >
                                <div className="topCardContainer listing_all_prods">
                                  <div className="imgeContainer">
                                    <div className="info">
                                      <span>New</span>
                                    </div>
                                    <img
                                      src={`${process.env.REACT_APP_BASE_URL}/${data.Profile_Pic}`}
                                      alt="topImge"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="desContainer">
                                    <div>
                                      <p>{data.Name}</p>
                                      <br />
                                      {/* <span>16km</span> */}
                                    </div>
                                    <div className="align-self-stretch">
                                      {/* <p>Looks unisex Saloon</p>  */}
                                      <div className="bookNowBtn">
                                        Add to Cart
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.showFilters && (
                  <div className="col-md-3 custom_column_setting">
                    <ProductFilters
                      controlFilter={this.controlFilter}
                      filterData={(data) => this.filterData(data)}
                      comp={"product"}
                    />
                  </div>
                )}
              </div>
            )}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (data) => {
      dispatch(ACTIONS.getProducts(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
