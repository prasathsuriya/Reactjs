import {
  SAVE_BULK_UPLOAD_STARTED,
  SAVE_BULK_UPLOAD_COMPLETED,
  SAVE_BULK_UPLOAD_FAILED,
  GET_BULK_UPLOAD_COMPLETED,
  GET_BULK_UPLOAD_FAILED,
  GET_BULK_UPLOAD_STARTED
} from "../actions/BulkUpload";

const intialBulkUploadData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [],
  userInput: {
    profile: "",
    startdate: "",
    enddate: "",
    createdAt: "",
    createdBy: "",
    updatedAt: "",
    updatedBy: ""
  },
  isLoading: false,
  isFormSubmit: false,
  isLoggedIn: false,
  error: ""
};
export const bulkUploadData = (state = intialBulkUploadData, action: any) => {
  switch (action.type) {
    case GET_BULK_UPLOAD_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_BULK_UPLOAD_COMPLETED:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        items: action.payload
      };
    case GET_BULK_UPLOAD_FAILED:
      return {
        ...state,
        isLoading: true
      };

    case SAVE_BULK_UPLOAD_STARTED:
      return {
        ...state,
        isLoading: true,
        isFormSubmit: false,
        userInput: action.input
      };

    case SAVE_BULK_UPLOAD_COMPLETED:
      console.log(
        "SAVE_BULK_UPLOAD_COMPLETED " +
          action.payload.firstName +
          "---action" +
          action
      );
      // console.log("LOGININPUT"+state.loginInput.userId);
      return {
        ...state,
        isLoading: false,
        isFormSubmit: true,
        status: action.payload
      };

    case SAVE_BULK_UPLOAD_FAILED:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};
