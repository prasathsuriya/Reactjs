export const GET_ACTUALDAILYLOAD_STARTED = "GET_ACTUALDAILYLOAD_STARTED";
export const GET_ACTUALDAILYLOAD_COMPLETED = "GET_ACTUALDAILYLOAD_COMPLETED";
export const GET_ACTUALDAILYLOAD_FAILED = "GET_ACTUALDAILYLOAD_FAILED";

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


export const getACTUALDAILYLOADList = (autoid) => {
    //alert("newid");
    return {
        type: GET_ACTUALDAILYLOAD_STARTED ,
        payload: 'Value',
        input:autoid
    };
};