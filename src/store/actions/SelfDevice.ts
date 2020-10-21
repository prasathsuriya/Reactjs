export const GET_ALL_SELF_DEVICE_STARTED = "GET_ALL_SELF_DEVICE_STARTED";
export const GET_ALL_SELF_DEVICE_COMPLETED = "GET_ALL_SELF_DEVICE_COMPLETED";
export const GET_ALL_SELF_DEVICE_FAILED = "GET_ALL_SELF_DEVICE_FAILED";

export interface INewDevice {
    status: {
      statusCode: number;
      statusDisplay: string;
      statusValue: boolean;
    };
    items: Array<any>;
}

export const getAllSelfDevice = (input:any) => {
    return {
      type: GET_ALL_SELF_DEVICE_STARTED,
      payload: "status",
      input: input
    };
  };