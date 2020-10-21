export const GET_METERDETAIL_STARTED = "GET_METERDETAIL_STARTED";
export const GET_METERDETAIL_COMPLETED = "GET_METERDETAIL_COMPLETED";
export const GET_METERDETAIL_FAILED = "GET_METERDETAIL_FAILED";

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
    autoid: number;
    isLoading: boolean;
    error: string;
}


export const getMETERDETAILList = (autoid) => {
    //alert("newid");
    return {
        type: GET_METERDETAIL_STARTED ,
        payload: 'Value',
        input:autoid
    };
};