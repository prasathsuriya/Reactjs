import { put, call } from "redux-saga/effects";

import { GET_PASSWORDHISTORY_COMPLETED,GET_PASSWORDHISTORY_FAILED} from "../actions/Passwordhistory";

import { PasswordhistoryApi } from "../../utils/api/PasswordhistoryApi";

export function* getpasswordhistory(request: any) {
    try {
      const result = yield call(PasswordhistoryApi.getpasswordhistory,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_PASSWORDHISTORY_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_PASSWORDHISTORY_FAILED, payload: e.message });
      }
  }