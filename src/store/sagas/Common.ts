import { put, call } from "redux-saga/effects";
import { GET_COUNTRY_COMPLETED,GET_COUNTRY_FAILED 
,GET_ZONE_COMPLETED, GET_ZONE_FAILED
,GET_REGION_COMPLETED, GET_REGION_FAILED
,GET_STATE_COMPLETED, GET_STATE_FAILED
,GET_AREA_COMPLETED,GET_AREA_FAILED
} from "../actions/Common";

import { commonAPI } from "../../utils/api/CommonAPI";

export function* getCountry() {
    try {
        const { data } = yield call(commonAPI.getCountry);
          console.log(data);
      yield put({
          type: GET_COUNTRY_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_COUNTRY_FAILED, payload: e.message });
    }
}


export function* getStates(request:any) {
    try {
        const { data } = yield call(commonAPI.getStates,request.input);
          console.log(data);
      yield put({
          type: GET_STATE_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_STATE_FAILED, payload: e.message });
    }
}

export function* getRegionList(request:any) {
    try {
        const { data } = yield call(commonAPI.getMeterregioncode,request.input);
          console.log(data);
      yield put({
          type: GET_REGION_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_REGION_FAILED, payload: e.message });
    }
}

export function* getAreaList(request:any) {
    try {
        const { data } = yield call(commonAPI.getAreaList,request.input);
          console.log(data);
      yield put({
          type: GET_AREA_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_AREA_FAILED, payload: e.message });
    }
}

export function* getZoneList(request:any) {
    try {
        const { data } = yield call(commonAPI.getZoneList,request.input);
          console.log(data);
      yield put({
          type: GET_ZONE_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_ZONE_FAILED, payload: e.message });
    }
}
