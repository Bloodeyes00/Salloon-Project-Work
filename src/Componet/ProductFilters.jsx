import React, { Component } from "react";
import { connect } from "react-redux";
import { FaFilter, FaStar } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import ReactStars from "react-rating-stars-component";
import { Range } from "react-range";
import ACTIONS from "../store/actions/index";
let services = [
  "Hairstyle",
  "Makeup",
  "Hair Coloring",
  "Spa",
  "Facial Makeup",
  "Trim & Shaving",
  "Hair Bonding,Keratin",
  "Face Cleansing",
];
let porducts = [
  "Body lotion",
  "Makeup",
  "Brush",
  "Cutting Toolkit",
  "Acne Cream",
  "Razors",
  "Shampoos",
  "Lipsticks",
  "Aprons",
];
class ProductFilters extends Component {
  constructor(porps) {
    super();
    this.state = {
      Slectdservices: [],
      Slectdproduts: "",
      ratings: 0,
      gender: "",
      sortBy: "",
      distance: 100,
    };
  }

  // componentDidMount(){
  //    this.setState({
  //       Slectdservices:this.props.ProductsFilters.services,
  //       Slectdproduts: this.props.ProductsFilters.products,
  //       ratings: this.props.ProductsFilters.ratings,
  //       gender: this.props.ProductsFilters.gender,
  //       distance: this.props.ProductsFilters.distance,
  //       sortBy: this.props.ProductsFilters.sort_by,
  //    })
  // }
  componentDidMount() {
    this.setState({
      Slectdproduts: this.props.cat ? this.props.cat : "",
      Slectdservices: this.props.service ? [this.props.service] : [],
    });
  }
  servicesfun = (data) => {
    if (!this.state.Slectdservices.includes(data)) {
      this.setState({ Slectdservices: [...this.state.Slectdservices, data] });
    } else {
      let index = this.state.Slectdservices.findIndex((e) => e == data);
      let slectedList = this.state.Slectdservices;
      slectedList.splice(index, 1);
      this.setState({ Slectdservices: slectedList });
    }
  };
  productsfun = (data) => {
    if (this.state.Slectdproduts == data) {
      this.setState({ Slectdproduts: "" });
    } else {
      this.setState({ Slectdproduts: data });
    }
  };

  gender = (data) => {
    if (this.state.gender == data) {
      this.setState({ gender: "" });
    } else {
      this.setState({ gender: data });
    }
  };
  sortBy = (data) => {
    if (this.state.sortBy == data) {
      this.setState({ sortBy: "" });
    } else {
      this.setState({ sortBy: data });
    }
  };

  changeFiltes = () => {
    let object = {
      services: this.state.Slectdservices,
      products: this.state.Slectdproduts,
      ratings: this.state.ratings,
      gender: this.state.gender,
      distance: this.state.distance,
      sort_by: this.state.sortBy,
    };
    // alert(JSON.stringify(object,null,2))
    this.props.updateFilters(object);
    this.props.filterData(object);
  };
  clearFiltes = () => {
    let object = {
      services: [],
      products: "",
      ratings: 0,
      gender: "",
      distance: 100,
      sort_by: "",
    };
    this.setState({
      Slectdservices: [],
      Slectdproduts: "",
      ratings: 0,
      gender: "",
      sortBy: "",
      distance: 100,
    });
    // alert(JSON.stringify(object,null,2))
    this.props.updateFilters(object);
    this.props.filterData(object);
  };
  render() {
    return (
      <div className="filtersContainer p-3">
        <div className="filterHeading">
          <div>Filters</div>
          <div className="d-lg-block d-md-block d-none">
            <FaFilter />
          </div>
          <div
            className="d-lg-none d-md-none d-block close_dilters"
            onClick={() => this.props.controlFilter()}
          >
            <GrFormClose />
          </div>
        </div>

        {/*  */}
        {this.props.comp == "product" ? (
          ""
        ) : (
          <>
            <div className="title">
              <p>SERVICES</p>
            </div>
            {this.props.categories &&
              this.props.categories.services.map((data) => {
                return (
                  <div
                    className={`options ${
                      this.state.Slectdservices.includes(data._id)
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {
                      this.servicesfun(data._id);
                    }}
                  >
                    <p>{data.Name}</p>
                  </div>
                );
              })}
          </>
        )}

        {/* ****************** */}
        <div className="title mt-3">
          <p>Categories</p>
        </div>
        {/* {this.props.categories && this.props.categories.categories.map(data => {
               return (
                  <div className={`options ${this.state.Slectdproduts == data._id ? 'active' : ''}`}
                     onClick={() => { this.productsfun(data._id) }}>
                     <p>{data.title}</p>
                  </div>
               )
            })} */}
        {/* ****************** */}

        <div className="title mt-3">
          <p>Rating</p>
        </div>
        <div className="ratingStars mt-n3">
          <ReactStars
            count={5}
            onChange={(e) => {
              this.setState({ ratings: e });
            }}
            value={this.state.ratings}
            size={26}
            activeColor="#F9D63E"
            isHalf={true}
          />
          <span className="res">{this.state.ratings}</span>
        </div>
        {/* ****************** */}
        {/* <div className='title mt-3'>
               <p>Gender</p>
            </div>
            <div className={`options ${this.state.gender == 'male' ? 'active' : ''}`} onClick={() => this.gender('male')}>
               <p>Male</p>
            </div>
            <div className={`options ${this.state.gender == 'female' ? 'active' : ''}`} onClick={() => this.gender('female')}>
               <p>Female</p>
            </div>
            <div className={`options ${this.state.gender=='other' ? 'active':''}`} onClick={() => this.gender('other')}>
               <p>Other</p>
            </div> */}

        {/* ****************** */}
        {this.props.comp == "product" ? (
          ""
        ) : (
          <>
            <div className="title mt-3">
              <p>Distance</p>
            </div>
            <div className="kmResult">
              <Range
                step={0.1}
                min={0}
                max={500}
                values={[this.state.distance]}
                onChange={(values) => this.setState({ distance: values[0] })}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      width: "100%",
                      backgroundColor: "#70B4FF",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "30px",
                      width: "30px",
                      backgroundColor: "#70B4FF",
                    }}
                  />
                )}
              />
              <div>
                <small>{this.state.distance}km</small>
              </div>
            </div>
          </>
        )}
        {/* ****************** */}
        {/* <div className='title mt-3'>
               <p>Sort by</p>
            </div>


            <div className={`options ${this.state.sortBy == 'Most Popular' ? 'active' : ''}`} onClick={() => this.sortBy('Most Popular')}>
               <p>Most Popular</p>
            </div>
            <div className={`options ${this.state.sortBy == 'Cost Low to High' ? 'active' : ''}`} onClick={() => this.sortBy('Cost Low to High')}>
               <p>Cost Low to High
</p>
            </div>
            <div className={`options ${this.state.sortBy == 'Cost High to low' ? 'active' : ''}`} onClick={() => this.sortBy('Cost High to low')}>
               <p>Cost High to low</p>
            </div> */}

        {/* ****************** */}
        <div className="filtersBtn">
          <div>
            <button onClick={this.clearFiltes}>Clear Filters</button>
          </div>
          <div>
            <button onClick={this.changeFiltes}>Apply Filters</button>
          </div>
        </div>
        {/* {JSON.stringify(this.props.ProductsFilters,null,2)} */}
        {/* ****************** */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProductsFilters: state.ProductsFilters,
    categories: state.categoriesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilters: (data) => {
      dispatch(ACTIONS.update_filters(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);
