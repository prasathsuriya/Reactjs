export const GET_ACTUALINSTANT_STARTED = "GET_ACTUALINSTANT_STARTED";
export const GET_ACTUALINSTANT_COMPLETED = "GET_ACTUALINSTANT_COMPLETED";
export const GET_ACTUALINSTANT_FAILED = "GET_ACTUALINSTANT_FAILED";

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


export const getACTUALINSTANTList = (autoid) => {
    //alert("newid");
    return {
        type: GET_ACTUALINSTANT_STARTED ,
        payload: 'Value',
        input:autoid
    };
};