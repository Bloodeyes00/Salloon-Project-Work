import React, { Component } from "react";
import CategorieCard from "./CategorieCard";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import pic2 from '../../../assets/imge/newimages/11.png';
import pic3 from '../../../assets/imge/newimages/15.png';
import pic4 from '../../../assets/imge/cataImge2.png';
import pic5 from '../../../assets/imge/newimages/aaas.png';
import pic6 from '../../../assets/imge/makeup_100px.png'
import gh from '../../../assets/imge/gh.png'
import pexels from '../../../assets/imge/pexels-photo-3997390.jpeg'
import feature from '../../../assets/imge/Feature.jpg'
import photo from '../../../assets/imge/photo1.jpeg'

export class CategorieCardList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-prev slick-arrow" +
          (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        <AiOutlineLeft />
      </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        <AiOutlineRight />
      </button>
    );
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SlickArrowLeft />,
      // <span className='slickErrow right'><AiOutlineRight /></span>,
      prevArrow: <SlickArrowRight />,
      // <span className='slickErrow left'><AiOutlineLeft /></span>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      // <div className="topSlickSlider">
      //   <Slider {...settings}>
      //     {this.props.getcategories &&
      //       this.props.getcategories.map((data) => {
      //         return (
      //           <>
      //             {/* <div
      //                   onClick={() => {
      //                      this.props.history.push(`/saloons_list/${data._id}`)
      //                   }}
      //                >
      //                   <CategorieCard data={data}   />
      //                </div> */}

      //             <CategorieCard data={data} />
      //           </>
      //         );
      //       })}
      //   </Slider>
      // </div>
      <div>
        <div className="topSlickSlider">
          <Slider {...settings}>

            {/* <CategorieCard /> */}
            <div>

              <div className="CategorieCardContainer">
                <div className='imgeContainer'>
                  <img src={pic2} alt='Picture' />

                  <div className='CatedesContainer'>
                    <img className="img-catedes" src={pic3} alt='Picture' />

                  </div>
                </div>

              </div>
              <button className="btn1">Beauty Sallon</button>
            </div>


            {/* <div className="btndiv">
              <button className="clickbtn">click me</button>
            </div> */}
            <div>

              <div className="CategorieCardContainer">
                <div className='imgeContainer'>
                  <img src={gh} alt='Picture' />
                  <div className='CatedesContainer'>
                    <img className="img-catedes" src={pic6} alt='Picture' />
                  </div>
                </div>

              </div>
              <button className="btn1">Make Up</button>
            </div>
            <div>
              <div className="CategorieCardContainer">
                <div className='imgeContainer'>
                  <img src={pexels} alt='Picture' />
                  <div className='CatedesContainer'>
                    <img className="img-catedes" src={pic4} alt='Picture' />
                  </div>
                </div>
              </div>
              <button className="btn1">Nail Sallon</button>
            </div>
            <div>
              <div className="CategorieCardContainer">
                <div className='imgeContainer'>
                  <img src={feature} alt='Picture' />
                  <div className='CatedesContainer'>
                    <img className="img-catedes" src={pic5} alt='Picture' />
                  </div>
                </div>


              </div>
              <button className="btn1"> Barber Shop</button>
            </div>
            {/* <div>
              <div className="CategorieCardContainer">
                <div className='imgeContainer'>
                  <img src={photo} alt='Picture' />
                  <div className='CatedesContainer'>
                    <img className="img-catedes" src={pic3} alt='Picture' />
                  </div>
                </div>
              </div>
              <button className="btn1"> click me 3</button>
            </div> */}



          </Slider>
        </div >
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getcategories: state.categoriesList.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateFilters: (data) => {
    //    dispatch(ACTIONS.update_filters(data))
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategorieCardList));
