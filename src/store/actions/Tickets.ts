
export const SAVE_TICKETS_STARTED = "SAVE_TICKETS_STARTED";
export const SAVE_TICKETS_COMPLETED = "SAVE_TICKETS_COMPLETED";
export const SAVE_TICKETS_FAILED = "SAVE_TICKETS_FAILED";
export const GET_TICKETS_STARTED = "GET_TICKETS_STARTED";
export const GET_TICKETS_COMPLETED = "GET_TICKETS_COMPLETED";
export const GET_TICKETS_FAILED = "GET_TICKETS_FAILED";
export interface ITickets {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    ticketsInput: {
        insert_datetime:Date,
        inserted_by:string,
        update_datetime:Date,
        updated_by:string
       
    };
    ticketid: number;
    isLoading: boolean;
    error: string;
}
export const saveTickets = (ticketsInput: any) => {
    console.log("userInput"+ticketsInput);
   // alert("saverole");
    
    return {
        type: SAVE_TICKETS_STARTED,
        payload: 'status',
        input: ticketsInput
    };

    
};
export const getTicketsList = (ticketid) => {
    //alert("newid");
    return {
        type: GET_TICKETS_STARTED ,
        payload: 'Value',
        input:ticketid
    };
};

