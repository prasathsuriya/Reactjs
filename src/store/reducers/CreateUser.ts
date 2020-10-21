import {

  GET_USER_STARTED,
  GET_USER_COMPLETED,
  GET_USER_FAILED,
  SAVE_USER_STARTED,
  SAVE_USER_COMPLETED,
  SAVE_USER_FAILED,UPDATE_STATUS_COMPLETED,UPDATE_STATUS_FAILED,UPDATE_STATUS_STARTED
  
} from '../actions/CreateUser';

const intialUserData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [],
  userInput: {
    emailId: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    roleId: 0,
    userId: "",
    companyAutoId: 0

  },
  isLoading: true,
  isListLoading:true,
  isFormSubmit: false,
  isLoggedIn: false,
  error: '',
  userList:[]
};
export const newUserData = (state = intialUserData, action: any) => {
  console.log(action.type
  );
  switch (action.type) {

    case GET_USER_STARTED:
      state.isListLoading=true;
      state.userList=[];
      return {
        ...state,
        userList:[],
        isListLoading: true,
      };
    case GET_USER_COMPLETED:
      state.isListLoading=false;
      return {
        ...state,
        isListLoading: false,
        status: action.status,
        userList: action.payload
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isListLoading: true,
      };

    case SAVE_USER_STARTED:
      return {
        ...state,
        isLoading: true,
        isFormSubmit: false,
        userInput: action.input
      };

    case SAVE_USER_COMPLETED:
      console.log("SAVE_USER_COMPLETED " + action.payload.firstName + "---action" + action);
      // console.log("LOGININPUT"+state.loginInput.userId);
      return {
        ...state,
        isLoading: false,
        isFormSubmit: true,
        status: action.payload
      };

    case SAVE_USER_FAILED:
      return {
        ...state,
        isLoading: true,
      };


      case UPDATE_STATUS_STARTED:
      return {
        ...state,
        isLoading: true,
        isFormSubmit: false,
        userInput: action.input
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