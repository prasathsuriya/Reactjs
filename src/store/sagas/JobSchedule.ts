import { put, call } from "redux-saga/effects";
import { SAVE_JOBSCHEDULE_COMPLETED,SAVE_JOBSCHEDULE_FAILED,GET_JOBSCHEDULE_FAILED,GET_JOBSCHEDULE_COMPLETED,DELETE_JOBSCHEDULE_COMPLETED,DELETE_JOBSCHEDULE_FAILED} from "../actions/JobSchedule";
import {jobscheduleAPI} from '../../utils/api/JobScheduleAPI';
export function* saveJobschedule(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(jobscheduleAPI.saveJobschedule);
         const result=yield call(jobscheduleAPI.saveJobschedule, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_JOBSCHEDULE_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_JOBSCHEDULE_FAILED, payload: e.message });
    }
}

export function* getJobschedule(request: any) {
    try {
      const result = yield call(jobscheduleAPI.getJobschedule,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_JOBSCHEDULE_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_JOBSCHEDULE_FAILED, payload: e.message });
      }
  }

  export function* deleteJobschedule(request: any) {
    try {
      const result = yield call(jobscheduleAPI.DeleteJobschedule,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_JOBSCHEDULE_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_JOBSCHEDULE_FAILED, payload: e.message });
      }
  }
