import { put, call } from "redux-saga/effects";

import { GET_METERMANUFACTURE_COMPLETED,GET_METERMANUFACTURE_FAILED} from "../actions/metermanufacture";

import { MetermanufactureAPI } from "../../utils/api/MetermanufactureAPI";

export function* getMETERMANUFACTURE(request: any) {
    try {
      const result = yield call(MetermanufactureAPI.getmetermanufacture,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_METERMANUFACTURE_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_METERMANUFACTURE_FAILED, payload: e.message });
      }
  }