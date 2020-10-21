export const GET_COUNTRY_STARTED = "GET_COUNTRY_STARTED";
export const GET_COUNTRY_COMPLETED = "GET_COUNTRY_COMPLETED";
export const GET_COUNTRY_FAILED = "GET_COUNTRY_FAILED";

export const GET_STATE_STARTED = "GET_STATE_STARTED";
export const GET_STATE_COMPLETED = "GET_STATE_COMPLETED";
export const GET_STATE_FAILED = "GET_STATE_FAILED";

export const GET_REGION_STARTED = "GET_REGION_STARTED";
export const GET_REGION_COMPLETED = "GET_REGION_COMPLETED";
export const GET_REGION_FAILED = "GET_REGION_FAILED";

export const GET_AREA_STARTED = "GET_AREA_STARTED";
export const GET_AREA_COMPLETED = "GET_AREA_COMPLETED";
export const GET_AREA_FAILED = "GET_AREA_FAILED";

export const GET_ZONE_STARTED = "GET_ZONE_STARTED";
export const GET_ZONE_COMPLETED = "GET_ZONE_COMPLETED";
export const GET_ZONE_FAILED = "GET_ZONE_FAILED";

export const getCountries = () => {
    return {
        type: GET_COUNTRY_STARTED,
        payload: "status"
    };
};

export const getStates = (Id: any) => {
    return {
        type: GET_STATE_STARTED,
        payload: "status",
        input: Id
    };
};

export const getMeterregioncode = (Id: any) => {
    return {
        type: GET_REGION_STARTED,
        payload: "status",
        input: Id
    };
};

export const getAreaList = (Id: any) => {
    return {
        type: GET_AREA_STARTED,
        payload: "status",
        input: Id
    };
};

export const getZoneList = (Id: any) => {
    return {
        type: GET_ZONE_STARTED,
        payload: "status",
        input: Id
    };
};