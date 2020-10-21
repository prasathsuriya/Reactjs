import { put, call } from "redux-saga/effects";
import {
  GET_REPORTONDEMAND_COMPLETED,
  GET_REPORTONDEMAND_FAILED
} from "../actions/ReportOnDemand";

import { ReportAPI } from "../../utils/api/ReportOndemandAPI";

export function* getOnDemantReportList(request: any) {
  try {
    const result = yield call(ReportAPI.getOnDemandReport, request.input);
    var status = result.data;
    console.log("saga");
    console.log(result);
    yield put({
      type: GET_REPORTONDEMAND_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_REPORTONDEMAND_FAILED, payload: e.message });
  }
}
