import axios from "../axios";

let  Cart = {
  getCart:()=>{
      return axios({
          url:`/api/getcart`,
          method:"post",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
      })
  },
  addCartApi:(data)=>{
    return axios({
        url:`/api/addtocart`,
        method:"post",
        data,
        headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
    })
},
removeCartProductApi:(data)=>{
    return axios({
        url:`/api/productdetail`,
        data,
        method:"post",
    })
},
emptyCart:()=>{
    return axios({
        url:`/api/deletecart`,
        method:"post",
        headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
    })
},
payment:(data)=>{
    return axios({
        url:`/api/stripe/charge`,
        method:"post",
        data,
        headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
         },
    })
},
}
export default Cart