export const SAVE_PASSWORDRESET_STARTED = "SAVE_PASSWORDRESET_STARTED";
export const SAVE_PASSWORDRESET_COMPLETED = "SAVE_PASSWORDRESET_COMPLETED";
export const SAVE_PASSWORDRESET_FAILED = "SAVE_PASSWORDRESET_FAILED";
export const GET_ACTCODEPASSWORD_STARTED = "GET_ACTCODEPASSWORD_STARTED";
export const GET_ACTCODEPASSWORD_COMPLETED = "GET_ACTCODEPASSWORD_COMPLETED";
export const GET_ACTCODEPASSWORD_FAILED = "GET_ACTCODEPASSWORD_FAILED";
export interface IForgotpassword {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    passwordInput: {
        password: string;
        actcode:string;
       
    };
    password: string;
    actcode: string;
    isLoading: boolean;
    error: string;
}
export const savenewPassword = (passwordInput: any) => {
    console.log("userInput"+passwordInput);
    //alert("saverole");
    
    return {
        type: SAVE_PASSWORDRESET_STARTED,
        payload: 'status',
        input: passwordInput
    };
};
export const getactcodepassword = (actcode: any) => {
    return {
      type: GET_ACTCODEPASSWORD_STARTED,
      payload: "value",
      input: actcode
    };
  };
