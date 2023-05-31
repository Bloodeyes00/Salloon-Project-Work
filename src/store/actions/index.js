let ACTIONS = {
   add_contact_info :(data)=>{
      return {
         type:"ADD_CONTACT_INFO",
         payload:data
      }
   },
   update_filters: (data) => {
      return {
         type: "UPDATE_FILTERS",
         payload: data
      }
   },
   getcategories: (data) => {
      return {
         type: "CATEGORIES_LIST",
         payload: data
      }
   },
   saloon_list: (data) => { 
      return {
         type: "SALOON_LIST",
         payload: data
      }
   },
   getProducts: (data) => { 
      return {
         type: "GET_PRODUCTS",
         payload: data
      }
   },
   addCart: (data) => { 
      return {
         type: "ADD_CART",
         payload: data
      }
   },
   removeCartItem: (data) => { 
      return {
         type: "REMOVE_CART_ITEM",
         payload: data
      }
   },
   removeAllProducts: () => { 
      return {
         type: "REMOVE_ALL_PRODUCTS",

      }
   },
   totalQuantity: (data) => { 
      return {
         type: "Total-QUANTITIY",
         payload:data
      }
   },
   addServices: (data) => { 
      return {
         type: "ADD_SERVICES",
         payload:data
      }
   },
   CustomerDetail: (data) => { 
      return{
         type:"CUSTOMERDETAIL",
         payload:data
      }
   },
   addFavrtProducts: (data) => { 
      return{
         type:"ADD_FAVRT_PRODUCTS",
         payload:data
      }
   },
   addFavrtSaloons: (data) => { 
      return{
         type:"ADD_FAVRT_SALOONS",
         payload:data
      }
   },
   getLocation: (data) => { 
      return{
         type:"GET_LOCATION",
         payload:data
      }
   },
}

export default ACTIONS