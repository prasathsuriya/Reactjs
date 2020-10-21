import { put, call } from "redux-saga/effects";

import { GET_METERDATE_COMPLETED,GET_METERDATE_FAILED} from "../actions/Meterdate";

import { MeterlocationAPI } from "../../utils/api/MeterlocationAPI";

export function* getMETERDATE(request: any) {
    try {
      const result = yield call(MeterlocationAPI.getmeterdate,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_METERDATE_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_METERDATE_FAILED, payload: e.message });
      }
  }