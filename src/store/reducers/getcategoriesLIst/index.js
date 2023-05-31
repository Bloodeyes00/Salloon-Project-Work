const initialState = [];
const categoriesList = (state = initialState, action) => {

   switch (action.type) {
      case "CATEGORIES_LIST":
         return action.payload;
      default:
         return state;
   }
};
export default categoriesList;
