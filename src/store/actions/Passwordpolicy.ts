export const GET_PASSWORDPOLICY_STARTED = "GET_PASSWORDPOLICY_STARTED";
export const GET_PASSWORDPOLICY_COMPLETED = "GET_PASSWORDPOLICY_COMPLETED";
export const GET_PASSWORDPOLICY_FAILED = "GET_PASSWORDPOLICY_FAILED";
export const SAVE_PASSWORDPOLICY_STARTED = "SAVE_PASSWORDPOLICY_STARTED";
export const SAVE_PASSWORDPOLICY_COMPLETED = "SAVE_PASSWORDPOLICY_COMPLETED";
export const SAVE_PASSWORDPOLICY_FAILED = "SAVE_PASSWORDPOLICY_FAILED";
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
    auto_id: number;
    isLoading: boolean;
    error: string;
}


export const getPasswordpolicyList = (auto_id) => {
    //alert("newid");
    return {
        type: GET_PASSWORDPOLICY_STARTED ,
        payload: 'Value',
        input:auto_id
    };
};
export const savePasswordpolicy = (aarolesInput: any) => {
    console.log("userInput"+aarolesInput);
   // alert("saverole");
    
    return {
        type: SAVE_PASSWORDPOLICY_STARTED,
        payload: 'status',
        input: aarolesInput
    };
};