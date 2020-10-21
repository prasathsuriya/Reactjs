import {
   
    GET_TOWN_STARTED,
   
    GET_TOWN_COMPLETED,
    GET_TOWN_FAILED

} from '../actions/Town';

const intialTOWNData= {
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
export const TOWNData = (state = intialTOWNData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_TOWN_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_TOWN_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_TOWN_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};