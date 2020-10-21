
export const SAVE_METERDETAILS_STARTED = "SAVE_METERDETAILS_STARTED";
export const SAVE_METERDETAILS_COMPLETED = "SAVE_METERDETAILS_COMPLETED";
export const SAVE_METERDETAILS_FAILED = "SAVE_METERDETAILS_FAILED";

export interface IMETERDETAILS {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    METERDETAILSInput: {
        insert_datetime:Date,
        inserted_by:string,
        update_datetime:Date,
        updated_by:string
       
    };
    role_id: number;
    isLoading: boolean;
    error: string;
}
export const saveMETERDETAILS = (METERDETAILSInput: any) => {
    console.log("userInput"+METERDETAILSInput);
    //alert("saverole");
    
    return {
        type: SAVE_METERDETAILS_STARTED,
        payload: 'status',
        input: METERDETAILSInput
    };
};

