import {
   
    GET_TICKETCATEGORIES_STARTED,
   
    GET_TICKETCATEGORIES_COMPLETED,
    GET_TICKETCATEGORIES_FAILED,
    SAVE_TICKETCATEGORIES_STARTED,
   
    SAVE_TICKETCATEGORIES_COMPLETED,
    SAVE_TICKETCATEGORIES_FAILED

} from '../actions/Ticketcategory';

const intialticketcategoriesData= {
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
export const ticketcategriesData = (state = intialticketcategoriesData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_TICKETCATEGORIES_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_TICKETCATEGORIES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_TICKETCATEGORIES_FAILED:
      return {
        ...state,
        isLoading: true,
      };
      case SAVE_TICKETCATEGORIES_STARTED:
        return {
             ...state,
             isLoading: true,    
             isFormSubmit:false,
             userInput: action.input
         };

     case SAVE_TICKETCATEGORIES_COMPLETED:
         console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
        // console.log("LOGININPUT"+state.loginInput.userId);
   
         return {
             ...state,
             isLoading: false,
             isFormSubmit:true,
             status: action.payload
             };
         
     case SAVE_TICKETCATEGORIES_FAILED:
         return {
             ...state,
             isLoading: true,
         };

        default:
            return state;
    }
};