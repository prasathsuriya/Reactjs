import { put, call } from "redux-saga/effects";
import { GET_AAAPERMISSION_COMPLETED,GET_AAAPERMISSION_FAILED } from "../actions/Aaapermission";

import { AarolespermissionsAPI } from "../../utils/api/AarolespermissionsAPI";

export function*getRolesPermissionByRoleid (request:any) {
    try {
        const { data } = yield call(AarolespermissionsAPI.getRolesPermissionByRoleid,request);
          console.log(data);
      yield put({
          type: GET_AAAPERMISSION_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_AAAPERMISSION_FAILED, payload: e.message });
    }
}