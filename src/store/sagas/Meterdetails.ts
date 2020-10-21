
import { put, call } from "redux-saga/effects";
import { SAVE_METERDETAILS_COMPLETED,SAVE_METERDETAILS_FAILED} from "../actions/Meterdetails";

import { metersaveAPI } from "../../utils/api/MetersaveApi";

export function* saveMeterdetails(request: any) {
    try {
      const result = yield call(metersaveAPI.saveMeters,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: SAVE_METERDETAILS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: SAVE_METERDETAILS_FAILED, payload: e.message });
      }
  }