import { put, call } from "redux-saga/effects";

import { GET_SUBDIVISION_COMPLETED,GET_SUBDIVISION_FAILED} from "../actions/Subdivision";

import { subdivisionAPI } from "../../utils/api/SubdivisionAPI";

export function* getSUBDIVISION(request: any) {
    try {
      const result = yield call(subdivisionAPI.getsubdivisiondetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_SUBDIVISION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_SUBDIVISION_FAILED, payload: e.message });
      }
  }