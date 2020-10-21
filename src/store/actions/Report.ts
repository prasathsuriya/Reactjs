export const SAVE_REPORT_STARTED = "SAVE_REPORT_STARTED";
export const SAVE_REPORT_COMPLETED = "SAVE_REPORT_COMPLETED";
export const SAVE_REPORT_FAILED = "SAVE_REPORT_FAILED";

export const GET_REPORT_STARTED = "GET_REPORT_STARTED";
export const GET_REPORT_COMPLETED = "GET_REPORT_COMPLETED";
export const GET_REPORT_FAILED = "GET_REPORT_FAILED";

export const GET_SEARCH_LIST_STARTED = "GET_SEARCH_LIST_STARTED";
export const GET_SEARCH_LIST_COMPLETED = "GET_SEARCH_LIST_COMPLETED";
export const GET_SEARCH_LIST_FAILED = "GET_SEARCH_LIST_FAILED";

export interface IReport {
  status: {
    statusCode: number;
    statusDisplay: string;
    statusValue: boolean;
  };
  items: Array<any>;
  reportInput: {
    selected: string;
    startdate: string;
    enddate: string;
    id: string;
  };
  searchCriteria: any;
  isSearchCriteria:boolean;
  reportID: number;
  isLoading: boolean;
  error: string;
}

export const saveReport = (reportInput: any) => {
  return {
    type: SAVE_REPORT_STARTED,
    payload: "status",
    input: reportInput
  };
};

export const getReport = (reportInput: any) => {
  return {
    type: GET_REPORT_STARTED,
    payload: "status",
    input: reportInput
  };
};

export const getAllSearchCriteriaList = (reportInput: any) => {
  return {
    type: GET_SEARCH_LIST_STARTED,
    payload: "status",
    input: reportInput
  };
};
