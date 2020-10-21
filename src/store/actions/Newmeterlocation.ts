export const GET_NEWMETERLOCATION_STARTED = "GET_NEWMETERLOCATION_STARTED";
export const GET_NEWMETERLOCATION_COMPLETED = "GET_NEWMETERLOCATION_COMPLETED";
export const GET_NEWMETERLOCATION_FAILED = "GET_NEWMETERLOCATION_FAILED";

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


export const getNEWMETERLOCATIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_NEWMETERLOCATION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};