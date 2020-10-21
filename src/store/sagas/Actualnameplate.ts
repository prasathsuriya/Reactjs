import { put, call } from "redux-saga/effects";

import { GET_ACTUALNAMEPLATE_COMPLETED,GET_ACTUALNAMEPLATE_FAILED} from "../actions/Actualnameplate";

import { ActualnameplateAPI } from "../../utils/api/ActualnameplateApi";

export function* getACTUALNAMEPLATE(request: any) {
    try {
      const result = yield call(ActualnameplateAPI.getactualnameplate,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTUALNAMEPLATE_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTUALNAMEPLATE_FAILED, payload: e.message });
      }
  }