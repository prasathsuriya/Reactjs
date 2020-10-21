import { put, call } from "redux-saga/effects";

import { GET_CIRCLE_COMPLETED,GET_CIRCLE_FAILED} from "../actions/Circle";

import { CircleAPI } from "../../utils/api/CircleAPI";

export function* getCIRCLE(request: any) {
    try {
      const result = yield call(CircleAPI.getcircledetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_CIRCLE_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_CIRCLE_FAILED, payload: e.message });
      }
  }