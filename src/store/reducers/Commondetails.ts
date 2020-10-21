import {
   
    GET_COMMONDETAILS_STARTED,
   
    GET_COMMONDETAILS_COMPLETED,
    GET_COMMONDETAILS_FAILED,
    SAVE_COMMONDETAILS_STARTED,
   
    SAVE_COMMONDETAILS_COMPLETED,
    SAVE_COMMONDETAILS_FAILED

} from '../actions/Commondetails';

const intialcommondetailsData= {
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
export const commondetailsData = (state = intialcommondetailsData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_COMMONDETAILS_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_COMMONDETAILS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_COMMONDETAILS_FAILED:
      return {
        ...state,
        isLoading: true,
      };
      case SAVE_COMMONDETAILS_STARTED:
        return {
             ...state,
             isLoading: true,    
             isFormSubmit:false,
             userInput: action.input
         };

     case SAVE_COMMONDETAILS_COMPLETED:
         console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
        // console.log("LOGININPUT"+state.loginInput.userId);
   
         return {
             ...state,
             isLoading: false,
             isFormSubmit:true,
             status: action.payload
             };
         
     case SAVE_COMMONDETAILS_FAILED:
         return {
             ...state,
             isLoading: true,
         };

        default:
            return state;
    }
};