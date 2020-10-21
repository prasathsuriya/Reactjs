export const GET_AAROLESPERMISSION_STARTED = "GET_AAROLESPERMISSION_STARTED";
export const GET_AAROLESPERMISSION_COMPLETED = "GET_AAROLESPERMISSION_COMPLETED";
export const GET_AAROLESPERMISSION_FAILED = "GET_AAROLESPERMISSION_FAILED";
export const SAVE_AAROLESPERMISSION_STARTED = "SAVE_AAROLESPERMISSION_STARTED";
export const SAVE_AAROLESPERMISSION_COMPLETED = "SAVE_AAROLESPERMISSION_COMPLETED";
export const SAVE_AAROLESPERMISSION_FAILED = "SAVE_AAROLESPERMISSION_FAILED";
export const DELETE_AAROLESPERMISSION_STARTED = "DELETE_AAROLESPERMISSION_STARTED";
export const DELETE_AAROLESPERMISSION_COMPLETED = "DELETE_AAROLESPERMISSION_COMPLETED";
export const DELETE_AAROLESPERMISSION_FAILED = "DELETE_AAROLESPERMISSION_FAILED";
export interface IAAROLESPERMISSION {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    aarolespermissionInput: {
        insert_datetime:Date,
        inserted_by:string,
        update_datetime:Date,
        updated_by:string
       
    };
    role_permission_id: number;
    isLoading: boolean;
    error: string;
}
export const saveaarolespermission = (aarolespermissionInput: any) => {
    console.log("userInput"+aarolespermissionInput);
    //alert("saverole");
    return {
        type: SAVE_AAROLESPERMISSION_STARTED,
        payload: 'status',
        input: aarolespermissionInput
    };
};

export const getaarolespermission = (permission_id) => {
   // alert("newid");
    return {
        type: GET_AAROLESPERMISSION_STARTED ,
        payload: 'Value',
        input:permission_id
    };
};

export const deleteaarolespermission = (aarolespermissionInput: any) => {
    return {
        type: DELETE_AAROLESPERMISSION_STARTED,
        payload: 'status',
        input: aarolespermissionInput
    };
};