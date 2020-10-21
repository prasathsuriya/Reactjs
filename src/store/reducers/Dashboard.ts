import {
  SAVE_DASHBOARD_STARTED,
  SAVE_DASHBOARD_COMPLETED,
  SAVE_DASHBOARD_FAILED
} from "../actions/Dashboard";

const intialdashboardData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true
  },
  items: [],
  dashboardInput: {
    userId: "",
    password: "",
    securityQuestion: "",
    answer: "",
    roleFkId: {
      roleId: 0,
      roleName: "",
      description: "",
      status: 0,
      createdAt: "",
      createdBy: "",
      updatedAt: "",
      updatedBy: ""
    },
    status: 0,
    createdAt: "",
    createdBy: "",
    updatedAt: "",
    updatedBy: ""
  },
  isLoading: true,
  isFormSubmit: false,
  isLoggedIn: false,
  error: ""
};

export const dashboardData = (state = intialdashboardData, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case SAVE_DASHBOARD_STARTED:
      return {
        ...state,
        isLoading: true,
        isFormSubmit: false,
        dashboardInput: action.input
      };
    case SAVE_DASHBOARD_COMPLETED:
      console.log(
        "SAVE_DASHBOARD_COMPLETED " +
          action.payload.firstName +
          "---action" +
          action
      );
      return {
        ...state,
        isLoading: false,
        isFormSubmit: true,
        status: action.payload
      };
    case SAVE_DASHBOARD_FAILED:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};
