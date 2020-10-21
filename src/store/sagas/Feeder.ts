import { GET_FEEDER_COMPLETED,GET_FEEDER_FAILED} from "../actions/Feeder";
import { put, call } from "redux-saga/effects";
import { feederAPI } from "../../utils/api/FeederAPI";

export function* getFEEDER(request: any) {
    try {
      const result = yield call(feederAPI.getfeederdetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_FEEDER_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_FEEDER_FAILED, payload: e.message });
      }
  }