import { put, call } from "redux-saga/effects";
import { SAVE_PUSH_SETUP_COMPLETED,SAVE_PUSH_SETUP_FAILED,GET_PUSH_SETUP_FAILED,GET_PUSH_SETUP_COMPLETED,DELETE_PUSH_SETUP_COMPLETED,DELETE_PUSH_SETUP_FAILED} from "../actions/PushSetup";
import {pushSetupAPI} from '../../utils/api/PushSetupAPI';
export function* savePushSetup(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(pushSetupAPI.savePushSetup);
         const result=yield call(pushSetupAPI.savePushSetup, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_PUSH_SETUP_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_PUSH_SETUP_FAILED, payload: e.message });
    }
}

export function* getPushSetup(request: any) {
    try {
      const result = yield call(pushSetupAPI.getPushSetup,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_PUSH_SETUP_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_PUSH_SETUP_FAILED, payload: e.message });
      }
  }

  export function* deletePushSetup(request: any) {
    try {
      const result = yield call(pushSetupAPI.DeletePushSetup,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_PUSH_SETUP_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_PUSH_SETUP_FAILED, payload: e.message });
      }
  }
