import {
   
    GET_ACTUALBILLING_STARTED,
   
    GET_ACTUALBILLING_COMPLETED,
    GET_ACTUALBILLING_FAILED,

} from '../actions/Actualbilling';

const intialACTUALBILLINGData= {
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
export const ACTUALBILLINGData = (state = intialACTUALBILLINGData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_ACTUALBILLING_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_ACTUALBILLING_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_ACTUALBILLING_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};