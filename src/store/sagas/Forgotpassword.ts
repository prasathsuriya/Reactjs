import { put, call } from "redux-saga/effects";

import { SAVE_FORGOTPASSWORD_COMPLETED,SAVE_FORGOTPASSWORD_FAILED} from "../actions/Forgotpassword";

import { forgotpasswordApi } from "../../utils/api/ForgotpasswordApi";



export function* saveForgotpassword(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(forgotpasswordApi.saveforgotpassword);
         const result=yield call(forgotpasswordApi.saveforgotpassword, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({
            
            type: SAVE_FORGOTPASSWORD_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_FORGOTPASSWORD_FAILED, payload: e.message });
    }
}