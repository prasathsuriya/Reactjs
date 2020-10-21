
export const SAVE_FORGOTPASSWORD_STARTED = "SAVE_FORGOTPASSWORD_STARTED";
export const SAVE_FORGOTPASSWORD_COMPLETED = "SAVE_FORGOTPASSWORD_COMPLETED";
export const SAVE_FORGOTPASSWORD_FAILED = "SAVE_FORGOTPASSORD_FAILED";
export interface IForgotpassword {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    passwordInput: {
        userId: string;
       
    };
    userId: string;
    isLoading: boolean;
    error: string;
}
export const savePassword = (passwordInput: any) => {
    console.log("userInput"+passwordInput);
  //  alert("saverole");
    
    return {
        type: SAVE_FORGOTPASSWORD_STARTED,
        payload: 'status',
        input: passwordInput
    };
};
