import {
    SAVE_PUSH_SETUP_STARTED,
    SAVE_PUSH_SETUP_COMPLETED,
    SAVE_PUSH_SETUP_FAILED,
    GET_PUSH_SETUP_STARTED,
    DELETE_PUSH_SETUP_COMPLETED,
    DELETE_PUSH_SETUP_FAILED,
    DELETE_PUSH_SETUP_STARTED,
    GET_PUSH_SETUP_COMPLETED,
    GET_PUSH_SETUP_FAILED
} from '../actions/PushSetup';

const intialpushSetupData= {
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
    isListLoading:true,
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
};
export const pushSetupData = (state = intialpushSetupData, action: any) => {
    console.log(action.type
        );
    switch (action.type) {
        case GET_PUSH_SETUP_STARTED:     
        state.isListLoading=true;   
        state.items=[];     
      return {
        ...state,
        items:[],
        isListLoading: true,
      };
    case GET_PUSH_SETUP_COMPLETED:
      state.isListLoading=false;
      return {
        ...state,
        isListLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_PUSH_SETUP_FAILED:
      return {
        ...state,
        isListLoading: true,
      };
        case SAVE_PUSH_SETUP_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_PUSH_SETUP_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_PUSH_SETUP_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_PUSH_SETUP_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_PUSH_SETUP_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_PUSH_SETUP_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};