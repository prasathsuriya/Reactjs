import { GET_SECTION_COMPLETED,GET_SECTION_FAILED} from "../actions/Section";
import { put, call } from "redux-saga/effects";
import { sectionAPI } from "../../utils/api/SectionAPI";

export function* getSECTION(request: any) {
    try {
      const result = yield call(sectionAPI.getsectiondetails,request.input);
      //alert("getAaroles");
      var status = result.data;
      console.log(result);
          yield put({
              type: GET_SECTION_COMPLETED,
              payload: result.data,
              input: request.input
          });        
          
      } catch (e) {        
          yield put({ type: GET_SECTION_FAILED, payload: e.message });
      }
  }