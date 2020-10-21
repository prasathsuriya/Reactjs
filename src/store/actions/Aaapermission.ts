export const GET_AAAPERMISSION_STARTED = "GET_AAAPERMISSION_STARTED";
export const GET_AAAPERMISSION_COMPLETED = "GET_AAAPERMISSION_COMPLETED";
export const GET_AAAPERMISSION_FAILED = "GET_AAAPERMISSION_FAILED";
export interface IAAAPERMISSION {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    AarolepermissionInput: {
        permission_id: 0,
        permission_name: String
    };
    permission_id: number;
    role_id: number;
    isLoading: boolean;
    error: string;
}

export const getRolesPermissionByRoleid = (role_id: any) => {
    return {
        type: GET_AAAPERMISSION_STARTED,
        payload: "status",
        input: role_id
    };
};
