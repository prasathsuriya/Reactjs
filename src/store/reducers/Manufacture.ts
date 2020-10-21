import {
    GET_MANUFACTURE_STARTED,
    GET_MANUFACTURE_COMPLETED,
    GET_MANUFACTURE_FAILED,

    SAVE_MANUFACTURE_STARTED,
    SAVE_MANUFACTURE_COMPLETED,
    SAVE_MANUFACTURE_FAILED,

    UPDATE_MANUSTATUS_STARTED,
    UPDATE_MANUSTATUS_COMPLETED,
    UPDATE_MANUSTATUS_FAILED
} from '../actions/Manufacture';

const IntialManufactureData = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true
    },
    items: [],
    manufactureInput: {
        Id: 0,
        manufactureId: "",
        manufactureName: "",
        description: "",
        status: ""
    },
    isLoading: true,
    isFormSubmit: false,
    isLoggedIn: false,
    error: '',
    isDuplicate: true
};
export const manufactureData = (state = IntialManufactureData, action: any) => {
    console.log(action.type);
    switch (action.type) {
        case GET_MANUFACTURE_STARTED:
            return {
                ...state,
                manufactureList: [],
                isLoading: true,
            };
        case GET_MANUFACTURE_COMPLETED:
            return {
                ...state,
                isLoading: false,
                status: action.status,
                manufactureList: action.payload
            };
        case GET_MANUFACTURE_FAILED:
            return {
                ...state,
                isLoading: true,
            };
        case SAVE_MANUFACTURE_STARTED:
            return {
                ...state,
                isLoading: true,
                isFormSubmit: false,
                manufactureInput: action.input
            };
        case SAVE_MANUFACTURE_COMPLETED:
            console.log("SAVE_MANUFACTURE_COMPLETED " + action.payload.manufactureId + "---action" + action);
            var isDuplicate = false;
            if (action.payload.manufactureId === null) {
                isDuplicate = true;
            }
            return {
                ...state,
                isLoading: false,
                isFormSubmit: true,
                status: action.payload,
                isDuplicate: isDuplicate
            };
        case SAVE_MANUFACTURE_FAILED:
            return {
                ...state,
                isLoading: true,
            };

        case UPDATE_MANUSTATUS_STARTED:
            return {
                ...state,
                isLoading: true,
                isFormSubmit: false,
                manufactureInput: action.input
            };

        case UPDATE_MANUSTATUS_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isFormSubmit: true,
                status: action.payload
            };

        case UPDATE_MANUSTATUS_FAILED:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};