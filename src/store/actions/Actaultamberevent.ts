export const GET_ACTUALTAMBEREVENT_STARTED = "GET_ACTUALTAMBEREVENT_STARTED";
export const GET_ACTUALTAMBEREVENT_COMPLETED = "GET_ACTUALTAMBEREVENT_COMPLETED";
export const GET_ACTUALTAMBEREVENT_FAILED = "GET_ACTUALTAMBEREVENT_FAILED";

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


export const getACTUALTAMBEREVENTList = (autoid) => {
    //alert("newid");
    return {
        type: GET_ACTUALTAMBEREVENT_STARTED ,
        payload: 'Value',
        input:autoid
    };
};