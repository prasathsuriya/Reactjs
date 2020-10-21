
export const GET_JOBSCHEDULE_STARTED = "GET_JOBSCHEDULE_STARTED";
export const GET_JOBSCHEDULE_COMPLETED = "GET_JOBSCHEDULE_COMPLETED";
export const GET_JOBSCHEDULE_FAILED = "GET_JOBSCHEDULE_FAILED";
export const SAVE_JOBSCHEDULE_STARTED = "SAVE_JOBSCHEDULE_STARTED";
export const SAVE_JOBSCHEDULE_COMPLETED = "SAVE_JOBSCHEDULE_COMPLETED";
export const SAVE_JOBSCHEDULE_FAILED = "SAVE_JOBSCHEDULE_FAILED";
export const DELETE_JOBSCHEDULE_STARTED = "DELETE_JOBSCHEDULE_STARTED";
export const DELETE_JOBSCHEDULE_COMPLETED = "DELETE_JOBSCHEDULE_COMPLETED";
export const DELETE_JOBSCHEDULE_FAILED = "DELETE_JOBSCHEDULE_FAILED";
export interface IJobschedule {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    jobscheduleInput: {
        createdAt:Date,
        createdBy:string,
        updatedAt:Date,
        updatedBy:string
       
    };
    jobscheduleID: number;
    isLoading: boolean;
    error: string;
}
export const saveJobschedule = (jobscheduleInput: any) => {
    console.log("userInput"+jobscheduleInput);
    return {
        type: SAVE_JOBSCHEDULE_STARTED,
        payload: 'status',
        input: jobscheduleInput
    };
};

export const getJobscheduleList = (tenentId) => {
    return {
        type: GET_JOBSCHEDULE_STARTED ,
        payload: 'Value',
        input:tenentId
    };
};

export const deleteJobschedule = (jobscheduleInput: any) => {
    return {
        type: DELETE_JOBSCHEDULE_STARTED,
        payload: 'status',
        input: jobscheduleInput
    };
};