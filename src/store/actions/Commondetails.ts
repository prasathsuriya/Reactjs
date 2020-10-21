export const GET_COMMONDETAILS_STARTED = "GET_COMMONDETAILS_STARTED";
export const GET_COMMONDETAILS_COMPLETED = "GET_COMMONDETAILS_COMPLETED";
export const GET_COMMONDETAILS_FAILED = "GET_COMMONDETAILS_FAILED";
export const SAVE_COMMONDETAILS_STARTED = "SAVE_COMMONDETAILS_STARTED";
export const SAVE_COMMONDETAILS_COMPLETED = "SAVE_COMMONDETAILS_COMPLETED";
export const SAVE_COMMONDETAILS_FAILED = "SAVE_COMMONDETAILS_FAILED";
export interface IAaroles {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    aarolesInput: {
        insert_datetime:Date,
        inserted_by:string,
        update_datetime:Date,
        updated_by:string
       
    };
    common_id: number;
    isLoading: boolean;
    error: string;
}


export const getcommondetailsList = (common_id) => {
    //alert("newid");
    return {
        type: GET_COMMONDETAILS_STARTED ,
        payload: 'Value',
        input:common_id
    };
};
export const savecommondetails = (aarolesInput: any) => {
    console.log("userInput"+aarolesInput);
    //alert("saverole");
    
    return {
        type: SAVE_COMMONDETAILS_STARTED,
        payload: 'status',
        input: aarolesInput
    };
};
