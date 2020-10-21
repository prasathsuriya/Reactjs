export const GET_RCREPORTING_STARTED = "GET_RCREPORTING_STARTED";
export const GET_RCREPORTING_COMPLETED = "GET_RCREPORTING_COMPLETED";
export const GET_RCREPORTING_FAILED = "GET_RCREPORTING_FAILED";
export const SAVE_RCREPORTING_STARTED = "SAVE_RCREPORTING_STARTED";
export const SAVE_RCREPORTING_COMPLETED = "SAVE_RCREPORTING_COMPLETED";
export const SAVE_RCREPORTING_FAILED = "SAVE_RCREPORTING_FAILED";
export const DELETE_RCREPORTING_STARTED = "DELETE_RCREPORTING_STARTED";
export const DELETE_RCREPORTING_COMPLETED = "DELETE_RCREPORTING_COMPLETED";
export const DELETE_RCREPORTING_FAILED = "DELETE_RCREPORTING_FAILED";
export interface IRcreporting {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    rcreportingsInput: {
        insert_datetime:Date,
        inserted_by:string,
        update_datetime:Date,
        updated_by:string
       
    };
    report_id: number;
    isLoading: boolean;
    error: string;
}
export const saveRcreporting = (rcreportingInput: any) => {
    console.log("userInput"+rcreportingInput);
    //alert("saverole");
   // alert(JSON.stringify(rcreportingInput))
    return {
        type: SAVE_RCREPORTING_STARTED,
        payload: 'status',
        input: rcreportingInput
    };
};

export const getRcreportingList = (report_id) => {
    //alert("newid");
    return {
        type: GET_RCREPORTING_STARTED ,
        payload: 'Value',
        input:report_id
    };
};

export const deleteRcreporting = (rcreportingInput: any) => {
    return {
        type: DELETE_RCREPORTING_STARTED,
        payload: 'status',
        input: rcreportingInput
    };
};