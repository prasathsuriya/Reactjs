import {
   
    GET_SUBSTATION_STARTED,
   
    GET_SUBSTATION_COMPLETED,
    GET_SUBSTATION_FAILED,

} from '../actions/Substation';

const intialSUBSTATIONData= {
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
export const SUBSTATIONData = (state = intialSUBSTATIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_SUBSTATION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_SUBSTATION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_SUBSTATION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};