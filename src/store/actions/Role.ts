export const GET_ROLE_STARTED = "GET_ROLE_STARTED";
export const GET_ROLE_COMPLETED = "GET_ROLE_COMPLETED";
export const GET_ROLE_FAILED = "GET_ROLE_FAILED";
export interface IRole {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    RoleInput: {
        roleId: 0,
        roleName: String,
        description: String
    };
    roleId: number;
    companyautoid: number;
    isLoading: boolean;
    error: string;
}

export const getRolesByTenant = (companyautoid: any) => {
    return {
        type: GET_ROLE_STARTED,
        payload: "status",
        input: companyautoid
    };
};
