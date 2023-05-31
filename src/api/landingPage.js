import axios from "../axios";

let LandingPage = {
   getcategories: () => {
      return axios({
         url: "/api/getcategories", 
         method: "get",
      })
   },
   getstaffbooking: (data) => {
      return axios({
         url: "/api/getstaffbooking",
         method: "post",
         data,
      })
   },
   addbooking: (data) => {
      return axios({
         url: "/api/addbooking",
         method: "post",
         data,
         headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
   },
   addreview: (data) => {
      return axios({
         url: "/api/addreview",
         method: "post",
         data,
         headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
   },
   getBookings: (data) => {
      return axios({
         url: "/api/getCustomerallBookings",
         data,
         method: "post", 
         headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
   },
   saloonDetails: (id) => {
      return axios({
         url: `/api/getsaloon/${id}`, 
         method: "get",
      })
   },
   saloonsList: () => {
      return axios({
         url: "/api/getsaloons",
         method: "get",
      })
   },
   nearBySaloon: (data) => {
      return axios({
         url: "/api/nearbysaloons",
         data,
         method: "post",
      })
   },

}
export default LandingPage

