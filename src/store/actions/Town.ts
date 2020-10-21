export const GET_TOWN_STARTED = "GET_TOWN_STARTED";
export const GET_TOWN_COMPLETED = "GET_TOWN_COMPLETED";
export const GET_TOWN_FAILED = "GET_TOWN_FAILED";

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


export const getTOWNList = (autoid) => {
    //alert("newid");
    return {
        type: GET_TOWN_STARTED ,
        payload: 'Value',
        input:autoid
    };
};