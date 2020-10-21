export const GET_AAAROLEPERMISSION_STARTED = "GET_AAAROLEPERMISSION_STARTED";
export const GET_AAAROLEPERMISSION_COMPLETED = "GET_AAAROLEPERMISSION_COMPLETED";
export const GET_AAAROLEPERMISSION_FAILED = "GET_AAAROLEPERMISSION_FAILED";

export const SAVE_AAAROLEPERMISSION_STARTED = "SAVE_AAAROLEPERMISSION_STARTED";
export const SAVE_AAAROLEPERMISSION_COMPLETED = "SAVE_AAAROLEPERMISSION_COMPLETED";
export const SAVE_AAAROLEPERMISSION_FAILED = "SAVE_AAAROLEPERMISSION_FAILED";

export const GET_AAAROLE_STARTED = "GET_AAROLE_STARTED";
export const GET_AAAROLE_COMPLETED = "GET_AAROLE_COMPLETED";
export const GET_AAAROLE_FAILED = "GET_AAROLE_FAILED";

export const UPDATE_STATUS_STARTED = "UPDATE_STATUS_STARTED";
export const UPDATE_STATUS_COMPLETED = "UPDATE_STATUS_COMPLETED";
export const UPDATE_STATUS_FAILED = "UPDATE_STATUS_FAILED";

export interface Aarolepermission  {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    rolepermissionInput: {
        insertedby: string,
        updatedby: string,
        effectivedate: string,
        enddate: string,
        permission_id: 0,
        role_permisssion_id: string,
        role_id: 0
    };
    role_id: string,
    role_permission_id: number;
    isLoading: boolean;
    error: string;
}


export const saveAarolepermission = (aarolepermissionInput: any) => {
    console.log("userInput" + aarolepermissionInput);
    return {
        type: SAVE_AAAROLEPERMISSION_STARTED,
        payload: 'status',
        input: aarolepermissionInput

    };
};

export const getAaRoleinputsList = (role_id:any) => {
    return {
        type: GET_AAAROLEPERMISSION_STARTED,
        payload: 'statusValue',
        input: role_id
    };
};

export const getRolepermissionList=(role_permission_id:any)=>{
    return {
      type: GET_AAAROLE_STARTED,
      payload: 'status',
      input: role_permission_id
    };
  }

  export const updateRolepermissionStatus=(input:any)=>{
    return {
      type: UPDATE_STATUS_STARTED,
      payload: 'status',
      input: input
    };
  }