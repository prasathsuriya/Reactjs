import {
    SAVE_CONSUMER_STARTED,
    SAVE_CONSUMER_COMPLETED,
    SAVE_CONSUMER_FAILED,
    GET_CONSUMER_STARTED,
    DELETE_CONSUMER_COMPLETED,
    DELETE_CONSUMER_FAILED,
    DELETE_CONSUMER_STARTED,
    GET_CONSUMER_COMPLETED,
    GET_CONSUMER_FAILED
} from '../actions/Consumer';

const intialconsumerData= {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    userInput: {       
        createdAt:"",
        createdBy:"",
        updatedAt:"",
        updatedBy:""
    
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
};
export const consumerData = (state = intialconsumerData, action: any) => {
    console.log(action.type
        );
    switch (action.type) {
        case GET_CONSUMER_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_CONSUMER_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_CONSUMER_FAILED:
      return {
        ...state,
        isLoading: true,
      };
        case SAVE_CONSUMER_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_CONSUMER_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_CONSUMER_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_CONSUMER_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_CONSUMER_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_CONSUMER_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};