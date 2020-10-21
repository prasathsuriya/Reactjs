import {
   
    SAVE_LOGIN_STARTED,
    SAVE_LOGIN_COMPLETED,
    SAVE_LOGIN_FAILED,
    
   
} from '../actions/Login';

const intialLoginData= {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    loginInput: {       
        userId: "",
        password: "",
        securityQuestion: "",
        answer: "",
        roleFkId:{roleId:0,roleName:"",description:"",status:0,createdAt:"",createdBy:"",updatedAt:"",updatedBy:""},
        status:0,
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
export const loginData = (state = intialLoginData, action: any) => {
    console.log(action.type
        );
    switch (action.type) {
       
        case SAVE_LOGIN_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                loginInput: action.input
            };

        case SAVE_LOGIN_COMPLETED:
            console.log("SAVE_LOGIN_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_LOGIN_FAILED:
            return {
                ...state,
                isLoading: true,
            };

        default:
            return state;
    }
};



