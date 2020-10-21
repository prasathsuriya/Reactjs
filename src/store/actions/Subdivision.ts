export const GET_SUBDIVISION_STARTED = "GET_SUBDIVISION_STARTED";
export const GET_SUBDIVISION_COMPLETED = "GET_SUBDIVISION_COMPLETED";
export const GET_SUBDIVISION_FAILED = "GET_SUBDIVISION_FAILED";

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


export const getSUBDIVISIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_SUBDIVISION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};