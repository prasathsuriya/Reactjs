import { put, call } from "redux-saga/effects";

import { GET_METERLOCATION_COMPLETED,GET_METERLOCATION_FAILED} from "../actions/Meterlocation";

import { MeterlocationAPI } from "../../utils/api/MeterlocationAPI";

export function* getMETERLOCATION(request: any) {
    try {
      const result = yield call(MeterlocationAPI.getmeterlocationdetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_METERLOCATION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_METERLOCATION_FAILED, payload: e.message });
      }
  }