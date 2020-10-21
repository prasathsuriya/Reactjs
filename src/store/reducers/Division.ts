import {
   
    GET_DIVISION_STARTED,
   
    GET_DIVISION_COMPLETED,
    GET_DIVISION_FAILED,

} from '../actions/Division';

const intialDIVISIONData= {
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
export const DIVISIONData = (state = intialDIVISIONData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_DIVISION_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_DIVISION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_DIVISION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};