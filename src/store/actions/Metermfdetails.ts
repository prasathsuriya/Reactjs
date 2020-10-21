export const GET_METERMFDETAILS_STARTED = "GET_METERMFDETAILS_STARTED";
export const GET_METERMFDETAILS_COMPLETED = "GET_METERMFDETAILS_COMPLETED";
export const GET_METERMFDETAILS_FAILED = "GET_METERMFDETAILS_FAILED";

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


export const getMETERMFDETAILSList = (autoid) => {
    //alert("newid");
    return {
        type: GET_METERMFDETAILS_STARTED ,
        payload: 'Value',
        input:autoid
    };
};