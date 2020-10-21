import { put, call } from "redux-saga/effects";
import { SAVE_AAROLES_COMPLETED,SAVE_AAROLES_FAILED,GET_AAROLES_FAILED,GET_AAROLES_COMPLETED,DELETE_AAROLES_COMPLETED,DELETE_AAROLES_FAILED} from "../actions/Aaroles";
import {aarolesAPI} from '../../utils/api/AarolesAPI';
export function* saveAaroles(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(aarolesAPI.saveAaroles);
        //alert("save aaroles");
         const result=yield call(aarolesAPI.saveAaroles, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_AAROLES_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_AAROLES_FAILED, payload: e.message });
    }
}

export function* getAaroles(request: any) {
    try {
      const result = yield call(aarolesAPI.getAaroles,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_AAROLES_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_AAROLES_FAILED, payload: e.message });
      }
  }

  export function* deleteAaroles(request: any) {
    try {
      const result = yield call(aarolesAPI.DeleteAaroles,request.input);
      //alert("delete aaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_AAROLES_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_AAROLES_FAILED, payload: e.message });
      }
  }
