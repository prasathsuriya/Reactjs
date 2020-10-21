import {
    SAVE_TICKETS_STARTED,
    SAVE_TICKETS_COMPLETED,
    SAVE_TICKETS_FAILED,
    GET_TICKETS_STARTED,
    GET_TICKETS_COMPLETED,
    GET_TICKETS_FAILED

} from '../actions/Tickets';

const intialticketsData= {
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
export const ticketsData = (state = intialticketsData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
       
        case SAVE_TICKETS_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_TICKETS_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
      
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_TICKETS_FAILED:
            return {
                ...state,
                isLoading: true,
            };
            case GET_TICKETS_STARTED:          
            return {
              ...state,
              items:[],
              isLoading: true,
            };
          case GET_TICKETS_COMPLETED:
            return {
              ...state,
              isLoading: false,
              status: action.status,
              items: action.payload
            };
          case GET_TICKETS_FAILED:
            return {
              ...state,
              isLoading: true,
            };

        default:
            return state;
    }
};