import { put, call } from "redux-saga/effects";

import { GET_ACTUALINSTANT_COMPLETED,GET_ACTUALINSTANT_FAILED} from "../actions/ActualInstant";

import { ActualInstantAPI } from "../../utils/api/Actualinstantapi";

export function* getACTUALINSTANT(request: any) {
    try {
      const result = yield call(ActualInstantAPI.getactualinstant,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTUALINSTANT_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTUALINSTANT_FAILED, payload: e.message });
      }
  }