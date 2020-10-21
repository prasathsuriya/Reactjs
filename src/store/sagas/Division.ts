import { put, call } from "redux-saga/effects";

import { GET_DIVISION_COMPLETED,GET_DIVISION_FAILED} from "../actions/Division";

import { DivisionAPI } from "../../utils/api/DivisionAPI";

export function* getDIVISION(request: any) {
    try {
      const result = yield call(DivisionAPI.getdivisiondetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_DIVISION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_DIVISION_FAILED, payload: e.message });
      }
  }