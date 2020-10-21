import { GET_TOWN_COMPLETED,GET_TOWN_FAILED} from "../actions/Town";
import { put, call } from "redux-saga/effects";
import { townAPI } from "../../utils/api/TownAPI";

export function* getTOWN(request: any) {
    try {
      const result = yield call(townAPI.gettowndetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_TOWN_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_TOWN_FAILED, payload: e.message });
      }
  }