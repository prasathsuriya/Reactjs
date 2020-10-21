export const GET_ROLEBYID_STARTED = "GET_ROLEBYID_STARTED";
export const GET_ROLEBYID_COMPLETED = "GET_ROLEBYID_COMPLETED";
export const GET_ROLEBYID_FAILED = "GET_ROLEBYID_FAILED";
export interface IRole {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    AaroleInput: {
        roleName: String,
        description: String
    };
    AaroleId: number;
    isLoading: boolean;
    error: string;
}

export const getAarolesByRoleId = (AaroleId: any) => {
    return {
        type: GET_ROLEBYID_STARTED,
        payload: "status",
        input: AaroleId
    };
};