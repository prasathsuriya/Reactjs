import {
    SAVE_METERDETAILS_STARTED,
    SAVE_METERDETAILS_COMPLETED,
    SAVE_METERDETAILS_FAILED,
   
} from '../actions/Meterdetails';

const intialMETERDETAILSData= {
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
export const METERDETAILSData = (state = intialMETERDETAILSData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        
        case SAVE_METERDETAILS_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_METERDETAILS_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_METERDETAILS_FAILED:
            return {
                ...state,
                isLoading: true,
            };

           
        default:
            return state;
    }
};