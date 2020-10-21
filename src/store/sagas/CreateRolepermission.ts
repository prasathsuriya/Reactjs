import { put, call } from "redux-saga/effects";
import {    
  GET_AAAROLEPERMISSION_COMPLETED,
  GET_AAAROLEPERMISSION_FAILED,UPDATE_STATUS_FAILED, UPDATE_STATUS_COMPLETED,
    SAVE_AAAROLEPERMISSION_COMPLETED,SAVE_AAAROLEPERMISSION_FAILED} from "../actions/CreateRolepermission";

import {AarolespermissionsAPI} from '../../utils/api/AarolespermissionsAPI';
export function* saveNewRolepermission(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(AarolespermissionsAPI.SaveAarolepermission);
         const result=yield call(AarolespermissionsAPI.SaveAarolepermission, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_AAAROLEPERMISSION_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_AAAROLEPERMISSION_FAILED, payload: e.message });
    }
}

export function* getAarolespermissionsList(request: any) {
  try {
    const result = yield call(AarolespermissionsAPI.DeleteAarolespermission,request.input);
    var status = result.data;
    console.log(result);
        yield put({
            type: GET_AAAROLEPERMISSION_COMPLETED,
            payload: result.data,
            input: request.input
        });        
        
    } catch (e) {        
        yield put({ type: GET_AAAROLEPERMISSION_FAILED, payload: e.message });
    }
}
