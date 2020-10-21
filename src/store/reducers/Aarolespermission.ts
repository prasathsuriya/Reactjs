import {
    SAVE_AAROLESPERMISSION_STARTED,
    SAVE_AAROLESPERMISSION_COMPLETED,
    SAVE_AAROLESPERMISSION_FAILED,
    GET_AAROLESPERMISSION_STARTED,
    DELETE_AAROLESPERMISSION_COMPLETED,
    DELETE_AAROLESPERMISSION_FAILED,
    DELETE_AAROLESPERMISSION_STARTED,
    GET_AAROLESPERMISSION_COMPLETED,
    GET_AAROLESPERMISSION_FAILED
} from '../actions/Aarolespermission';

const intialaarolespermissionData= {
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
export const aarolespermissionData = (state = intialaarolespermissionData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_AAROLESPERMISSION_STARTED:   
       // alert("action type")   ;    
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_AAROLESPERMISSION_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_AAROLESPERMISSION_FAILED:
      return {
        ...state,
        isLoading: true,
      };
        case SAVE_AAROLESPERMISSION_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_AAROLESPERMISSION_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_AAROLESPERMISSION_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_AAROLESPERMISSION_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_AAROLESPERMISSION_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_AAROLESPERMISSION_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};