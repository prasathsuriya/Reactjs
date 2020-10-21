
export const GET_PUSH_SETUP_STARTED = "GET_PUSH_SETUP_STARTED";
export const GET_PUSH_SETUP_COMPLETED = "GET_PUSH_SETUP_COMPLETED";
export const GET_PUSH_SETUP_FAILED = "GET_PUSH_SETUP_FAILED";
export const SAVE_PUSH_SETUP_STARTED = "SAVE_PUSH_SETUP_STARTED";
export const SAVE_PUSH_SETUP_COMPLETED = "SAVE_PUSH_SETUP_COMPLETED";
export const SAVE_PUSH_SETUP_FAILED = "SAVE_PUSH_SETUP_FAILED";
export const DELETE_PUSH_SETUP_STARTED = "DELETE_PUSH_SETUP_STARTED";
export const DELETE_PUSH_SETUP_COMPLETED = "DELETE_PUSH_SETUP_COMPLETED";
export const DELETE_PUSH_SETUP_FAILED = "DELETE_PUSH_SETUP_FAILED";
export interface IPushSetup {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    pushSetupInput: {
        createdAt:Date,
        createdBy:string,
        updatedAt:Date,
        updatedBy:string
       
    };
    pushSetupID: number;
    isLoading: boolean;
    error: string;
}
export const savePushSetup = (pushSetupInput: any) => {
    console.log("userInput"+pushSetupInput);
    return {
        type: SAVE_PUSH_SETUP_STARTED,
        payload: 'status',
        input: pushSetupInput
    };
};

export const getPushSetupList = (tenentId) => {
    return {
        type: GET_PUSH_SETUP_STARTED ,
        payload: 'Value',
        input:tenentId
    };
};

export const deletePushSetup = (pushSetupInput: any) => {
    return {
        type: DELETE_PUSH_SETUP_STARTED,
        payload: 'status',
        input: pushSetupInput
    };
};