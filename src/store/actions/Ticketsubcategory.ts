export const GET_SUBTICKETCATEGORIES_STARTED = "GET_SUBTICKETCATEGORIES_STARTED";
export const GET_SUBTICKETCATEGORIES_COMPLETED = "GET_SUBTICKETCATEGORIES_COMPLETED";
export const GET_SUBTICKETCATEGORIES_FAILED = "GET_SUBTICKETCATEGORIES_FAILED";
export const SAVE_SUBTICKETCATEGORIES_STARTED = "SAVE_SUBTICKETCATEGORIES_STARTED";
export const SAVE_SUBTICKETCATEGORIES_COMPLETED = "SAVE_SUBTICKETCATEGORIES_COMPLETED";
export const SAVE_SUBTICKETCATEGORIES_FAILED = "SAVE_SUBTICKETCATEGORIES_FAILED";
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
    ticketsubdescriptionid: number;
    isLoading: boolean;
    error: string;
}


export const getTicketsubcategoriesList = (ticketsubdescriptionid) => {
    //alert("newid");
    return {
        type: GET_SUBTICKETCATEGORIES_STARTED ,
        payload: 'Value',
        input:ticketsubdescriptionid
    };
};

export const saveTicketsubcategories = (aarolesInput: any) => {
    console.log("userInput"+aarolesInput);
    alert("saverole");
    
    return {
        type: SAVE_SUBTICKETCATEGORIES_STARTED,
        payload: 'status',
        input: aarolesInput
    };
};