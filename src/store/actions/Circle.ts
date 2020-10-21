export const GET_CIRCLE_STARTED = "GET_CIRCLE_STARTED";
export const GET_CIRCLE_COMPLETED = "GET_CIRCLE_COMPLETED";
export const GET_CIRCLE_FAILED = "GET_CIRCLE_FAILED";

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


export const getCIRCLEList = (autoid) => {
    //alert("newid");
    return {
        type: GET_CIRCLE_STARTED ,
        payload: 'Value',
        input:autoid
    };
};
