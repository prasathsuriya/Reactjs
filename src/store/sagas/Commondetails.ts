import { put, call } from "redux-saga/effects";
import { GET_COMMONDETAILS_FAILED,GET_COMMONDETAILS_COMPLETED,SAVE_COMMONDETAILS_FAILED,SAVE_COMMONDETAILS_COMPLETED} from "../actions/Commondetails";
import {CommondetailsAPI} from '../../utils/api/CommondetailsAPI';
export function* getcommondetails(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(CommondetailsAPI.getcommondetails);
        //alert("save aaroles");
         const result=yield call(CommondetailsAPI.getcommondetails, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: GET_COMMONDETAILS_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: GET_COMMONDETAILS_FAILED, payload: e.message });
    }
}
export function* savecommondetails(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(CommondetailsAPI.savecommondetails);
        //alert("save aaroles");
         const result=yield call(CommondetailsAPI.savecommondetails, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_COMMONDETAILS_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_COMMONDETAILS_FAILED, payload: e.message });
    }
}