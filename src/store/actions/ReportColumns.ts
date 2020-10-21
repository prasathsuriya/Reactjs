export const GET_REPORT_COLUMNNAMES_STARTED = "GET_REPORT_COLUMNNAMES_STARTED";
export const GET_REPORT_COLUMNNAMES_COMPLETED =
  "GET_REPORT_COLUMNNAMES_COMPLETED";
export const GET_REPORT_COLUMNNAMES_FAILED = "GET_REPORT_COLUMNNAMES_FAILED";

export interface IReport {
  items: Array<any>;
}

export const getReportColumnNames = (reportInput: any) => {
  return {
    type: GET_REPORT_COLUMNNAMES_STARTED,
    payload: "status",
    input: reportInput
  };
};
