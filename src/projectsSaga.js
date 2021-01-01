import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getProject } from "./getProjectsApi";

import {
  fetchProject,
  fetchProjectSuccess,
  fetchProjectError,
} from "./projectsSlice";

function* fetchProjectHandler() {
  try {
    delay(500);
    const project = yield call(getProject);
    yield put(fetchProjectSuccess(project));
  } catch (error) {
    yield put(fetchProjectError());
  }
}

export function* watchFetchProject() {
  yield takeLatest(fetchProject.type, fetchProjectHandler);
}
