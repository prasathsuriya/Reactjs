import {
   
    GET_METERDATE_STARTED,
   
    GET_METERDATE_COMPLETED,
    GET_METERDATE_FAILED,

} from '../actions/Meterdate';

const intialMETERDATEData= {
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
export const METERDATEData = (state = intialMETERDATEData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_METERDATE_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_METERDATE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_METERDATE_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};