export const GET_REPORTONDEMAND_STARTED = "GET_REPORTONDEMAND_STARTED";
export const GET_REPORTONDEMAND_COMPLETED = "GET_REPORTONDEMAND_COMPLETED";
export const GET_REPORTONDEMAND_FAILED = "GET_REPORTONDEMAND_FAILED";

export interface IReportOnDemand {
  status: {
    statusCode: number;
    statusDisplay: string;
    statusValue: boolean;
  };
  items: Array<any>;
  reportInput: {
    selected: String;
    startdate: Date;
    enddate: Date;
    id: string;
    entry: number;
  };
  reportID: number;
  isLoading: boolean;
  error: string;
}

export const getReportOnDemand = (reportInput: any) => {
  return {
    type: GET_REPORTONDEMAND_STARTED,
    payload: "status",
    input: reportInput
  };
};
