import axios from "../axios";

let  Saloon = {

  SaloonbyCategory:(data)=>{
      return axios({
          url:`/api/getsaloonsbycategory`,
          method:"post",
          data,
      })
    },
    SaloonbyServices:(data)=>{
      return axios({
          url:`/api/getsaloonsbyservice`,
          method:"post",
          data,
      })
    },
    filtersaloon:(data)=>{
      return axios({
          url:`/api/saloonfilter`,
          data,
          method:"post",
          headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
           },
      })
  },
  StaffDetail:(data)=>{
    return axios({
      url:`/api/staffdetail`,
      data,
      method:"post",
      headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
       },
  })
  },
  allSaloons:(data)=>{
    return axios({
      url:`/api/allsaloons`,
      method:"post",
      data,
      headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
       },
  })
  },
  addfavouritesaloon:(data)=>{
    return axios({
      url:`/api/addfavouritesaloon`,
      data,
      method:"post",
      headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
       },
  })
  },
  bannerFilters:(data)=>{
    return axios({
      url:`/api/sitebannerfilters`,
      data,
      method:"post",
      headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
       },
  })
  },
  checkCoupon:(data)=>{
    return axios({
      url:`/api/checkcoupon`,
      data,
      method:"post",
      headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
       },
  })
  }
}
export default Saloon

 