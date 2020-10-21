import { put, call } from "redux-saga/effects";

import { GET_ACTUALDAILYLOAD_COMPLETED,GET_ACTUALDAILYLOAD_FAILED} from "../actions/Actualdailyload";

import { ActualDailyloadAPI } from "../../utils/api/ActualdailyLoadAPI";

export function* getACTUALDAILYLOAD(request: any) {
    try {
      const result = yield call(ActualDailyloadAPI.getactualdailyload,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTUALDAILYLOAD_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTUALDAILYLOAD_FAILED, payload: e.message });
      }
  }