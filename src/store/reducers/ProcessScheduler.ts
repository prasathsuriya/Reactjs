import {SAVE_NEW_PS_FORM_STARTED,
    SAVE_NEW_PS_FORM_COMPLETED,
    SAVE_NEW_PS_FORM_FAILED,
    GET_PS_DETAILS_STARTED,
  GET_PS_DETAILS_COMPLETED,
  GET_PS_DETAILS_FAILED
} from "../actions/ProcessScheduler";
const intialNewPSFormData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [],
    newInputForm  :{
        countryName:"",
        stateName:"",
        regionName:"",
        districtName:"",
        subStationName:"",
        feederName:"",
        processName:""
    },
    isLoading: false, 
    isFormSubmit: false,
    isListLoading: true
};
    export const inputFormData = (state = intialNewPSFormData, action: any) => {
   //   alert(action.type);
        switch (action.type) {
            case SAVE_NEW_PS_FORM_STARTED:
                return {
                  ...state,
                  isLoading: true,
                  isFormSubmit: false,
                  newInputForm: action.input
                };
              case SAVE_NEW_PS_FORM_COMPLETED:
                return {
                  ...state,
                  isLoading: false,
                  isFormSubmit: true,
                  status: action.payload
                };
              case SAVE_NEW_PS_FORM_FAILED:
                return {
                  ...state,
                  isLoading: true
                };
                case GET_PS_DETAILS_STARTED:
                  state.isListLoading=true;
                  state.items=[];
                  return {
                    ...state,
                    items: [],
                    input: action.input,
                    isListLoading: true
                  };
                case GET_PS_DETAILS_COMPLETED:
                  return {
                    ...state,
                    isListLoading: false,
                    input: action.input,
                    status: action.status,
                    items: action.payload
                  };
                case GET_PS_DETAILS_FAILED: 
                  return {
                    ...state,
                    input: action.input,
                    isListLoading: true
                  };
                default:
                  return state;
              }
        
    };
 