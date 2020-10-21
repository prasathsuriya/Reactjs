import {
   
    GET_SUBDIVISION_STARTED,
   
    GET_SUBDIVISION_COMPLETED,
    GET_SUBDIVISION_FAILED,

} from '../actions/Subdivision';

const intialSUBDIVISIONData= {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    userInput: {       
        insert_datetime:"",
        inserted_by:"",
        update_datetime:"",
        updated_by:""
    
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
};
export const SUBDIVISIONData = (state = intialSUBDIVISIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_SUBDIVISION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_SUBDIVISION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_SUBDIVISION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};