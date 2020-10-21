import {
    GET_COUNTRY_STARTED,
    GET_COUNTRY_COMPLETED,
   GET_COUNTRY_FAILED,GET_AREA_COMPLETED,GET_AREA_FAILED,GET_AREA_STARTED,
   GET_REGION_COMPLETED,GET_REGION_FAILED
   ,GET_REGION_STARTED,GET_STATE_COMPLETED,GET_STATE_FAILED,GET_STATE_STARTED,GET_ZONE_COMPLETED
   ,GET_ZONE_FAILED,GET_ZONE_STARTED
}  from '../actions/Common';
const initialRole = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    countryList: [],
    stateList: [],
    regionList: [],
    areaList: [],
    zoneList: [],
    tenantId: 0,
    categoryId: 0,
    isLoading: true,
    isCountryLoading: true,
    isStateLoading: true,
    isRegionLoading: true,
    isAreaLoading: true,
    isZoneLoading: true,
    error: ''
};
export const commonData = (state = initialRole, action: any) => {
    switch (action.type) {
        
        case GET_COUNTRY_STARTED:
            return {
                ...state,
                countryList:[],
                isLoading: true,
                isCountryLoading: true,
            };    

        case GET_COUNTRY_COMPLETED:
            return{
               ...state,
               isLoading:false,
               countryList: action.payload,
               isCountryLoading: false,
          };
          
        case GET_COUNTRY_FAILED:
            return{
                ...state,
                isLoading:true,
            };

        case GET_STATE_STARTED:
            return {
                ...state,
                stateList:[],
                isLoading: true,
                isStateLoading: true,
            };    

        case GET_STATE_COMPLETED:
            return{
                ...state,
                isLoading:false,
                stateList: action.payload,
                isStateLoading: false,
            };
            
        case GET_STATE_FAILED:
            return{
                ...state,
                isLoading:true,
            };

        case GET_REGION_STARTED:
            return {
                ...state,
                regionList:[],
                isLoading: true,
                isRegionLoading: true,
            };    

        case GET_REGION_COMPLETED:
            return{
                ...state,
                isLoading:false,
                regionList: action.payload,
                isRegionLoading: false,
            };
            
        case GET_REGION_FAILED:
            return{
                ...state,
                isLoading:true,
            };

        case GET_AREA_STARTED:
            return {
                ...state,
                areaList:[],
                isLoading: true,
                isAreaLoading: true,
            };    

        case GET_AREA_COMPLETED:
            return{
                ...state,
                isLoading:false,
                areaList: action.payload,
                isAreaLoading: false,
            };
            
        case GET_AREA_FAILED:
            return{
                ...state,
                isLoading:true,
            };
        case GET_ZONE_STARTED:
            return {
                ...state,
                zoneList:[],
                isLoading: true,
                isZoneLoading: true,
            };    

        case GET_ZONE_COMPLETED:
            return{
                ...state,
                isLoading:false,
                zoneList: action.payload,
                isZoneLoading: false,
            };
            
        case GET_ZONE_FAILED:
            return{
                ...state,
                isLoading:true,
            };
        default:
            return state;
        }
    };

