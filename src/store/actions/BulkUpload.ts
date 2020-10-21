export const SAVE_BULK_UPLOAD_STARTED = "SAVE_BULK_UPLOAD_STARTED";
export const SAVE_BULK_UPLOAD_COMPLETED = "SAVE_BULK_UPLOAD_COMPLETED";
export const SAVE_BULK_UPLOAD_FAILED = "SAVE_BULK_UPLOAD_FAILED";

export const GET_BULK_UPLOAD_STARTED = "GET_BULK_UPLOAD_STARTED";
export const GET_BULK_UPLOAD_COMPLETED = "GET_BULK_UPLOAD_COMPLETED";
export const GET_BULK_UPLOAD_FAILED = "GET_BULK_UPLOAD_FAILED";

export interface IBulkUpload {
  status: {
    statusCode: number;
    statusDisplay: string;
    statusValue: boolean;
  };
  items: Array<any>;
  bulkUploadInput: {
    selected: string;
    startdate: string;
    enddate: string;
    id: string;
  };
  bulkUploadID: number;
  isLoading: boolean;
  error: string;
}

export const saveBulkUpload = (bulkUploadInput: any) => {
  return {
    type: SAVE_BULK_UPLOAD_STARTED,
    payload: "status",
    input: bulkUploadInput
  };
};

export const getBulkUpload = (bulkUploadInput: any) => {
  return {
    type: GET_BULK_UPLOAD_STARTED,
    payload: "status",
    input: bulkUploadInput
  };
};
