import {
   
    GET_SUBTICKETCATEGORIES_STARTED,
   
    GET_SUBTICKETCATEGORIES_COMPLETED,
    GET_SUBTICKETCATEGORIES_FAILED,
    SAVE_SUBTICKETCATEGORIES_COMPLETED,
    SAVE_SUBTICKETCATEGORIES_FAILED,
    SAVE_SUBTICKETCATEGORIES_STARTED
} from '../actions/Ticketsubcategory';

const intialsubticketcategoriesData= {
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
export const subticketcategriesData = (state = intialsubticketcategoriesData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_SUBTICKETCATEGORIES_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_SUBTICKETCATEGORIES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_SUBTICKETCATEGORIES_FAILED:
      return {
        ...state,
        isLoading: true,
      };
      case SAVE_SUBTICKETCATEGORIES_STARTED:
        return {
             ...state,
             isLoading: true,    
             isFormSubmit:false,
             userInput: action.input
         };

     case SAVE_SUBTICKETCATEGORIES_COMPLETED:
         console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
        // console.log("LOGININPUT"+state.loginInput.userId);
   
         return {
             ...state,
             isLoading: false,
             isFormSubmit:true,
             status: action.payload
             };
         
     case SAVE_SUBTICKETCATEGORIES_FAILED:
         return {
             ...state,
             isLoading: true,
         };


        default:
            return state;
    }
};