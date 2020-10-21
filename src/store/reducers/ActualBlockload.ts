import {
   
    GET_ACTUALBLOCKLOAD_STARTED,
   
    GET_ACTUALBLOCKLOAD_COMPLETED,
    GET_ACTUALBLOCKLOAD_FAILED,

} from '../actions/ActualBlockload';

const intialACTUALBLOCKLOADData= {
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
export const ACTUALBLOCKLOADData = (state = intialACTUALBLOCKLOADData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_ACTUALBLOCKLOAD_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_ACTUALBLOCKLOAD_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_ACTUALBLOCKLOAD_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};