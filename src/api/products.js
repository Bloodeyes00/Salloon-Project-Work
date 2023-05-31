 import axios from "../axios";

let  Products = {

  productList:(id)=>{
      return axios({
          url:`/api/getcategoryproducts/${id}`,
          method:"get",
      })
  },
  getProduct:(data)=>{
    return axios({
        url:`/api/productdetail`,
        data,
        method:"post",
    })
},
    getAllProducts:()=>{
        return axios({
            url: `/api/getproducts`,
            method:"get"
        })
    },
    addfavouriteproduct:(data)=>{
        return axios({
            url:`/api/addfavourite`,
            data,
            method:"post",
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
             },
        })
    },
    filterproduct:(data)=>{
        return axios({
            url:`/api/productfilter`,
            data,
            method:"post",
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
             },
        })
    },

}
export default Products

 