import { put, call } from "redux-saga/effects";
import {
  GET_REPORT_COLUMNNAMES_COMPLETED,
  GET_REPORT_COLUMNNAMES_FAILED
} from "../actions/ReportColumns";
import { ReportAPI } from "../../utils/api/ReportAPI";

export function* getReportColumnNames(request: any) {
  try {
    const result = yield call(ReportAPI.getReportColumnNames, request.input);
    var status = result.data;
    yield put({
      type: GET_REPORT_COLUMNNAMES_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_REPORT_COLUMNNAMES_FAILED, payload: e.message });
  }
}
