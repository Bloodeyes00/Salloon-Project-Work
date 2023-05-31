import axios from "../axios";

let  Services = {
      addContactInfo:(data)=>{
         return axios({
            url:`/api/contactus`,
            method:"post",
            data
         })
      },

    getcategorizedservices:(data)=>{
      return axios({
          url:`/api/getcategorizedservicesUser`,
          method:"post",
          data,
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

   },
}
export default Services

 