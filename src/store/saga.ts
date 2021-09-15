import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GET_LOCAL_TODOS, setTodos } from './actions'

function* getLocalTodos() {
  const todos = yield call(AsyncStorage.getItem, '@todos')

  if (todos) yield put(setTodos(JSON.parse(todos)))
}

function* mySaga() {
  yield takeEvery(GET_LOCAL_TODOS, getLocalTodos);
}

export default mySaga;
