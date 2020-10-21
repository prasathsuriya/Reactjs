import {
    SAVE_RCREPORTING_STARTED,
    SAVE_RCREPORTING_COMPLETED,
    SAVE_RCREPORTING_FAILED,
    GET_RCREPORTING_STARTED,
    DELETE_RCREPORTING_COMPLETED,
    DELETE_RCREPORTING_FAILED,
    DELETE_RCREPORTING_STARTED,
    GET_RCREPORTING_COMPLETED,
    GET_RCREPORTING_FAILED
} from '../actions/Rcreporting';

const intialrcreportingData= {
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
export const rcreportingData = (state = intialrcreportingData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_RCREPORTING_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_RCREPORTING_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_RCREPORTING_FAILED:
      return {
        ...state,
        isLoading: true,
      };
        case SAVE_RCREPORTING_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_RCREPORTING_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_RCREPORTING_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_RCREPORTING_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_RCREPORTING_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_RCREPORTING_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};