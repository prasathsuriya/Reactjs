import {
   
    GET_METERLOCATION_STARTED,
   
    GET_METERLOCATION_COMPLETED,
    GET_METERLOCATION_FAILED,

} from '../actions/Meterlocation';

const intialMETERLOCATIONData= {
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
export const METERLOCATIONData = (state = intialMETERLOCATIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_METERLOCATION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_METERLOCATION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_METERLOCATION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};