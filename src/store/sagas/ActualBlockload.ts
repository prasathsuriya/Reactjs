import { put, call } from "redux-saga/effects";

import { GET_ACTUALBLOCKLOAD_COMPLETED,GET_ACTUALBLOCKLOAD_FAILED} from "../actions/ActualBlockload";

import { ActualBlockloadAPI } from "../../utils/api/ActualBlockloadapi";

export function* getACTUALBLOCKLOAD(request: any) {
    try {
      const result = yield call(ActualBlockloadAPI.getactualblockload,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTUALBLOCKLOAD_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTUALBLOCKLOAD_FAILED, payload: e.message });
      }
  }