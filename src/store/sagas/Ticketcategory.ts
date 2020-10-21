import { put, call } from "redux-saga/effects";
import { GET_TICKETCATEGORIES_FAILED,GET_TICKETCATEGORIES_COMPLETED,SAVE_TICKETCATEGORIES_FAILED,SAVE_TICKETCATEGORIES_COMPLETED} from "../actions/Ticketcategory";
import {TicketcategoryAPI} from '../../utils/api/TicketcategoryApi';
export function* getticketcategories(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(TicketcategoryAPI.getticketcategories);
        //alert("save aaroles");
         const result=yield call(TicketcategoryAPI.getticketcategories, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: GET_TICKETCATEGORIES_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: GET_TICKETCATEGORIES_FAILED, payload: e.message });
    }
}
export function* saveticketcategories(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(TicketcategoryAPI.saveticketcategories);
        //alert("save aaroles");
         const result=yield call(TicketcategoryAPI.saveticketcategories, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_TICKETCATEGORIES_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_TICKETCATEGORIES_FAILED, payload: e.message });
    }
}