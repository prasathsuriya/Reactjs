import { put, call } from "redux-saga/effects";

import { GET_METERMFDETAILS_COMPLETED,GET_METERMFDETAILS_FAILED} from "../actions/Metermfdetails";

import { MetermfdetailsAPI } from "../../utils/api/MetermfdetailsAPI";

export function* getMETERMFDETAILS(request: any) {
    try {
      const result = yield call(MetermfdetailsAPI.getmetermfdetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_METERMFDETAILS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_METERMFDETAILS_FAILED, payload: e.message });
      }
  }