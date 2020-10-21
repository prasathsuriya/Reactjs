import {
   
    GET_NEWMETERLOCATION_STARTED,
   
    GET_NEWMETERLOCATION_COMPLETED,
    GET_NEWMETERLOCATION_FAILED,

} from '../actions/Newmeterlocation';

const intialNEWMETERLOCATIONData= {
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
export const NEWMETERLOCATIONData = (state = intialNEWMETERLOCATIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_NEWMETERLOCATION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_NEWMETERLOCATION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_NEWMETERLOCATION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};