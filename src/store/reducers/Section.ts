import {
   
    GET_SECTION_STARTED,
   
    GET_SECTION_COMPLETED,
    GET_SECTION_FAILED,

} from '../actions/Section';

const intialSECTIONData= {
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
export const SECTIONData = (state = intialSECTIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_SECTION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_SECTION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_SECTION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};