import { number, string } from "prop-types";
import React, { ReactDOM} from 'react';

export interface IStatus {  
  statusCode: number;
  statusDisplay: string;
  statusValue: boolean;
}


export interface IUser {
  ID: any | null;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  customerID: number;
  email: string;
  roleID: number;
  joinedDate: Date;
  isFirstTimeLogin: boolean;
  acceptedTermsAndConditions: boolean;
  deleted: boolean;
}

export interface IUserData {
  status: IStatus;
  usersList: Array<IUser>;
  selectedUser: IUser;
  isLoading: boolean;
  error: string;
}
