import {
   
    GET_METERMFDETAILS_STARTED,
   
    GET_METERMFDETAILS_COMPLETED,
    GET_METERMFDETAILS_FAILED,

} from '../actions/Metermfdetails';

const intialMETERMFDETAILSData= {
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
export const METERMFDETAILSData = (state = intialMETERMFDETAILSData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_METERMFDETAILS_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_METERMFDETAILS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_METERMFDETAILS_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};