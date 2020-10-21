export const SAVE_NEWPASSWORDRESET_STARTED = "SAVE_NEWPASSWORDRESET_STARTED";
export const SAVE_NEWPASSWORDRESET_COMPLETED = "SAVE_NEWPASSWORDRESET_COMPLETED";
export const SAVE_NEWPASSWORDRESET_FAILED = "SAVE_NEWPASSWORDRESET_FAILED";
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
    actcode: string;
    isLoading: boolean;
    error: string;
}
export const savenewresetPassword = (passwordInput: any) => {
    console.log("userInput"+passwordInput);
   // alert("saverole");
    
    return {
        type: SAVE_NEWPASSWORDRESET_STARTED,
        payload: 'status',
        input: passwordInput
    };
};

