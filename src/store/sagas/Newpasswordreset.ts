import { put, call } from "redux-saga/effects";

import { SAVE_NEWPASSWORDRESET_COMPLETED,SAVE_NEWPASSWORDRESET_FAILED} from "../actions/Newpasswordreset";

import { NewpasswordresetApi } from "../../utils/api/NewpasswordresetAPI";



export function* savenewresetPassword(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(NewpasswordresetApi.savenewpasswordreset);
         const result=yield call(NewpasswordresetApi.savenewpasswordreset, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({
            
            type: SAVE_NEWPASSWORDRESET_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_NEWPASSWORDRESET_FAILED, payload: e.message });
    }
    
}
