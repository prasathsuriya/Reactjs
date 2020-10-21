import {
   
    GET_METERCONNECTION_STARTED,
   
    GET_METERCONNECTION_COMPLETED,
    GET_METERCONNECTION_FAILED,

} from '../actions/Meterconnection';

const intialMETERCONNECTIONData= {
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
export const METERCONNECTIONData = (state = intialMETERCONNECTIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_METERCONNECTION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_METERCONNECTION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_METERCONNECTION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};