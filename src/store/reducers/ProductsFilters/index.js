const initialState = {
  services:[],
  products:[],
  ratings:0,
  gender:"",
  distance:100,
  sort_by:""

};
const ProductsFilters = (state = initialState, action) => {
 
  switch (action.type) {
    case "UPDATE_FILTERS":
      return action.payload;
    default:
      return state;
  }
};
export default ProductsFilters;
