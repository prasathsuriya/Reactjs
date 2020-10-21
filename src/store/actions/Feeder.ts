export const GET_FEEDER_STARTED = "GET_FEEDER_STARTED";
export const GET_FEEDER_COMPLETED = "GET_FEEDER_COMPLETED";
export const GET_FEEDER_FAILED = "GET_FEEDER_FAILED";

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


export const getFEEDERList = (autoid) => {
    //alert("newid");
    return {
        type: GET_FEEDER_STARTED ,
        payload: 'Value',
        input:autoid
    };
};