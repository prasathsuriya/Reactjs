import { put, call } from "redux-saga/effects";
import {
  SAVE_NEW_DEVICE_COMPLETED,
  SAVE_NEW_DEVICE_FAILED,
  GET_DEVICES_COMPLETED,
  GET_DEVICES_FAILED,
  GET_DEVICES_STARTED,
  GET_NOOF_DEVICES_COMPLETED,
  GET_NOOF_DEVICES_FAILED,
  GET_NOOF_DEVICES_STARTED,
  GET_NOOF_ACTIVE_DEVICES_COMPLETED,
  GET_NOOF_ACTIVE_DEVICES_FAILED,
  GET_DEVICES_DETAILS_COMPLETED,
  GET_DEVICES_DETAILS_FAILED, 
  GET_LOADGRAPHDATA_COMPLETED,
  GET_LOADGRAPHDATA_FAILED,
  GET_METER_DETAILS_STARTED,
  GET_METER_DETAILS_COMPLETED,
  GET_METER_DETAILS_FAILED, SAVE_METER_LOCATION_STARTED, SAVE_METER_LOCATION_FAILED, SAVE_METER_LOCATION_COMPLETED
  , SAVE_METER_ACTIVATE_STARTED, SAVE_METER_ACTIVATE_FAILED, SAVE_METER_ACTIVATE_COMPLETED,
  GET_360DG_COMPLETED,
  GET_360DG_FAILED
} from "../actions/NewDevice"; 
 
import { DeviceAPI } from "../../utils/api/DeviceAPI";

export function* saveNewDevice(request: any) {
  try {
    const result = yield call(DeviceAPI.saveNewDevice, request.input);
    yield put({
      type: SAVE_NEW_DEVICE_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: SAVE_NEW_DEVICE_FAILED, payload: e.message });
  }
}

export function* saveMeterLocation(request: any) {
  try {
    const result = yield call(DeviceAPI.saveMeterLocation, request.input);
    yield put({
      type: SAVE_METER_LOCATION_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: SAVE_METER_LOCATION_FAILED, payload: e.message });
  }
}

export function* saveActivateMeter(request: any) {
  try {
    const result = yield call(DeviceAPI.activateNewMeter, request.input);
    yield put({
      type: SAVE_METER_ACTIVATE_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: SAVE_METER_ACTIVATE_FAILED, payload: e.message });
  }
}

export function* getDeviceList(request: any) {
  try {
    const result = yield call(DeviceAPI.getDeviceList, request.input);
    yield put({
      type: GET_DEVICES_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_DEVICES_FAILED, payload: e.message });
  }
}

export function* getDeviceNumber(request: any) {
  try {
    const result = yield call(DeviceAPI.getNumberOfMeterCount, request.input);
    yield put({
      type: GET_NOOF_DEVICES_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_NOOF_DEVICES_FAILED, payload: e.message });
  }
}

export function* getActiveMeterCount(request: any) {
  try {
    const result = yield call(DeviceAPI.getActiveMeterCount, request.input);
    yield put({
      type: GET_NOOF_ACTIVE_DEVICES_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_NOOF_ACTIVE_DEVICES_FAILED, payload: e.message });
  }
}

export function* getAllMeterDetails(request: any) {
  try {
    const result = yield call(DeviceAPI.getAllMeterDetails, request.input);
    alert(JSON.stringify(result.data));
    yield put({
      type: GET_DEVICES_DETAILS_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_DEVICES_DETAILS_FAILED, payload: e.message });
  }
}

export function* getMeterDetails(request: any) {
  try {
    const result = yield call(DeviceAPI.getMeterDetails, request.input);
    yield put({
      type: GET_METER_DETAILS_COMPLETED,
      payload: result.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_METER_DETAILS_FAILED, payload: e.message });
  }
}

export function* getGraphData(request: any) {
  try {
    const result = yield call(DeviceAPI.getGraphData, request.input);
    yield put({
      type: GET_LOADGRAPHDATA_COMPLETED,
      payload: result.data, //.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_LOADGRAPHDATA_FAILED, payload: e.message });
  }
}

export function* getThreeSixtyInfo(request: any) {
  try {
    const result = yield call(DeviceAPI.getThreeSixtyInfo, request.input);
    yield put({
      type: GET_360DG_COMPLETED,
      payload: result.data, //.data,
      input: request.input
    });
  } catch (e) {
    yield put({ type: GET_360DG_FAILED, payload: e.message });
  }
}