export const GET_TICKETCATEGORIES_STARTED = "GET_TICKETCATEGORIES_STARTED";
export const GET_TICKETCATEGORIES_COMPLETED = "GET_TICKETCATEGORIES_COMPLETED";
export const GET_TICKETCATEGORIES_FAILED = "GET_TICKETCATEGORIES_FAILED";
export const SAVE_TICKETCATEGORIES_STARTED = "SAVE_TICKETCATEGORIES_STARTED";
export const SAVE_TICKETCATEGORIES_COMPLETED = "SAVE_TICKETCATEGORIES_COMPLETED";
export const SAVE_TICKETCATEGORIES_FAILED = "SAVE_TICKETCATEGORIES_FAILED";
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
    ticketdescriptionid: number;
    isLoading: boolean;
    error: string;
}


export const getTicketcategoriesList = (ticketdescriptionid) => {
    //alert("newid");
    return {
        type: GET_TICKETCATEGORIES_STARTED ,
        payload: 'Value',
        input:ticketdescriptionid
    };
};
export const saveTicketcategories = (aarolesInput: any) => {
    console.log("userInput"+aarolesInput);
   // alert("saverole");
    
    return {
        type: SAVE_TICKETCATEGORIES_STARTED,
        payload: 'status',
        input: aarolesInput
    };
};
