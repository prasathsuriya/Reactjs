import {
   
    GET_TRANSFORMER_STARTED,
   
    GET_TRANSFORMER_COMPLETED,
    GET_TRANSFORMER_FAILED

} from '../actions/Transformer';

const intialTRANSFORMERData= {
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
export const TRANSFORMERData = (state = intialTRANSFORMERData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_TRANSFORMER_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_TRANSFORMER_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_TRANSFORMER_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};