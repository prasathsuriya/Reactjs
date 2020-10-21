import {
    SAVE_NEWPASSWORDRESET_STARTED,
    SAVE_NEWPASSWORDRESET_COMPLETED,
    SAVE_NEWPASSWORDRESET_FAILED,
    
} from '../actions/Newpasswordreset';

const intialNewpasswordresetData= {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    passwordInput: {       
        userId:"",
        password:""
    
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
};
export const newpasswordresetData = (state = intialNewpasswordresetData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
       
        case SAVE_NEWPASSWORDRESET_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_NEWPASSWORDRESET_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_NEWPASSWORDRESET_FAILED:
            return {
                ...state,
                isLoading: true,
            };
   

        default:
            return state;
    }
};