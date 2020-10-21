export const GET_SECTION_STARTED = "GET_SECTION_STARTED";
export const GET_SECTION_COMPLETED = "GET_SECTION_COMPLETED";
export const GET_SECTION_FAILED = "GET_SECTION_FAILED";

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


export const getSECTIONList = (autoid) => {
    //alert("newid");
    return {
        type: GET_SECTION_STARTED ,
        payload: 'Value',
        input:autoid
    };
};