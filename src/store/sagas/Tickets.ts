import { put, call } from "redux-saga/effects";
import { SAVE_TICKETS_COMPLETED,SAVE_TICKETS_FAILED, GET_TICKETS_COMPLETED, GET_TICKETS_FAILED} from "../actions/Tickets";
import {ticketsApi} from '../../utils/api/TicketsApi';
export function* saveTickets(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(ticketsApi.savetickets);
        //alert("save aaroles");
         const result=yield call(ticketsApi.savetickets, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_TICKETS_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_TICKETS_FAILED, payload: e.message });
    }
}
export function* getTickets(request: any) {
    try {
      const result = yield call(ticketsApi.getTickets,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_TICKETS_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_TICKETS_FAILED, payload: e.message });
      }
  }