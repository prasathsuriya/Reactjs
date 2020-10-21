import {
   
    GET_CIRCLE_STARTED,
   
    GET_CIRCLE_COMPLETED,
    GET_CIRCLE_FAILED,

} from '../actions/Circle';

const intialCIRCLEData= {
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
export const CIRCLEData = (state = intialCIRCLEData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_CIRCLE_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_CIRCLE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_CIRCLE_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};