import { put, call } from "redux-saga/effects";
import { GET_PASSWORDPOLICY_FAILED,GET_PASSWORDPOLICY_COMPLETED,SAVE_PASSWORDPOLICY_FAILED,SAVE_PASSWORDPOLICY_COMPLETED} from "../actions/Passwordpolicy";
import {PasswordpolicyAPI} from '../../utils/api/PasswordpolicyApi';
export function* getpasswordpolicies(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(PasswordpolicyAPI.getpasswordpolicy);
        //alert("save aaroles");
         const result=yield call(PasswordpolicyAPI.getpasswordpolicy, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: GET_PASSWORDPOLICY_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: GET_PASSWORDPOLICY_FAILED, payload: e.message });
    }
}
export function* savepasswordpolicies(request: any) {
    console.log("Request"+request.input);
    try {
        console.log(PasswordpolicyAPI.savepasswordpolicy);
        //alert("save aaroles");
         const result=yield call(PasswordpolicyAPI.savepasswordpolicy, request.input);
         var status = result.data;
        console.log("REsult"+result.data.firstName);
        yield put({ 
            type: SAVE_PASSWORDPOLICY_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_PASSWORDPOLICY_FAILED, payload: e.message });
    }
}