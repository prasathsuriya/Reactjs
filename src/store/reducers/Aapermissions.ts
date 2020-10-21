import {
    SAVE_AAPERMISSIONS_STARTED,
    SAVE_AAPERMISSIONS_COMPLETED,
    SAVE_AAPERMISSIONS_FAILED,
    GET_AAPERMISSIONS_STARTED,
    DELETE_AAPERMISSIONS_COMPLETED,
    DELETE_AAPERMISSIONS_FAILED,
    DELETE_AAPERMISSIONS_STARTED,
    GET_AAPERMISSIONS_COMPLETED,
    GET_AAPERMISSIONS_FAILED
} from '../actions/Aapermissions';

const intialaapermissionsData= {
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
export const aapermissionsData = (state = intialaapermissionsData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_AAPERMISSIONS_STARTED:   
       // alert("action type")   ;    
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_AAPERMISSIONS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_AAPERMISSIONS_FAILED:
      return {
        ...state,
        isLoading: true,
      };
        case SAVE_AAPERMISSIONS_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_AAPERMISSIONS_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_AAPERMISSIONS_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_AAPERMISSIONS_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_AAPERMISSIONS_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_AAPERMISSIONS_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};