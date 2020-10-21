import { put, call } from "redux-saga/effects";

import { SAVE_PASSWORDRESET_COMPLETED,SAVE_PASSWORDRESET_FAILED,GET_ACTCODEPASSWORD_COMPLETED,GET_ACTCODEPASSWORD_FAILED} from "../actions/Passwordreset";

import { PasswordresetApi } from "../../utils/api/PasswordresetApi";



export function* savenewPassword(request: any) {
    console.log("Request"+request.input);
    
    try {
        console.log(PasswordresetApi.savepasswordreset);
         const result=yield call(PasswordresetApi.savepasswordreset, request.input);
        console.log("REsult"+result.data.firstName);
        yield put({
            
            type: SAVE_PASSWORDRESET_COMPLETED,     
            payload: result.data,
            input: request.input
        });
    } catch (e) {
        yield put({ type: SAVE_PASSWORDRESET_FAILED, payload: e.message });
    }
    
}
export function* getactcodepassword(request: any) {
    try {
      const result = yield call(PasswordresetApi.getpasswordbyactcode,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_ACTCODEPASSWORD_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_ACTCODEPASSWORD_FAILED, payload: e.message });
      }
  }