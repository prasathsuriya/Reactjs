import { put, call } from "redux-saga/effects";
import {GET_MANUFACTURE_COMPLETED, GET_MANUFACTURE_FAILED,  
    SAVE_MANUFACTURE_COMPLETED,SAVE_MANUFACTURE_FAILED,
UPDATE_MANUSTATUS_COMPLETED,UPDATE_MANUSTATUS_FAILED} from "../actions/Manufacture";

import {ManufactureAPI} from '../../utils/api/ManufactureAPI';
export function* saveManufacture(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(ManufactureAPI.saveManufacture);
         const result=yield call(ManufactureAPI.saveManufacture, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_MANUFACTURE_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_MANUFACTURE_FAILED, payload: e.message });
    }
}
export function* getManufactures(request: any) {
    try {
        const result = yield call(ManufactureAPI.getManufacture);
        var status = result.data;
        console.log(result);
        yield put({
            type: GET_MANUFACTURE_COMPLETED,
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: GET_MANUFACTURE_FAILED, payload: e.message });
    }
}
export function* updateStatus(request: any) {
    try {
      const result = yield call(ManufactureAPI.updateStaus,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: UPDATE_MANUSTATUS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: UPDATE_MANUSTATUS_FAILED, payload: e.message });
      }
  }
