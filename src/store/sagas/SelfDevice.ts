import { put, call } from "redux-saga/effects";
import { GET_ALL_SELF_DEVICE_COMPLETED, GET_ALL_SELF_DEVICE_FAILED } from "../actions/SelfDevice"
import { SelfDeviceAPI } from "../../utils/api/SelfDeviceAPI"

export function* getAllSelfDevice(request:any){
    try {
        const { data } = yield call(SelfDeviceAPI.getAllSelfDevice,request);
          console.log(data);
      yield put({
          type: GET_ALL_SELF_DEVICE_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_ALL_SELF_DEVICE_FAILED, payload: e.message });
    }
}