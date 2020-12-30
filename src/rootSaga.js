import { all } from "redux-saga/effects";
import { watchFetchProject } from "./projectsSaga";

export default function* rootSaga() {
  yield all([watchFetchProject()]);
}
