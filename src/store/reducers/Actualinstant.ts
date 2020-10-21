import {
   
    GET_ACTUALINSTANT_STARTED,
   
    GET_ACTUALINSTANT_COMPLETED,
    GET_ACTUALINSTANT_FAILED,

} from '../actions/ActualInstant';

const intialACTUALINSTANTData= {
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
export const ACTUALINSTANTData = (state = intialACTUALINSTANTData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_ACTUALINSTANT_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_ACTUALINSTANT_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_ACTUALINSTANT_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};