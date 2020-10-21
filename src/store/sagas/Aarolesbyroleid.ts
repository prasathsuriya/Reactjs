import { put, call } from "redux-saga/effects";

import {
    GET_ROLEBYID_STARTED,
    GET_ROLEBYID_COMPLETED,
   GET_ROLEBYID_FAILED
}  from '../actions/Aarolesbyroleid';
import {aarolesAPI} from '../../utils/api/AarolesAPI';
import { Role } from "../../utils/api/RoleAPI";

export function* getAarolesByRoleId(request:any) {
    try {
        const { data } = yield call(aarolesAPI.getAarolesByRoleId,request);
          console.log(data);
      yield put({
          type: GET_ROLEBYID_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_ROLEBYID_FAILED, payload: e.message });
    }
}
