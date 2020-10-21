import { put, call } from "redux-saga/effects";
import {
    SAVE_NEW_PS_FORM_COMPLETED,
    SAVE_NEW_PS_FORM_FAILED,
    GET_PS_DETAILS_COMPLETED,
    GET_PS_DETAILS_FAILED,  
} from "../actions/ProcessScheduler";

import { ProcessSchedulerAPI } from "../../utils/api/ProcessSchedulerAPI";

export function* saveNewFrom(request: any) {
    try {
      const result = yield call(ProcessSchedulerAPI.saveNewFrom, request.input);
      yield put({
        type: SAVE_NEW_PS_FORM_COMPLETED,
        payload: result.data,
        input: request.input
      });
    } catch (e) {
      yield put({ type: SAVE_NEW_PS_FORM_FAILED, payload: e.message });
    }
  }

  export function* getPSDetails(request: any) {
    try {
      const result = yield call(ProcessSchedulerAPI.getPSDetails, request.input);
    //  alert(JSON.stringify(result.data));
      yield put({
        type: GET_PS_DETAILS_COMPLETED,
        payload: result.data,
        input: request.input
      });
    } catch (e) {
      yield put({ type: GET_PS_DETAILS_FAILED, payload: e.message });
    }
  }