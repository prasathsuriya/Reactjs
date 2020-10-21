export const GET_SIMULATOR_CNT_STARTED = "GET_SIMULATOR_CNT_STARTED";
export const GET_SIMULATOR_CNT_COMPLETED = "GET_SIMULATOR_CNT_COMPLETED";
export const GET_SIMULATOR_CNT_FAILED = "GET_SIMULATOR_CNT_FAILED";
export const GET_START_SERVER_STARTED = "GET_START_SERVER_STARTED";
export const GET_START_SERVER_COMPLETED = "GET_START_SERVER_COMPLETED";
export const GET_START_SERVER_FAILED = "GET_START_SERVER_FAILED";
export const GET_STOP_SERVR_STARTED = "GET_STOP_SERVR_STARTED";
export const GET_STOP_SERVR_COMPLETED = "GET_STOP_SERVR_COMPLETED";
export const GET_STOP_SERVR_FAILED = "GET_STOP_SERVR_FAILED";

export interface ISimulator {
    status: {
        statusCode: number,
        statusDisplay: string,
        statusValue: boolean
    };
    items: Array<any>;
    Input: {
        noOfServers: 0,
        tenantId:0
    };
    simulatorCount : number,
    isLoading: boolean;
    error: string;
}

export const getRunningSimulatorCount = (userInput: any) => {
    return {
        type: GET_SIMULATOR_CNT_STARTED,
        payload: 'status',
        input: userInput

    };
};

export const startSimulation = (userInput: any) => {
    return {
        type: GET_START_SERVER_STARTED,
        payload: 'status',
        input: userInput

    };
};

export const stopSimulation = () => {
    return {
        type: GET_STOP_SERVR_STARTED,
        payload: 'status'
    };
};