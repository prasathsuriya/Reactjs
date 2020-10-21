import {
    SAVE_JOBSCHEDULE_STARTED,
    SAVE_JOBSCHEDULE_COMPLETED,
    SAVE_JOBSCHEDULE_FAILED,GET_JOBSCHEDULE_STARTED,DELETE_JOBSCHEDULE_COMPLETED,DELETE_JOBSCHEDULE_FAILED,DELETE_JOBSCHEDULE_STARTED,GET_JOBSCHEDULE_COMPLETED,GET_JOBSCHEDULE_FAILED
} from '../actions/JobSchedule';

const intialjobscheduleData= {
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
export const jobscheduleData = (state = intialjobscheduleData, action: any) => {
    console.log(action.type
        );
    switch (action.type) {
        case GET_JOBSCHEDULE_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_JOBSCHEDULE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_JOBSCHEDULE_FAILED:
      return {
        ...state,
        isLoading: true,
      };
        case SAVE_JOBSCHEDULE_STARTED:
           return {
                ...state,
                isLoading: true,    
                isFormSubmit:false,
                userInput: action.input
            };

        case SAVE_JOBSCHEDULE_COMPLETED:
            console.log("SAVE_SCHEDULE_COMPLETED "+ action.payload.firstName+"---action"+action);
           // console.log("LOGININPUT"+state.loginInput.userId);
            return {
                ...state,
                isLoading: false,
                isFormSubmit:true,
                status: action.payload
                };
            
        case SAVE_JOBSCHEDULE_FAILED:
            return {
                ...state,
                isLoading: true,
            };

            case DELETE_JOBSCHEDULE_STARTED:
                return {
                  ...state,
                  isLoading: true,
                };
              case DELETE_JOBSCHEDULE_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  status: action.status,                  
                };
              case DELETE_JOBSCHEDULE_FAILED:
                return {
                  ...state,
                  isLoading: true,
                };

        default:
            return state;
    }
};