import {
   
    GET_PASSWORDPOLICY_STARTED,
   
    GET_PASSWORDPOLICY_COMPLETED,
    GET_PASSWORDPOLICY_FAILED,
    SAVE_PASSWORDPOLICY_STARTED,
   
    SAVE_PASSWORDPOLICY_COMPLETED,
    SAVE_PASSWORDPOLICY_FAILED

} from '../actions/Passwordpolicy';

const intialpasswordpolicyData= {
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
export const passwordpolicyData = (state = intialpasswordpolicyData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_PASSWORDPOLICY_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_PASSWORDPOLICY_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_PASSWORDPOLICY_FAILED:
      return {
        ...state,
        isLoading: true,
      };
      case SAVE_PASSWORDPOLICY_STARTED:
        return {
             ...state,
             isLoading: true,    
             isFormSubmit:false,
             userInput: action.input
         };

     case SAVE_PASSWORDPOLICY_COMPLETED:
         console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
        // console.log("LOGININPUT"+state.loginInput.userId);
   
         return {
             ...state,
             isLoading: false,
             isFormSubmit:true,
             status: action.payload
             };
         
     case SAVE_PASSWORDPOLICY_FAILED:
         return {
             ...state,
             isLoading: true,
         };

        default:
            return state;
    }
};