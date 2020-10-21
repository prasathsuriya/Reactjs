import {
   
    GET_METERDETAIL_STARTED,
   
    GET_METERDETAIL_COMPLETED,
    GET_METERDETAIL_FAILED,

} from '../actions/Meterdetail';

const intialMETERDETAILData= {
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
export const METERDETAILData = (state = intialMETERDETAILData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_METERDETAIL_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_METERDETAIL_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_METERDETAIL_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};