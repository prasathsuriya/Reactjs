import { put, call } from "redux-saga/effects";

import { GET_TRANSFORMER_COMPLETED,GET_TRANSFORMER_FAILED} from "../actions/Transformer";

import { transformerAPI } from "../../utils/api/TransformerAPI";

export function* getTRANSFORMER(request: any) {
    try {
      const result = yield call(transformerAPI.gettransformerdetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_TRANSFORMER_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_TRANSFORMER_FAILED, payload: e.message });
      }
  }