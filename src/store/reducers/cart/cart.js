
const initialState = {Saloon:null,Services:null,Products:[],totalquantity:0};
const Cart = (state = initialState, action) => {

   switch (action.type) {
      case "ADD_CART":
         const product=state.Products.find(item=>item._id==action.payload.product._id)
          state.totalquantity=action.payload.totalquantity
          state.Saloon=action.payload.product.Saloon
         if(product){
            state.Products=state.Products.map((data)=>
               data._id==action.payload.product._id
               ?{
                  ...data,quantity:action.payload.product.quantity,
               }
               :
            data
            )
         }else{
           state.Products.push(action.payload.product)
         }
        return {...state}
         case "REMOVE_CART_ITEM":
         let new_items = state.Products.filter(item=> action.payload.product._id !== item._id)
         return {...state,Products:new_items,totalquantity:action.payload.totalquantity};
        case "REMOVE_ALL_PRODUCTS":
        return {...state,Saloon:null,Services:null,Products:[],totalquantity:0};
        case "ADD_SERVICES":

        return {...state,Saloon:action.payload.Saloon,Services:action.payload}
      default:
         return state;
   }
};
export default Cart;
