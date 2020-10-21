export const GET_METERLOCATION_STARTED = "GET_METERLOCATION_STARTED";
export const GET_METERLOCATION_COMPLETED = "GET_METERLOCATION_COMPLETED";
export const GET_METERLOCATION_FAILED = "GET_METERLOCATION_FAILED";

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


export const getMETERLOCATIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_METERLOCATION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};