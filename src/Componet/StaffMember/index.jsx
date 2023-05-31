import React from "react";
import { AiFillStar } from "react-icons/ai";
import noImage from "../../assets/imge/newimages/noimage.jpg";
const StaffMember = (props) => {
  return (
    <>
      <div className="main_staf_mem">
        <div className="pro_title">
          <h3>Staff Members</h3>
        </div>
        <div className="main_listing_stf">
          <div className="strt_listin">
            {props.data &&
              props.data.map((data) => {
                return (
                  <div className="main_data_stf">
                    <div className="img_section_stf">
                      <div className="img_stf">
                        {data.Staff_pic ? (
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/${data.Staff_pic}`}
                            alt=""
                            className="img-fluid"
                          />
                        ) : (
                          <img src={noImage} alt="" className="img-fluid" />
                        )}
                      </div>
                      <div className="img_nmr_dtf">
                        <h4>{data.Name}</h4>
                        <div className="rating_stf">
                          <div className="ratings_main">
                            {[1, 1, 1, 1, 1].map((dat, i) => {
                              if (i < data.Rating) {
                                return <AiFillStar />;
                              }
                            })}
                            {[1, 1, 1, 1, 1].map((dat, i) => {
                              if (i < 5 - data.Rating) {
                                return <AiFillStar className="half_fill" />;
                              }
                            })}
                            <p>{data.Rating}</p>
                            <p>({data.Reviews} reviews)</p>
                          </div>
                        </div>
                        <p>Hairstyling Specialist</p>
                      </div>
                    </div>
                    <div className="select_st_btn">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          props.handleShow(data._id);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffMember;
