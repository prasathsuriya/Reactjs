import { 
  SAVE_NEW_DEVICE_STARTED,
  SAVE_NEW_DEVICE_COMPLETED,
  SAVE_NEW_DEVICE_FAILED,
  GET_DEVICES_COMPLETED,
  GET_DEVICES_STARTED,
  GET_DEVICES_FAILED,
  GET_NOOF_DEVICES_STARTED,
  GET_NOOF_DEVICES_FAILED,
  GET_NOOF_DEVICES_COMPLETED,
  GET_NOOF_ACTIVE_DEVICES_STARTED,
  GET_NOOF_ACTIVE_DEVICES_FAILED,
  GET_NOOF_ACTIVE_DEVICES_COMPLETED,
  GET_DEVICES_DETAILS_STARTED,
  GET_DEVICES_DETAILS_COMPLETED,
  GET_DEVICES_DETAILS_FAILED,
  GET_LOADGRAPHDATA_STARTED,
  GET_LOADGRAPHDATA_COMPLETED,
  GET_LOADGRAPHDATA_FAILED,
  GET_DAILYGRAPHDATA_STARTED,
  GET_DAILYGRAPHDATA_COMPLETED,
  GET_DAILYGRAPHDATA_FAILED,
  GET_METER_DETAILS_STARTED,
  GET_METER_DETAILS_COMPLETED,
  GET_METER_DETAILS_FAILED,
  SAVE_METER_LOCATION_COMPLETED,SAVE_METER_LOCATION_STARTED,SAVE_METER_LOCATION_FAILED
  ,SAVE_METER_ACTIVATE_STARTED, SAVE_METER_ACTIVATE_COMPLETED, SAVE_METER_ACTIVATE_FAILED,
  GET_360DG_STARTED,GET_360DG_COMPLETED,GET_360DG_FAILED
} from "../actions/NewDevice";

const intialNewDeviceData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [], 
  input: "",
  numberOfDevices: 0,
  activeDevices: 0,
  meterConnectionId:0,
  meterConnectionData:null,
  userInput: {
    meterName: "",
    hostName: "",
    port: "",
    protocol: "",
    authType: "",
    passowrd: "",
    conProtocol: "",
    securityType: "",
    systemTitle: "",
    blockCipherKey: "",
    authenticationKey: "",
    userId: "",
    manufacturerId: 0,
    tenantId: 0,
    referencingName: ""
  },
  graphData: null,
  graphInputType: 0,
  isLoading: false,
  isFormSubmit: false,
  isSaveMeterLocation: false,
  isLoggedIn: false,
  three60Data:null,
  isThree60Loading:false,
  error: "",
  isListLoading: true
};

export const deviceFormData = (state = intialNewDeviceData, action: any) => {
  switch (action.type) {
    case GET_NOOF_DEVICES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_NOOF_DEVICES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        numberOfDevices: action.payload
      };
    case GET_NOOF_DEVICES_FAILED:
      return {
        ...state,
        isLoading: true
      };

    case GET_NOOF_ACTIVE_DEVICES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_NOOF_ACTIVE_DEVICES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        activeDevices: action.payload
      };
    case GET_NOOF_ACTIVE_DEVICES_FAILED:
      return {
        ...state,
        isLoading: true
      };

    case GET_DEVICES_STARTED:
      return {
        ...state,
        items:[],
        input: action.input,
        isLoading: true
      };
    case GET_DEVICES_COMPLETED:
      return {
        ...state,
        isLoading: false,
        input: action.input,
        status: action.status,
        items: action.payload
      };
    case GET_DEVICES_FAILED:
      return {
        ...state,
        input: action.input,
        isLoading: true
      };
    case SAVE_NEW_DEVICE_STARTED:
      return {
        ...state,
        isLoading: true,
        isFormSubmit: false,
        userInput: action.input
      };
    case SAVE_NEW_DEVICE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        isFormSubmit: true,
        status: action.payload
      };
    case SAVE_NEW_DEVICE_FAILED:
      return {
        ...state,
        isLoading: true
      };

      case SAVE_METER_LOCATION_STARTED:
        return {
          ...state,
          isLoading: true,
          isFormSubmit: false,
          userInput: action.input
        };
      case SAVE_METER_LOCATION_COMPLETED:
        return {
          ...state,
          isLoading: false,
          isFormSubmit: true,
          status: action.payload
        };
      case SAVE_METER_LOCATION_FAILED:
        return {
          ...state,
          isLoading: true
        };

        case SAVE_METER_ACTIVATE_STARTED:
          return {
            ...state,
            isLoading: true,
            isFormSubmit: false,
            userInput: action.input
          };
        case SAVE_METER_ACTIVATE_COMPLETED:
          return {
            ...state,
            isLoading: false,
            isFormSubmit: true,
            status: action.payload
          };
        case SAVE_METER_ACTIVATE_FAILED:
          return {
            ...state,
            isLoading: true
          };

    case GET_DEVICES_DETAILS_STARTED:
      state.isListLoading=true;
      state.items=[];
      return {
        ...state,
        items: [],
        input: action.input, 
        isListLoading: true
      };
    case GET_DEVICES_DETAILS_COMPLETED:
      return {
        ...state,
        isListLoading: false,
        input: action.input,
        status: action.status,
        items: action.payload
      };
    case GET_DEVICES_DETAILS_FAILED: 
      return {
        ...state,
        input: action.input,
        isListLoading: true
      };
    //For Graphs
    case GET_LOADGRAPHDATA_STARTED:
      return {
        ...state,
        isLoading: true,
        graphInputType: action.input
      };
    case GET_LOADGRAPHDATA_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        graphData: action.payload
      };
    case GET_LOADGRAPHDATA_FAILED:
      return {
        ...state,
        isLoading: true
      };

      case GET_METER_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
        meterConnectionId: action.input
      };
    case GET_METER_DETAILS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        meterConnectionData: action.payload
      };
    case GET_METER_DETAILS_FAILED:
      return {
        ...state,
        isLoading: true
      };

      case GET_360DG_STARTED:
        return {
          ...state,
          isThree60Loading: true,
          meterConnectionId: action.input
        };
      case GET_360DG_COMPLETED:
        return {
          ...state,
          isThree60Loading: false,
          status: action.status,
          three60Data: action.payload
        };
      case GET_360DG_FAILED:
        return {
          ...state,
          isThree60Loading: true
        };
    default:
      return state;
  }
};
