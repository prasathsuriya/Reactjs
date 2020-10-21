export const GET_METERCONNECTION_STARTED = "GET_METERCONNECTION_STARTED";
export const GET_METERCONNECTION_COMPLETED = "GET_METERCONNECTION_COMPLETED";
export const GET_METERCONNECTION_FAILED = "GET_METERCONNECTION_FAILED";

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


export const getMETERCONNECTIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_METERCONNECTION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};