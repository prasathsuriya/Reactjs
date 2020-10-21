import {
    GET_SIMULATOR_CNT_STARTED,
    GET_SIMULATOR_CNT_COMPLETED,
    GET_SIMULATOR_CNT_FAILED,
    GET_START_SERVER_COMPLETED,
    GET_START_SERVER_FAILED,
    GET_START_SERVER_STARTED,
    GET_STOP_SERVR_COMPLETED,
    GET_STOP_SERVR_FAILED,
    GET_STOP_SERVR_STARTED
} from "../actions/Simulator";

const initialData = {
    status: {
        statusCode: 0,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    serverList: null,
    input: {
        noOfServers: 0,
        tenantId: 0
    },
    simulatorCount : 0,
    isLoading: true,    
    isUseEffectLoading : true,
    error: ""
}

export const simulatorData = (state = initialData, action: any) => {
    switch (action.type) {
        case GET_SIMULATOR_CNT_STARTED:
            return {
                ...state,
                isLoading: true,
                isUseEffectLoading:true,
                simulatorCount : 0,
                input: action.input
            };
        case GET_SIMULATOR_CNT_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isUseEffectLoading:false,
                status: action.status,
                simulatorCount: action.payload
            };
        case GET_SIMULATOR_CNT_FAILED:
            return {
                ...state,
                isLoading: true,
                isUseEffectLoading:true,
                simulatorCount : 0
            };
        case GET_START_SERVER_STARTED:
            return {
                ...state,
                isLoading: true,
                input: action.input
            };
        case GET_START_SERVER_COMPLETED:
            return {
                ...state,
                isLoading: false,
                status: action.status,
                serverList: action.payload
            };
        case GET_START_SERVER_FAILED:
            return {
                ...state,
                isLoading: true,
            };
        case GET_STOP_SERVR_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case GET_STOP_SERVR_COMPLETED:
            return {
                ...state,
                isLoading: false,
                status: action.status,
                // serverList: action.payload
            };
        case GET_STOP_SERVR_FAILED:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};
