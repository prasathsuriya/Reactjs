import {
  GET_REPORT_COLUMNNAMES_STARTED,
  GET_REPORT_COLUMNNAMES_FAILED,
  GET_REPORT_COLUMNNAMES_COMPLETED
} from "../actions/ReportColumns";

import ColumnType from "../types/Columns";

const intialReportData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: Array<ColumnType>(),
  isLoading: true,
  error: ""
};

export const reportColumnNames = (state = intialReportData, action: any) => {
  switch (action.type) {
    case GET_REPORT_COLUMNNAMES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_REPORT_COLUMNNAMES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_REPORT_COLUMNNAMES_COMPLETED:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
