import {

    GET_AAAROLEPERMISSION_STARTED,
    GET_AAAROLEPERMISSION_COMPLETED,
    GET_AAAROLEPERMISSION_FAILED,
    SAVE_AAAROLEPERMISSION_STARTED,
    SAVE_AAAROLEPERMISSION_COMPLETED,
    SAVE_AAAROLEPERMISSION_FAILED,UPDATE_STATUS_COMPLETED,UPDATE_STATUS_FAILED,UPDATE_STATUS_STARTED
    
  } from '../actions/CreateRolepermission';
  
  const intialRolepermissionData = {
    status: {
      statusCode: 300,
      statusDisplay: "",
      statusValue: true
    },
    items: [],
    rolepermissionInput: {
      insertedby: "",
      updatedby: "",
      effectivedate: "",
      enddate: "",
      roleId: 0,
      userId: "",
      tenantId: 0
  
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: ''
  };
  export const newRolepermissionData = (state = intialRolepermissionData, action: any) => {
    console.log(action.type
    );
    switch (action.type) {
  
      case GET_AAAROLEPERMISSION_STARTED:
        return {
          ...state,
          aarolepermissionList:[],
          isLoading: true,
        };
      case GET_AAAROLEPERMISSION_COMPLETED:
        return {
          ...state,
          isLoading: false,
          status: action.status,
          aarolepermissionList: action.payload
        };
      case GET_AAAROLEPERMISSION_FAILED:
        return {
          ...state,
          isLoading: true,
        };
  
      case SAVE_AAAROLEPERMISSION_STARTED:
        return {
          ...state,
          isLoading: true,
          isFormSubmit: false,
          rolepermissionInput: action.input
        };
  
      case SAVE_AAAROLEPERMISSION_COMPLETED:
        console.log("SAVE_AAAROLEPERMISSION_COMPLETED " + action.payload.insertedby + "---action" + action);
        // console.log("LOGININPUT"+state.loginInput.userId);
        return {
          ...state,
          isLoading: false,
          isFormSubmit: true,
          status: action.payload
        };
  
      case SAVE_AAAROLEPERMISSION_FAILED:
        return {
          ...state,
          isLoading: true,
        };
  
  
        case UPDATE_STATUS_STARTED:
        return {
          ...state,
          isLoading: true,
          isFormSubmit: false,
          rolepermissionInput: action.input
        };
  
      case UPDATE_STATUS_COMPLETED:      
        return {
          ...state,
          isLoading: false,
          isFormSubmit: true,
          status: action.payload
        };
  
      case UPDATE_STATUS_FAILED:
        return {
          ...state,
          isLoading: true,
        };
  
      default:
        return state;
    }
  };