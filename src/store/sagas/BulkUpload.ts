import { put, call } from "redux-saga/effects";
import {
  SAVE_BULK_UPLOAD_COMPLETED,
  SAVE_BULK_UPLOAD_FAILED,
  GET_BULK_UPLOAD_COMPLETED,
  GET_BULK_UPLOAD_FAILED
} from "../actions/BulkUpload";

import { BulkUploadAPI } from "../../utils/api/BulkUploadAPI";

export function* saveBulkUpload(request: any) {
  try {
    const result = yield call(BulkUploadAPI.uploadFile, request.input);
    yield put({
      type: SAVE_BULK_UPLOAD_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: SAVE_BULK_UPLOAD_FAILED, payload: e.message });
  }
}

export function* getBulkUploadsList(request: any) {
  try {
    const result = yield call(BulkUploadAPI.getUploadedList, request.input);
    var status = result.data;
    yield put({
      type: GET_BULK_UPLOAD_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_BULK_UPLOAD_FAILED, payload: e.message });
  }
}
