import {
   
    GET_METERMANUFACTURE_STARTED,
   
    GET_METERMANUFACTURE_COMPLETED,
    GET_METERMANUFACTURE_FAILED,

} from '../actions/metermanufacture';

const intialMETERMANUFACTUREData= {
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
export const METERMANUFACTUREData = (state = intialMETERMANUFACTUREData, action: any) => {
    console.log(action.type );
 
    switch (action.type) {
        case GET_METERMANUFACTURE_STARTED:          
      return {
        ...state,
        items:[],
        isLoading: true,
      };
    case GET_METERMANUFACTURE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_METERMANUFACTURE_FAILED:
      return {
        ...state,
        isLoading: true,
      };
     

        default:
            return state;
    }
};