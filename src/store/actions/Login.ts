export const SAVE_LOGIN_STARTED = "SAVE_LOGIN_STARTED";
export const SAVE_LOGIN_COMPLETED = "SAVE_LOGIN_COMPLETED";
export const SAVE_LOGIN_FAILED = "SAVE_LOGIN_FAILED";

export interface ILogin {
  status: {
    statusCode: number;
    statusDisplay: string;
    statusValue: boolean;
  };
  items: Array<any>;
  loginInput: {
    userId: string;
    password: string;
    securityQuestion: string;
    answer: string;
    roleFkId: {
      roleId: number;
      roleName: string;
      description: string;
      status: number;
      createdAt: Date;
      createdBy: string;
      updatedAt: Date;
      updatedBy: string;
    };
    status: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
  };
  loginID: number;
  isLoading: boolean;
  error: string;
}

export const saveLogin = (loginInput: any) => {
  console.log("LoginInput" + loginInput);
  return {
    type: SAVE_LOGIN_STARTED,
    payload: "status",
    input: loginInput
  };
};
