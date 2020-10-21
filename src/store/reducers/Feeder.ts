import {
   
    GET_FEEDER_STARTED,
   
    GET_FEEDER_COMPLETED,
    GET_FEEDER_FAILED,

} from '../actions/Feeder';

const intialFEEDERData= {
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
export const FEEDERData = (state = intialFEEDERData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_FEEDER_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_FEEDER_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_FEEDER_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};