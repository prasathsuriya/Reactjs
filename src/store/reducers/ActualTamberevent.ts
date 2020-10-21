import {
   
    GET_ACTUALTAMBEREVENT_STARTED,
   
    GET_ACTUALTAMBEREVENT_COMPLETED,
    GET_ACTUALTAMBEREVENT_FAILED,

} from '../actions/Actaultamberevent';

const intialACTUALTAMBEREVENTData= {
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
export const ACTUALTAMBEREVENTData = (state = intialACTUALTAMBEREVENTData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_ACTUALTAMBEREVENT_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_ACTUALTAMBEREVENT_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_ACTUALTAMBEREVENT_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};