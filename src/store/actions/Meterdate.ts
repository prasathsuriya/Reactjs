export const GET_METERDATE_STARTED = "GET_METERDATE_STARTED";
export const GET_METERDATE_COMPLETED = "GET_METERDATE_COMPLETED";
export const GET_METERDATE_FAILED = "GET_METERDATE_FAILED";

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


export const getMETERDATEList = (autoid) => {
    //alert("newid");
    return {
        type: GET_METERDATE_STARTED ,
        payload: 'Value',
        input:autoid
    };
};