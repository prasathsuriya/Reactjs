export const GET_METERMANUFACTURE_STARTED = "GET_METERMANUFACTURE_STARTED";
export const GET_METERMANUFACTURE_COMPLETED = "GET_METERMANUFACTURE_COMPLETED";
export const GET_METERMANUFACTURE_FAILED = "GET_METERMANUFACTURE_FAILED";

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


export const getMETERMANUFACTUREList = (autoid) => {
    //alert("newid");
    return {
        type: GET_METERMANUFACTURE_STARTED ,
        payload: 'Value',
        input:autoid
    };
};