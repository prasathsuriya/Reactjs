import { put, call } from "redux-saga/effects";

import { GET_METERCONNECTION_COMPLETED,GET_METERCONNECTION_FAILED} from "../actions/Meterconnection";

import { MeterconnAPI } from "../../utils/api/MeterconnAPI";

export function* getMETERCONNECTION(request: any) {
    try {
      const result = yield call(MeterconnAPI.getmeterconnection,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_METERCONNECTION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_METERCONNECTION_FAILED, payload: e.message });
      }
  }