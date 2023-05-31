import axios from "../axios";

let  AuthApi = {
   login:(data)=>{
      return axios({
         url: "/api/signin",
         data,
         method: "post",
      })
   },
   signUp:(data)=>{
      return axios({
         url: "/api/usersignup",
         data,
         method: "post",
      })
   },
   signUpSaloon:(data)=>{
      return axios({
         url: "/api/addsaloon",
         data,
         method: "post",
      })
   },
   varify_pin:(data)=>{
      return axios({
         url: "/api/otpverification",
         data,
         method: "post",
      })
   },
   res_end_otp_mobile:(data)=>{
      return axios({
         url: "/api/resendotpmobile",
         data,
         method: "post",
      })
   },
   forgotpassword:(data)=>{
      return axios({
         url: "/api/forgotpassword",
         data,
         method: "post",
      })
   },
   resetpassword:(data)=>{
      return axios({
         url: "/api/resetpassword",
         data,
         method: "post",
      })
   },
   getCustomerDetail:()=>{
      return axios({
         url: "/api/getuserdetails",
         method: "get",
         headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
   },
   getStaffDetail:(data)=>{
      return axios({
         url: `/api/staffdetail`,
         data,
         method: "post",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         }
      })

   },getAllServices:()=>{
      return axios({
         url: `/api//getservices`,
         method: "post",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         }
      })

   },getStaffBookingById:(data)=>{
      return axios({
         url: `/api/getstaffallbookingsbyid`,
         data,
         method: "post",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         }
      })

   }, getdesignations:()=>{
      return axios({
         url: `/api/getdesignations`,
         method: "post",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         }
      })

   },
   
   updateCustomerDetail:(data)=>{
      return axios({
         url: "/api/updateuserdetails",
         data,
         method: "post",
         headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
   }
}
export default AuthApi

