import {
    SAVE_AAROLES_STARTED,
    SAVE_AAROLES_COMPLETED,
    SAVE_AAROLES_FAILED,
    GET_AAROLES_STARTED,
    DELETE_AAROLES_COMPLETED,
    DELETE_AAROLES_FAILED,
    DELETE_AAROLES_STARTED,
    GET_AAROLES_COMPLETED,
    GET_AAROLES_FAILED
} from '../actions/Aaroles';

const intialaarolesData= {
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
export const aarolesData = (state = intialaarolesData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_AAROLES_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_AAROLES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_AAROLES_FAILED:
      return {
        ...state,
        isLoading: true,
      };
        case SAVE_AAROLES_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_AAROLES_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_AAROLES_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_AAROLES_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_AAROLES_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_AAROLES_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};