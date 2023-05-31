const initialState = {lat:"",lng:""};
const Location = (state = initialState, action) => {

   switch (action.type) {
      case "GET_LOCATION":
         return {...state,lat:action.payload.lat,lng:action.payload.lng};
      default:
         return state;
   }
};
export default Location;
