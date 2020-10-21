export const GET_MANUFACTURE_STARTED="GET_MANUFACTURE_STARTED";
export const GET_MANUFACTURE_COMPLETED="GET_MANUFACTURE_COMPLETED";
export const GET_MANUFACTURE_FAILED="GET_MANUFACTURE_FAILED";

export const SAVE_MANUFACTURE_STARTED = "SAVE_MANUFACTURE_STARTED";
export const SAVE_MANUFACTURE_COMPLETED = "SAVE_MANUFACTURE_COMPLETED";
export const SAVE_MANUFACTURE_FAILED = "SAVE_MANUFACTURE_FAILED";

export const UPDATE_MANUSTATUS_STARTED = "UPDATE_MANUSTATUS_STARTED";
export const UPDATE_MANUSTATUS_COMPLETED = "UPDATE_MANUSTATUS_COMPLETED";
export const UPDATE_MANUSTATUS_FAILED = "UPDATE_MANUSTATUS_FAILED";
export interface IManufact {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    manufactureInput: {
        Id: 0,
        manufactureId: string,
        manufactureName: string,
        description: string,
        status:string
    };
    manufactureID: number;
    isLoading: boolean;
    error: string;
}
export const saveManufacture = (manufactureInput: any) => {
    console.log("Input"+manufactureInput);
    return {
        type: SAVE_MANUFACTURE_STARTED,
        payload: 'status',
        input: manufactureInput
    };
};
export const getManufacture = (manufactureId:any) => {
    return {
      type: GET_MANUFACTURE_STARTED,
      payload: 'status',
      input: manufactureId
    };
  };
  export const updateManufactureStatus=(input:any)=>{
    return {
      type: UPDATE_MANUSTATUS_STARTED,
      payload: 'status',
      input: input
    };
  }