const initialState = null

export const contactInfo = (state=initialState, action)=>{
    switch (action.type){
        case "ADD_CONTACT_INFO":
            return action.type
        default:
            return state;
    }

}