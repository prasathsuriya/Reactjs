export const GET_ACTUALBILLING_STARTED = "GET_ACTUALBILLING_STARTED";
export const GET_ACTUALBILLING_COMPLETED = "GET_ACTUALBILLING_COMPLETED";
export const GET_ACTUALBILLING_FAILED = "GET_ACTUALBILLING_FAILED";

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


export const getACTUALBILLINGList = (autoid) => {
    //alert("newid");
    return {
        type: GET_ACTUALBILLING_STARTED ,
        payload: 'Value',
        input:autoid
    };
};