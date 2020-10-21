import {
    SAVE_PASSWORDRESET_STARTED,
    SAVE_PASSWORDRESET_COMPLETED,
    SAVE_PASSWORDRESET_FAILED,
    GET_ACTCODEPASSWORD_STARTED,
    GET_ACTCODEPASSWORD_COMPLETED,
    GET_ACTCODEPASSWORD_FAILED
    
} from '../actions/Passwordreset';

const intialPasswordresetData= {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    passwordInput: {       
        userId:"",
        actcode:"",
        password:""
    
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
};
export const passwordresetData = (state = intialPasswordresetData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
       
        case SAVE_PASSWORDRESET_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_PASSWORDRESET_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
           //alert(JSON.stringify(action.payload));
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_PASSWORDRESET_FAILED:
            return {
                ...state,
                isLoading: true,
            };
            case GET_ACTCODEPASSWORD_STARTED:          
            return {
              ...state,
              items:[],
              isLoading: true,
              actcode: action.input
            };
          case GET_ACTCODEPASSWORD_COMPLETED:
            return {
              ...state,
              isLoading: false,
              status: action.status,
              items: action.payload
            };
          case GET_ACTCODEPASSWORD_FAILED:
            return {
              ...state,
              isLoading: true,
            };
   

        default:
            return state;
    }
};