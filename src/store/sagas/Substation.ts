import { put, call } from "redux-saga/effects";

import { GET_SUBSTATION_COMPLETED,GET_SUBSTATION_FAILED} from "../actions/Substation";

import { substationAPI } from "../../utils/api/SubstationAPI";

export function* getSUBSTATION(request: any) {
    try {
      const result = yield call(substationAPI.getsubstationdetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_SUBSTATION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_SUBSTATION_FAILED, payload: e.message });
      }
  }