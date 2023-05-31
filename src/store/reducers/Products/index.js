const initialState = [];
const ProductList = (state = initialState, action) => {

   switch (action.type) {
      case "GET_PRODUCTS":
         return action.payload;
      default:
         return state;
   }
};
export default ProductList;
