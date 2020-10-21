import { put, call } from "redux-saga/effects";
import { SAVE_RCREPORTING_COMPLETED,SAVE_RCREPORTING_FAILED,GET_RCREPORTING_FAILED,GET_RCREPORTING_COMPLETED,DELETE_RCREPORTING_COMPLETED,DELETE_RCREPORTING_FAILED} from "../actions/Rcreporting";
import {RcreportrunAPI} from '../../utils/api/RcreportrunAPI';
export function* saveRcreporting(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(RcreportrunAPI.saveRcreporting);
        
         const result=yield call(RcreportrunAPI.saveRcreporting, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_RCREPORTING_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_RCREPORTING_FAILED, payload: e.message });
    }
}

export function* getRcreporting(request: any) {
    try {
      const result = yield call(RcreportrunAPI.getRcreporting,request.input);
     // alert("getRCREPORTING");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_RCREPORTING_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_RCREPORTING_FAILED, payload: e.message });
      }
  }

  export function* deleteRcreporting(request: any) {
    try {
      const result = yield call(RcreportrunAPI.DeleteRcreporting,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_RCREPORTING_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_RCREPORTING_FAILED, payload: e.message });
      }
  }