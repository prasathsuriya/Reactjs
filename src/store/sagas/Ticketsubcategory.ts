import { put, call } from "redux-saga/effects";
import { GET_SUBTICKETCATEGORIES_FAILED,GET_SUBTICKETCATEGORIES_COMPLETED} from "../actions/Ticketsubcategory";
import {TicketSubcategoryAPI} from '../../utils/api/TicketSubcategoryAPI';
export function* getsubticketcategories(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(TicketSubcategoryAPI.getticketsubcategories);
        //alert("save aaroles");
         const result=yield call(TicketSubcategoryAPI.getticketsubcategories, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: GET_SUBTICKETCATEGORIES_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: GET_SUBTICKETCATEGORIES_FAILED, payload: e.message });
    }
}
export function* savesubticketcategories(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(TicketSubcategoryAPI.savesubticketcategories);
        //alert("save aaroles");
         const result=yield call(TicketSubcategoryAPI.savesubticketcategories, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: GET_SUBTICKETCATEGORIES_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: GET_SUBTICKETCATEGORIES_FAILED, payload: e.message });
    }
}