export const GET_AAAPERMISSION_STARTED = "GET_AAAROLE_STARTED";
export const GET_AAAPERMISSION_COMPLETED = "GET_AAAROLE_COMPLETED";
export const GET_AAAPERMISSION_FAILED = "GET_AAAROLE_FAILED";

export const SAVE_AAAPERMISSION_STARTED = "SAVE_AAAROLE_STARTED";
export const SAVE_AAAPERMISSION_COMPLETED = "SAVE_AAAROLE_COMPLETED";
export const SAVE_AAAPERMISSION_FAILED = "SAVE_AAAROLE_FAILED";

export const GET_AAAROLEPERMISSION_STARTED = "GET_AAAPERMISSION_STARTED";
export const GET_AAAROLEPERMISSION_COMPLETED = "GET_AAAPERMISSION_COMPLETED";
export const GET_AAAROLEPERMISSION_FAILED = "GET_AAAPERMISSION_FAILED";

export const UPDATE_STATUS_STARTED = "UPDATE_STATUS_STARTED";
export const UPDATE_STATUS_COMPLETED = "UPDATE_STATUS_COMPLETED";
export const UPDATE_STATUS_FAILED = "UPDATE_STATUS_FAILED";

export interface IAarolepermission {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
      aarolepermissionInput: {
        effectivedate: string,
        enddate: string,
        permission_id: string,
    };
    role_id: string,
    permission_id: number;
    isLoading: boolean;
    error: string;
}


export const savePermission = (aaapermissionInput: any) => {
    console.log("roleInput" + aaapermissionInput);
    return {
        type: SAVE_AAAPERMISSION_STARTED,
        payload: 'status',
        input: aaapermissionInput

    };
};

export const getAaarolesList = (role_id:any) => {
    return {
        type: GET_AAAPERMISSION_STARTED,
        payload: 'statusValue',
        input: role_id
    };
};

export const getRoleProfileList=(roleID:any)=>{
    return {
      type: GET_AAAROLEPERMISSION_STARTED,
      payload: 'status',
      input: 'assets/demo/data/role-information.json'
    };
  }

  export const updateRoleStatus=(input:any)=>{
    return {
      type: UPDATE_STATUS_STARTED,
      payload: 'status',
      input: input
    };
  }