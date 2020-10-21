export const SAVE_DASHBOARD_STARTED = "SAVE_DASHBOARD_STARTED";
export const SAVE_DASHBOARD_COMPLETED = "SAVE_DASHBOARD_COMPLETED";
export const SAVE_DASHBOARD_FAILED = "SAVE_DASHBOARD_FAILED";
export interface IDashboard {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    dashboardInput: {
        emailid: String,
        firstname: String,
        lastname: String,
        password: String,
        confirmpassword: String,
        roleFkId: { roleId: 0, roleName: "", description: "", status: 0, createdAt: "", createdBy: "", updatedAt: "", updatedBy: "" }
        createdAt:Date,
        createdBy:string,
        updatedAt:Date,
        updatedBy:string
       
    };
    dashboardID: number;
    isLoading: boolean;
    error: string;
}
export const saveDashboard = (dashboardInput: any) => {
    console.log("userInput"+dashboardInput);
    return {
        type: SAVE_DASHBOARD_STARTED,
        payload: 'status',
        input: dashboardInput
    };
};