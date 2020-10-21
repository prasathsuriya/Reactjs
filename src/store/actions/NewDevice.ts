export const SAVE_NEW_DEVICE_STARTED = "SAVE_NEW_DEVICE_STARTED";
export const SAVE_NEW_DEVICE_COMPLETED = "SAVE_NEW_DEVICE_COMPLETED";
export const SAVE_NEW_DEVICE_FAILED = "SAVE_NEW_DEVICE_FAILED";

export const GET_DEVICES_STARTED = "GET_DEVICES_STARTED";
export const GET_DEVICES_COMPLETED = "GET_DEVICES_COMPLETED";
export const GET_DEVICES_FAILED = "GET_DEVICES_FAILED";
 
export const GET_NOOF_DEVICES_STARTED = "GET_NOOF_DEVICES_STARTED";
export const GET_NOOF_DEVICES_COMPLETED = "GET_NOOF_DEVICES_COMPLETED";
export const GET_NOOF_DEVICES_FAILED = "GET_NOOF_DEVICES_FAILED";

export const GET_NOOF_ACTIVE_DEVICES_STARTED =
  "GET_NOOF_ACTIVE_DEVICES_STARTED";
export const GET_NOOF_ACTIVE_DEVICES_COMPLETED =
  "GET_NOOF_ACTIVE_DEVICES_COMPLETED";
export const GET_NOOF_ACTIVE_DEVICES_FAILED = "GET_NOOF_ACTIVE_DEVICES_FAILED";

export const GET_DEVICES_DETAILS_STARTED = "GET_DEVICES_DETAILS_STARTED";
export const GET_DEVICES_DETAILS_COMPLETED = "GET_DEVICES_DETAILS_COMPLETED";
export const GET_DEVICES_DETAILS_FAILED = "GET_DEVICES_DETAILS_FAILED";

export const GET_PROFILES_STARTED = "GET_PROFILES_STARTED";
export const GET_PROFILES_COMPLETED = "GET_PROFILES_COMPLETED";
export const GET_PROFILES_FAILED = "GET_PROFILES_FAILED";

export const GET_LOADGRAPHDATA_STARTED = "GET_LOADGRAPHDATA_STARTED";
export const GET_LOADGRAPHDATA_COMPLETED = "GET_LOADGRAPHDATA_COMPLETED";
export const GET_LOADGRAPHDATA_FAILED = "GET_LOADGRAPHDATA_FAILED";

export const GET_DAILYGRAPHDATA_STARTED = "GET_DAILYGRAPHDATA_STARTED";
export const GET_DAILYGRAPHDATA_COMPLETED = "GET_DAILYGRAPHDATA_COMPLETED";
export const GET_DAILYGRAPHDATA_FAILED = "GET_DAILYGRAPHDATA_FAILED";

export const GET_METER_DETAILS_STARTED = "GET_METER_DETAILS_STARTED";
export const GET_METER_DETAILS_COMPLETED = "GET_METER_DETAILS_COMPLETED";
export const GET_METER_DETAILS_FAILED = "GET_METER_DETAILS_FAILED";

export const SAVE_METER_LOCATION_STARTED = "SAVE_METER_LOCATION_STARTED";
export const SAVE_METER_LOCATION_COMPLETED = "SAVE_METER_LOCATION_COMPLETED";
export const SAVE_METER_LOCATION_FAILED = "SAVE_METER_LOCATION_FAILED";

export const SAVE_METER_ACTIVATE_STARTED = "SAVE_METER_ACTIVATE_STARTED";
export const SAVE_METER_ACTIVATE_COMPLETED = "SAVE_METER_ACTIVATE_COMPLETED";
export const SAVE_METER_ACTIVATE_FAILED = "SAVE_METER_ACTIVATE_FAILED";

export const GET_360DG_STARTED = "GET_360DG_STARTED";
export const GET_360DG_COMPLETED = "GET_360DG_COMPLETED";
export const GET_360DG_FAILED = "GET_360DG_FAILED";

export interface INewDevice {
  status: {
    statusCode: number;
    statusDisplay: string;
    statusValue: boolean;
  };
  items: Array<any>;
  newDeviceInput: {
    meterName: string;
    manName: string;
    hostName: string;
    port: number;
    protocol: string;
    authType: string;
    passowrd: string;
    securityType: string;
    systemTitle: string;
    blockCipherKey: string;
    authenticationKey: string;
    userId: string;
    manufacturerId: number;
    tenantId: string;
  };
  deviceInput: {
    tenantId: any;
    deviceType: any;
  };
  deviceID: number;
  isLoading: boolean;
  error: string;
}

export const saveNewDevice = (newDeviceInput: any) => {
  return {
    type: SAVE_NEW_DEVICE_STARTED,
    payload: "status",
    input: newDeviceInput
  };
};

export const saveNMeterLocation = (input: any) => {
  return {
    type: SAVE_METER_LOCATION_STARTED,
    payload: "status",
    input: input
  };
};

export const saveActivateMeter = (input: any) => {
  return {
    type: SAVE_METER_ACTIVATE_STARTED,
    payload: "status",
    input: input
  };
};

export const getDeviceList = (tenantId: any) => {
  return {
    type: GET_DEVICES_STARTED,
    payload: "statusValue",
    input: tenantId
  };
};

export const getNoOfDevicees = (tenantId: any) => {
  return {
    type: GET_NOOF_DEVICES_STARTED,
    payload: "statusValue",
    input: tenantId
  };
};

export const getActiveMeterCount = (tenantId: any) => {
  return {
    type: GET_NOOF_ACTIVE_DEVICES_STARTED,
    payload: "statusValue",
    input: tenantId
  };
};

export const getDeviceDetails = (deviceInput: any) => { 
  return {
    type: GET_DEVICES_DETAILS_STARTED, 
    payload: "statusValue",
    input: deviceInput
  };
};

export const getProfiles = (input: any) => {
  return {
    type: GET_PROFILES_STARTED,
    payload: "statusValue",
    input: input
  };
};

export const getLoadGraphData = (graphInputType: any) => {
  return {
    type: GET_LOADGRAPHDATA_STARTED,
    payload: "statusValue",
    input: graphInputType
  };
};

export const getMeterDetails = (input:any) => {
  return {
    type: GET_METER_DETAILS_STARTED,
    payload: "statusValue",
    input: input
  };
}

export const getThreeSixtyInfo = (input:any) => {
  return {
    type: GET_360DG_STARTED,
    payload: "statusValue",
    input: input
  };
}
