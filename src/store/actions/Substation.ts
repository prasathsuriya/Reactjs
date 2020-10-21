export const GET_SUBSTATION_STARTED = "GET_SUBSTATION_STARTED";
export const GET_SUBSTATION_COMPLETED = "GET_SUBSTATION_COMPLETED";
export const GET_SUBSTATION_FAILED = "GET_SUBSTATION_FAILED";

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


export const getSUBSTATIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_SUBSTATION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};