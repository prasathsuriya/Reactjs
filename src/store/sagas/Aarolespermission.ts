import { put, call } from "redux-saga/effects";
import { SAVE_AAROLESPERMISSION_COMPLETED,SAVE_AAROLESPERMISSION_FAILED,GET_AAROLESPERMISSION_FAILED,GET_AAROLESPERMISSION_COMPLETED,DELETE_AAROLESPERMISSION_COMPLETED,DELETE_AAROLESPERMISSION_FAILED} from "../actions/Aarolespermission";
import {AarolespermissionsAPI} from '../../utils/api/AarolespermissionsAPI';
export function* saveAarolespermission(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(AarolespermissionsAPI.saveAarolespermission);
      //  alert("save aapermissionss");
         const result=yield call(AarolespermissionsAPI.saveAarolespermission, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_AAROLESPERMISSION_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_AAROLESPERMISSION_FAILED, payload: e.message });
    }
}

export function* getAarolespermission(request: any) {
    try {
      const result = yield call(AarolespermissionsAPI.getAarolespermission,request.input);
     // alert("getAapermissions");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_AAROLESPERMISSION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_AAROLESPERMISSION_FAILED, payload: e.message });
      }
  }

  export function* deleteAarolespermission(request: any) {
    try {
      const result = yield call(AarolespermissionsAPI.DeleteAarolespermission,request.input);
     // alert("delete aapermissions");
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_AAROLESPERMISSION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_AAROLESPERMISSION_FAILED, payload: e.message });
      }
  }