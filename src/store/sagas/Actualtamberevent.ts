import { put, call } from "redux-saga/effects";

import { GET_ACTUALTAMBEREVENT_COMPLETED,GET_ACTUALTAMBEREVENT_FAILED} from "../actions/Actaultamberevent";

import { ActualTambereventAPI } from "../../utils/api/ActualTamberEventApi";

export function* getACTUALTAMBEREVENT(request: any) {
    try {
      const result = yield call(ActualTambereventAPI.getactualtamberevent,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTUALTAMBEREVENT_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTUALTAMBEREVENT_FAILED, payload: e.message });
      }
  }