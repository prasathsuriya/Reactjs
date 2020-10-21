import {
   
    GET_ACTUALDAILYLOAD_STARTED,
   
    GET_ACTUALDAILYLOAD_COMPLETED,
    GET_ACTUALDAILYLOAD_FAILED,

} from '../actions/Actualdailyload';

const intialACTUALDAILYLOADData= {
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
export const ACTUALDAILYLOADData = (state = intialACTUALDAILYLOADData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_ACTUALDAILYLOAD_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_ACTUALDAILYLOAD_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_ACTUALDAILYLOAD_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};