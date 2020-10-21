
export const GET_CONSUMER_STARTED = "GET_CONSUMER_STARTED";
export const GET_CONSUMER_COMPLETED = "GET_CONSUMER_COMPLETED";
export const GET_CONSUMER_FAILED = "GET_CONSUMER_FAILED";
export const SAVE_CONSUMER_STARTED = "SAVE_CONSUMER_STARTED";
export const SAVE_CONSUMER_COMPLETED = "SAVE_CONSUMER_COMPLETED";
export const SAVE_CONSUMER_FAILED = "SAVE_CONSUMER_FAILED";
export const DELETE_CONSUMER_STARTED = "DELETE_CONSUMER_STARTED";
export const DELETE_CONSUMER_COMPLETED = "DELETE_CONSUMER_COMPLETED";
export const DELETE_CONSUMER_FAILED = "DELETE_CONSUMER_FAILED";
export interface IConsumer {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    consumerInput: {
        createdAt:Date,
        createdBy:string,
        updatedAt:Date,
        updatedBy:string
       
    };
    consumerID: number;
    isLoading: boolean;
    error: string;
}
export const saveConsumer = (consumerInput: any) => {
    console.log("userInput"+consumerInput);
    return {
        type: SAVE_CONSUMER_STARTED,
        payload: 'status',
        input: consumerInput
    };
};

export const getConsumerList = (tenentId) => {
    return {
        type: GET_CONSUMER_STARTED ,
        payload: 'Value',
        input:tenentId
    };
};

export const deleteConsumer = (consumerInput: any) => {
    return {
        type: DELETE_CONSUMER_STARTED,
        payload: 'status',
        input: consumerInput
    };
};