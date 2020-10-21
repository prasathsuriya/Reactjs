export const GET_AAPERMISSIONS_STARTED = "GET_AAPERMISSIONS_STARTED";
export const GET_AAPERMISSIONS_COMPLETED = "GET_AAPERMISSIONS_COMPLETED";
export const GET_AAPERMISSIONS_FAILED = "GET_AAPERMISSIONS_FAILED";
export const SAVE_AAPERMISSIONS_STARTED = "SAVE_AAPERMISSIONS_STARTED";
export const SAVE_AAPERMISSIONS_COMPLETED = "SAVE_AAPERMISSIONS_COMPLETED";
export const SAVE_AAPERMISSIONS_FAILED = "SAVE_AAPERMISSIONS_FAILED";
export const DELETE_AAPERMISSIONS_STARTED = "DELETE_AAPERMISSIONS_STARTED";
export const DELETE_AAPERMISSIONS_COMPLETED = "DELETE_AAPERMISSIONS_COMPLETED";
export const DELETE_AAPERMISSIONS_FAILED = "DELETE_AAPERMISSIONS_FAILED";
export interface IAapermissions {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    aapermissionsInput: {
        insert_datetime:Date,
        inserted_by:string,
        update_datetime:Date,
        updated_by:string
       
    };
    permission_id: number;
    isLoading: boolean;
    error: string;
}
export const saveAapermissions = (aapermissionsInput: any) => {
    console.log("userInput"+aapermissionsInput);
    //alert("saverole");
    return {
        type: SAVE_AAPERMISSIONS_STARTED,
        payload: 'status',
        input: aapermissionsInput
    };
};

export const getAapermissionsList = (permission_id) => {
   // alert("newid");
    return {
        type: GET_AAPERMISSIONS_STARTED ,
        payload: 'Value',
        input:permission_id
    };
};

export const deleteAapermissions = (aapermissionsInput: any) => {
    return {
        type: DELETE_AAPERMISSIONS_STARTED,
        payload: 'status',
        input: aapermissionsInput
    };
};