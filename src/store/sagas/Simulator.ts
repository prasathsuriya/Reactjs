import { put, call } from "redux-saga/effects";
import {
    GET_SIMULATOR_CNT_COMPLETED,
    GET_SIMULATOR_CNT_FAILED,
    GET_START_SERVER_COMPLETED,
    GET_START_SERVER_FAILED,
    GET_STOP_SERVR_COMPLETED,
    GET_STOP_SERVR_FAILED
} from "../actions/Simulator";
import { Simulator } from "../../utils/api/SimulatorAPI";

export function* getRunningSimulatorCount(request:any) {
    try {
        const { data } = yield call(Simulator.getRunningSimulatorCount,request.input);
          console.log(data);
      yield put({
          type: GET_SIMULATOR_CNT_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_SIMULATOR_CNT_FAILED, payload: e.message });
    }
}

export function* startSimulation(request:any) {
    try {
        const { data } = yield call(Simulator.startSimulation,request.input);
          console.log(data);
      yield put({
          type: GET_START_SERVER_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_START_SERVER_FAILED, payload: e.message });
    }
}

export function* stopSimulation(request:any) {
    try {
        const { data } = yield call(Simulator.stopSimulation);
          console.log(data);
      yield put({
          type: GET_STOP_SERVR_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_STOP_SERVR_FAILED, payload: e.message });
    }
}