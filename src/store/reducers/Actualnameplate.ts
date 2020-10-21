import {
   
    GET_ACTUALNAMEPLATE_STARTED,
   
    GET_ACTUALNAMEPLATE_COMPLETED,
    GET_ACTUALNAMEPLATE_FAILED,

} from '../actions/Actualnameplate';

const intialACTUALNAMEPLATEData= {
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
export const ACTUALNAMEPLATEData = (state = intialACTUALNAMEPLATEData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_ACTUALNAMEPLATE_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_ACTUALNAMEPLATE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_ACTUALNAMEPLATE_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};