const initialState = [];
const CustomerDetail = (state = initialState, action) => {

   switch (action.type) {
      case "DETAIL":
         return action.payload;
         case "ADD_FAVRT_PRODUCTS":
            return {...state,FavouriteProducts:action.payload};
            case "ADD_FAVRT_SALOONS":
                return {...state,favouritesaloons:action.payload};
      default:
         return state;
   }
};
export default CustomerDetail;
