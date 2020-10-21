import { put, call } from "redux-saga/effects";
import { SAVE_CONSUMER_COMPLETED,SAVE_CONSUMER_FAILED,GET_CONSUMER_FAILED,GET_CONSUMER_COMPLETED,DELETE_CONSUMER_COMPLETED,DELETE_CONSUMER_FAILED} from "../actions/Consumer";
import {consumerAPI} from '../../utils/api/ConsumerAPI';
export function* saveConsumer(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(consumerAPI.saveConsumer);
         const result=yield call(consumerAPI.saveConsumer, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_CONSUMER_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_CONSUMER_FAILED, payload: e.message });
    }
}

export function* getConsumer(request: any) {
    try {
      const result = yield call(consumerAPI.getConsumer,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_CONSUMER_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_CONSUMER_FAILED, payload: e.message });
      }
  }

  export function* deleteConsumer(request: any) {
    try {
      const result = yield call(consumerAPI.DeleteConsumer,request.input);
      var status = result.data;
      console.log(result);
          yield put({
              type: DELETE_CONSUMER_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: DELETE_CONSUMER_FAILED, payload: e.message });
      }
  }
