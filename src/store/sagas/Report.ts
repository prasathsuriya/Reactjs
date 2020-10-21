import { put, call } from "redux-saga/effects";
import {
  SAVE_REPORT_COMPLETED,
  SAVE_REPORT_FAILED,
  GET_REPORT_COMPLETED,
  GET_REPORT_FAILED,
  GET_SEARCH_LIST_COMPLETED,
  GET_SEARCH_LIST_FAILED
} from "../actions/Report";

import { ReportAPI } from "../../utils/api/ReportAPI";

export function* saveReport(request: any) {
  try {
    const result = yield call(ReportAPI.saveReport, request.input);
    yield put({
      type: SAVE_REPORT_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: SAVE_REPORT_FAILED, payload: e.message });
  }
}

export function* getReportsList(request: any) {
  try {
    const result = yield call(ReportAPI.getReport, request.input);
    var status = result.data;
    yield put({
      type: GET_REPORT_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_REPORT_FAILED, payload: e.message });
  }
}

export function* getAllSearchCriteriaList(request: any) {
  try {
    const result = yield call(ReportAPI.getAllSearchCriteriaList, request.input);
    yield put({
      type: GET_SEARCH_LIST_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_SEARCH_LIST_FAILED, payload: e.message });
  }
}
