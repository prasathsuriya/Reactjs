export const GET_ACTUALNAMEPLATE_STARTED = "GET_ACTUALNAMEPLATE_STARTED";
export const GET_ACTUALNAMEPLATE_COMPLETED = "GET_ACTUALNAMEPLATE_COMPLETED";
export const GET_ACTUALNAMEPLATE_FAILED = "GET_ACTUALNAMEPLATE_FAILED";

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


export const getACTUALNAMEPLATEList = (autoid) => {
    //alert("newid");
    return {
        type: GET_ACTUALNAMEPLATE_STARTED ,
        payload: 'Value',
        input:autoid
    };
};