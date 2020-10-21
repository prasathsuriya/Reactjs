import { put, call } from "redux-saga/effects";
import { GET_JOBPROFILE_COMPLETED,GET_JOBPROFILE_FAILED } from "../actions/JobProfile";

import { JobProfile } from "../../utils/api/JobProfileAPI";

export function* getJobProfiles(request:any) {
    try {
        const { data } = yield call(JobProfile.getProfiles,request);
          console.log(data);
      yield put({
          type: GET_JOBPROFILE_COMPLETED,
          payload: data 
        });
    } catch (e) {
        yield put({ type: GET_JOBPROFILE_FAILED, payload: e.message });
    }
}

