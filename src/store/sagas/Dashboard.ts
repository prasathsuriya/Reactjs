import { put, call } from "redux-saga/effects";
import { SAVE_DASHBOARD_COMPLETED,SAVE_DASHBOARD_FAILED} from "../actions/Dashboard";
import {DashboardAPI} from '../../utils/api/DashboardAPI';
export function* saveDashboard(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(DashboardAPI.saveDashboard);
         const result=yield call(DashboardAPI.saveDashboard, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_DASHBOARD_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_DASHBOARD_FAILED, payload: e.message });
    }
}
