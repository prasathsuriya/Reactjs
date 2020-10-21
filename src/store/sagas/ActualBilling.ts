import { put, call } from "redux-saga/effects";

import { GET_ACTUALBILLING_COMPLETED,GET_ACTUALBILLING_FAILED} from "../actions/Actualbilling";

import { ActualBillingAPI } from "../../utils/api/ActualBillingAPI";

export function* getACTUALBILLING(request: any) {
    try {
      const result = yield call(ActualBillingAPI.getactualbilling,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTUALBILLING_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTUALBILLING_FAILED, payload: e.message });
      }
  }