import { put, call } from "redux-saga/effects";
import { GET_ROLE_COMPLETED,GET_ROLE_FAILED } from "../actions/Role";

import { Role } from "../../utils/api/RoleAPI";

export function* getRolesByTenant(request:any) {
    try {
        const { data } = yield call(Role.getRolesByTenant,request);
          console.log(data);
      yield put({
          type: GET_ROLE_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_ROLE_FAILED, payload: e.message });
    }
}

