import {
    GET_ALL_SELF_DEVICE_STARTED,
    GET_ALL_SELF_DEVICE_COMPLETED,
    GET_ALL_SELF_DEVICE_FAILED
} from "../actions/SelfDevice";

const initialSelfDevice = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    items: []
}

export const selfDeviceData = (state = initialSelfDevice, action: any) => {
    switch (action.type) {
        case GET_ALL_SELF_DEVICE_STARTED:
            return {
                ...state,
                isLoading: true,
            };

        case GET_ALL_SELF_DEVICE_COMPLETED:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            };

        case GET_ALL_SELF_DEVICE_FAILED:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};