import {
    SAVE_FORGOTPASSWORD_STARTED,
    SAVE_FORGOTPASSWORD_COMPLETED,
    SAVE_FORGOTPASSWORD_FAILED,
    
} from '../actions/Forgotpassword';

const intialForgotpasswordData= {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    passwordInput: {       
        userId:""
    
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
};
export const forgotpasswordData = (state = intialForgotpasswordData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
       
        case SAVE_FORGOTPASSWORD_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_FORGOTPASSWORD_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_FORGOTPASSWORD_FAILED:
            return {
                ...state,
                isLoading: true,
            };

   

        default:
            return state;
    }
};