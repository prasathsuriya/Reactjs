export const SAVE_NEW_PS_FORM_STARTED = "SAVE_NEW_PS_FORM_STARTED";
export const SAVE_NEW_PS_FORM_COMPLETED = "SAVE_NEW_PS_FORM_COMPLETED";
export const SAVE_NEW_PS_FORM_FAILED = "SAVE_NEW_PS_FORM_FAILED";

export const GET_PS_DETAILS_STARTED = "GET_PS_DETAILS_STARTED";
export const GET_PS_DETAILS_COMPLETED = "GET_PS_DETAILS_COMPLETED";
export const GET_PS_DETAILS_FAILED = "GET_PS_DETAILS_FAILED";

export interface IProcessScheduler {
    newInputForm : {
        countryName:String;
        stateName:String;
        regionName:String;
        districtName:String;
        subStationName:String;
        feederName:String;
        processName:String;
    }
}

export const saveNewFrom = (newInputForm: any) => {
    return {
      type: SAVE_NEW_PS_FORM_STARTED,
      payload: "status",
      input: newInputForm
    };
  }; 
  export const getPSDetails = (newInputForm: any) => {
    return {
      type: GET_PS_DETAILS_STARTED, 
      payload: "statusValue",
      input: newInputForm
    };
  };