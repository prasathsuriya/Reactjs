import { put, call } from "redux-saga/effects";
import {    
  GET_USER_COMPLETED,
  GET_USER_FAILED,UPDATE_STATUS_FAILED, UPDATE_STATUS_COMPLETED,
    SAVE_USER_COMPLETED,SAVE_USER_FAILED} from "../actions/CreateUser";

import {UserAPI} from '../../utils/api/CreateUserAPI';
export function* saveNewUser(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(UserAPI.saveUser);
         const result=yield call(UserAPI.saveUser, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_USER_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_USER_FAILED, payload: e.message });
    }
}

export function* getUsersList(request: any) {
  try {
    const result = yield call(UserAPI.getUsersList,request.input);
    var status = result.data;
    console.log(result);
        yield put({
            type: GET_USER_COMPLETED,
            payload: result.data,
            input: request.input
        });        
        
    } catch (e) {        
        yield put({ type: GET_USER_FAILED, payload: e.message });
    }
}

export function* updateStatus(request: any) {
    try {
      const result = yield call(UserAPI.updateStaus,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: UPDATE_STATUS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: UPDATE_STATUS_FAILED, payload: e.message });
      }
  }
