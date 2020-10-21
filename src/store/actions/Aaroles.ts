export const GET_AAROLES_STARTED = "GET_AAROLES_STARTED";
export const GET_AAROLES_COMPLETED = "GET_AAROLES_COMPLETED";
export const GET_AAROLES_FAILED = "GET_AAROLES_FAILED";
export const SAVE_AAROLES_STARTED = "SAVE_AAROLES_STARTED";
export const SAVE_AAROLES_COMPLETED = "SAVE_AAROLES_COMPLETED";
export const SAVE_AAROLES_FAILED = "SAVE_AAROLES_FAILED";
export const DELETE_AAROLES_STARTED = "DELETE_AAROLES_STARTED";
export const DELETE_AAROLES_COMPLETED = "DELETE_AAROLES_COMPLETED";
export const DELETE_AAROLES_FAILED = "DELETE_AAROLES_FAILED";
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
    role_id: number;
    isLoading: boolean;
    error: string;
}
export const saveAaroles = (aarolesInput: any) => {
    console.log("userInput"+aarolesInput);
    //alert("saverole");
    
    return {
        type: SAVE_AAROLES_STARTED,
        payload: 'status',
        input: aarolesInput
    };
};

export const getAarolesList = (role_id) => {
    //alert("newid");
    return {
        type: GET_AAROLES_STARTED ,
        payload: 'Value',
        input:role_id
    };
};

export const deleteAaroles = (aarolesInput: any) => {
    return {
        type: DELETE_AAROLES_STARTED,
        payload: 'status',
        input: aarolesInput
    };
};