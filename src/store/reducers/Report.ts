import {
  SAVE_REPORT_STARTED,
  SAVE_REPORT_COMPLETED,
  SAVE_REPORT_FAILED,
  GET_REPORT_COMPLETED,
  GET_REPORT_FAILED,
  GET_REPORT_STARTED,
  GET_SEARCH_LIST_STARTED,
  GET_SEARCH_LIST_COMPLETED,
  GET_SEARCH_LIST_FAILED
} from "../actions/Report";

const intialReportData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [],
  userInput: {
    profile: "",
    startdate: "",
    enddate: "",
    createdAt: "",
    createdBy: "",
    updatedAt: "",
    updatedBy: ""
  },
  isSearchCriteriaLoading:false,
  searchCriteria: null,
  isLoading: false,
  isFormSubmit: false,
  isLoggedIn: false,
  error: ""
};
export const reportData = (state = intialReportData, action: any) => {
  switch (action.type) {
    case GET_REPORT_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_REPORT_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_REPORT_FAILED:
      return {
        ...state,
        isLoading: true
      };

    case SAVE_REPORT_STARTED:
      return {
        ...state,
        isLoading: true,
        isFormSubmit: false,
        userInput: action.input
      };

    case SAVE_REPORT_COMPLETED:
      console.log(
        "SAVE_REPORT_COMPLETED " +
          action.payload.firstName +
          "---action" +
          action
      );
      // console.log("LOGININPUT"+state.loginInput.userId);
      return {
        ...state,
        isLoading: false,
        isFormSubmit: true,
        status: action.payload
      };

    case SAVE_REPORT_FAILED:
      return {
        ...state,
        isLoading: true
      };


      case GET_SEARCH_LIST_STARTED:
      return {
        ...state,
        isSearchCriteriaLoading: true,
        isFormSubmit: false,
        userInput: action.input
      };

    case GET_SEARCH_LIST_COMPLETED:
     return {
        ...state,
        isSearchCriteriaLoading: false,
        isFormSubmit: true,
        status: action.status,
        searchCriteria: action.payload
      };

    case GET_SEARCH_LIST_FAILED:
      return {
        ...state,
        isSearchCriteriaLoading: true
      };

    default:
      return state;
  }
};
