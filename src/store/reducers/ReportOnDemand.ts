import {
  GET_REPORTONDEMAND_COMPLETED,
  GET_REPORTONDEMAND_FAILED,
  GET_REPORTONDEMAND_STARTED
} from "../actions/ReportOnDemand";

const intialReportData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [],
  reportInput: {
    selected: "",
    startdate: "",
    enddate: "",
    id: "",
    entry: 0
  },
  isLoading: false,
  isFormSubmit: false,
  error: ""
};

export const reportOnDemandtData = (state = intialReportData, action: any) => {
  switch (action.type) {
    case GET_REPORTONDEMAND_STARTED:
      return {
        items: [],
        ...state,
        isLoading: true
      };
    case GET_REPORTONDEMAND_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_REPORTONDEMAND_FAILED:
      return {
        items: [],
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
