import { put, call } from "redux-saga/effects";

import { GET_NEWMETERLOCATION_COMPLETED,GET_NEWMETERLOCATION_FAILED} from "../actions/Newmeterlocation";

import { MeterlocationAPI } from "../../utils/api/MeterlocationAPI";

export function* getNEWMETERLOCATION(request: any) {
    try {
      const result = yield call(MeterlocationAPI.getmetersearch,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_NEWMETERLOCATION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_NEWMETERLOCATION_FAILED, payload: e.message });
      }
  }