export const GET_USER_STARTED = "GET_USER_STARTED";
export const GET_USER_COMPLETED = "GET_USER_COMPLETED";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const SAVE_USER_STARTED = "SAVE_USER_STARTED";
export const SAVE_USER_COMPLETED = "SAVE_USER_COMPLETED";
export const SAVE_USER_FAILED = "SAVE_USER_FAILED";

export const GET_PROFILE_STARTED = "GET_PROFILE_STARTED";
export const GET_PROFILE_COMPLETED = "GET_PROFILE_COMPLETED";
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED";

export const UPDATE_STATUS_STARTED = "UPDATE_STATUS_STARTED";
export const UPDATE_STATUS_COMPLETED = "UPDATE_STATUS_COMPLETED";
export const UPDATE_STATUS_FAILED = "UPDATE_STATUS_FAILED";

export interface IUser {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    userInput: {
        emailId: string,
        firstName: string,
        lastName: string,
        mobileNumber: string,
        password: string,
        confirmPassword: string,
        roleId: 0,
        userId: string,
        companyAutoId: 0
    };
    companyautoid: string,
    userID: number;
    isLoading: boolean;
    error: string;
}


export const saveUser = (userInput: any) => {
    console.log("userInput" + userInput);
    return {
        type: SAVE_USER_STARTED,
        payload: 'status',
        input: userInput

    };
};

export const getUsersList = (companyAutoId:any) => {
    return {
        type: GET_USER_STARTED,
        payload: 'statusValue',
        input: companyAutoId
    };
};

export const getUserProfileList=(userID:any)=>{
    return {
      type: GET_PROFILE_STARTED,
      payload: 'status',
      input: userID
    };
  }

  export const updateUserStatus=(input:any)=>{
    return {
      type: UPDATE_STATUS_STARTED,
      payload: 'status',
      input: input
    };
  }