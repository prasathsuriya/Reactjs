export const GET_TRANSFORMER_STARTED = "GET_TRANSFORMER_STARTED";
export const GET_TRANSFORMER_COMPLETED = "GET_TRANSFORMER_COMPLETED";
export const GET_TRANSFORMER_FAILED = "GET_TRANSFORMER_FAILED";

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


export const getTRANSFORMERList = (autoid) => {
    //alert("newid");
    return {
        type: GET_TRANSFORMER_STARTED ,
        payload: 'Value',
        input:autoid
    };
};