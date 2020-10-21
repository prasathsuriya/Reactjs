import { put, call } from "redux-saga/effects";
import { SAVE_AAPERMISSIONS_COMPLETED,SAVE_AAPERMISSIONS_FAILED,GET_AAPERMISSIONS_FAILED,GET_AAPERMISSIONS_COMPLETED,DELETE_AAPERMISSIONS_COMPLETED,DELETE_AAPERMISSIONS_FAILED} from "../actions/Aapermissions";
import {aapermissionsAPI} from '../../utils/api/AapermissionsAPI';
export function* saveAapermissions(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(aapermissionsAPI.saveAapermissions);
        //alert("save aapermissionss");
         const result=yield call(aapermissionsAPI.saveAapermissions, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_AAPERMISSIONS_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_AAPERMISSIONS_FAILED, payload: e.message });
    }
}

export function* getAapermissions(request: any) {
    try {
      const result = yield call(aapermissionsAPI.getAapermissions,request.input);
     // alert("getAapermissions");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_AAPERMISSIONS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_AAPERMISSIONS_FAILED, payload: e.message });
      }
  }

  export function* deleteAapermissions(request: any) {
    try {
      const result = yield call(aapermissionsAPI.DeleteAapermissions,request.input);
     // alert("delete aapermissions");
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_AAPERMISSIONS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_AAPERMISSIONS_FAILED, payload: e.message });
      }
  }
