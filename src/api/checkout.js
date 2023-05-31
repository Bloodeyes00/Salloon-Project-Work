import axios from "../axios";

let  Checkout = {
   submitStripeToken:(data)=>{
      return axios({
         url: "/api/stripe/charge",
         data,
         method: "post",
      })
   },
   checkcoupon:(data)=>{
      return axios({
         url: "/api/checkcoupon",
         data,
         method: "post",
         headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
   },
}
export default Checkout

 