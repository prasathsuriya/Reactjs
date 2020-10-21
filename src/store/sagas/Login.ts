import { put, call } from "redux-saga/effects";

import { SAVE_LOGIN_COMPLETED,SAVE_LOGIN_FAILED} from "../actions/Login";

import { LoginAPI } from "../../utils/api/LoginAPI";



export function* saveLogin(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(LoginAPI.saveLogin);
         const result=yield call(LoginAPI.saveLogin, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({
            
            type: SAVE_LOGIN_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_LOGIN_FAILED, payload: e.message });
    }
}
