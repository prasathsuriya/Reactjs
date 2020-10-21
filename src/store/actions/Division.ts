export const GET_DIVISION_STARTED = "GET_DIVISION_STARTED";
export const GET_DIVISION_COMPLETED = "GET_DIVISION_COMPLETED";
export const GET_DIVISION_FAILED = "GET_DIVISION_FAILED";

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


export const getDIVISIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_DIVISION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};