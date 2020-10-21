import {
    GET_PASSWORDHISTORY_STARTED,
    GET_PASSWORDHISTORY_COMPLETED,
    GET_PASSWORDHISTORY_FAILED
    
} from '../actions/Passwordhistory';

const intialPasswordhistoryData= {
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
export const passwordhistoryData = (state = intialPasswordhistoryData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
       
            case GET_PASSWORDHISTORY_STARTED:          
            return {
              ...state,
              items:[],
              isLoading: true,
              actcode: action.input
            };
          case GET_PASSWORDHISTORY_COMPLETED:
            return {
              ...state,
              isLoading: false,
              status: action.status,
              items: action.payload
            };
          case GET_PASSWORDHISTORY_FAILED:
            return {
              ...state,
              isLoading: true,
            };
   

        default:
            return state;
    }
};