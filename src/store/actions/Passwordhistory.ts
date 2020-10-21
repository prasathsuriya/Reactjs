
export const GET_PASSWORDHISTORY_STARTED = "GET_PASSWORDHISTORY_STARTED";
export const GET_PASSWORDHISTORY_COMPLETED = "GET_PASSWORDHISTORY_COMPLETED";
export const GET_PASSWORDHISTORY_FAILED = "GET_PASSWORDHISTORY_FAILED";
export interface IForgotpassword {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    passwordInput: {
        password: string;
        userId:string;
       
    };
    password: string;
    userId: string;
    isLoading: boolean;
    error: string;
}

export const getpasswordhistory = (userId: any) => {
    return {
      type: GET_PASSWORDHISTORY_STARTED,
      payload: "value",
      input: userId
    };
  };
