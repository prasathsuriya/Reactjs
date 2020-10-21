import { put, call } from "redux-saga/effects";
import { GET_METERDETAIL_COMPLETED,GET_METERDETAIL_FAILED} from "../actions/Meterdetail";

import { MeterdetailsAPI } from "../../utils/api/MeterdetailsApi";

export function* getMeterdetail(request: any) {
    try {
      const result = yield call(MeterdetailsAPI.getmeterdetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_METERDETAIL_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_METERDETAIL_FAILED, payload: e.message });
      }
  }