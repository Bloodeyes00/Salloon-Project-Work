const initialState = [];
const SaloonList = (state = initialState, action) => {

   switch (action.type) {
      case "SALOON_LIST":
         return action.payload;
      default:
         return state;
   }
};
export default SaloonList;
