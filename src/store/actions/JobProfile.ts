export const GET_JOBPROFILE_STARTED = "GET_JOBPROFILE_STARTED";
export const GET_JOBPROFILE_COMPLETED = "GET_JOBPROFILE_COMPLETED";
export const GET_JOBPROFILE_FAILED = "GET_JOBPROFILE_FAILED";
export interface IRole {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;   
    tenantId: number;
    isLoading: boolean;
    error: string;
}

export const getJobProfiles = (tenantId: any) => {
    return {
        type: GET_JOBPROFILE_STARTED,
        payload: "status",
        input: tenantId
    };
};
