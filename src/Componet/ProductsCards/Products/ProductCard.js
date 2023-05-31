import React, { Component } from "react";
import { GiRoundStar } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";
export class SloneProductCard extends Component {
  render() {
    return (
      <div className="topCardContainer" key={this.props.data._id}>
        <div
          className="imgeContainer"
          onClick={() => {
            this.props.history.push(`/product_details/${this.props.data._id}`);
          }}
        >
          <div className="info">
            <span>New</span>
          </div>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/${
              this.props.data && this.props.data.Profile_Pic
            }`}
            alt="topImge"
          />
        </div>
        <div className="desContainer">
          <div>
            {/* {JSON.stringify(this.props.data.Photos[0], null, 2)} */}
            <p>{this.props.data.Name}</p>
            <br />
            {/* <span>16km</span> */}
          </div>
          <div className="align-self-stretch">
            {/* <p>Looks unisex Saloon</p>  */}
            <div className="bookNowBtn">Book</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SloneProductCard);
