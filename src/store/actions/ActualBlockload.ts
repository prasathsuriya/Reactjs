export const GET_ACTUALBLOCKLOAD_STARTED = "GET_ACTUALBLOCKLOAD_STARTED";
export const GET_ACTUALBLOCKLOAD_COMPLETED = "GET_ACTUALBLOCKLOAD_COMPLETED";
export const GET_ACTUALBLOCKLOAD_FAILED = "GET_ACTUALBLOCKLOAD_FAILED";

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


export const getACTUALBLOCKLOADList = (autoid) => {
    //alert("newid");
    return {
        type: GET_ACTUALBLOCKLOAD_STARTED ,
        payload: 'Value',
        input:autoid
    };
};