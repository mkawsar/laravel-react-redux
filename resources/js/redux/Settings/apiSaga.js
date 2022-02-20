import { all, call, put, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import { getRequest } from '../../config/axiosClient'
import { message } from 'antd';

function* getUsers() {
    try {
        let response = yield call(() => getRequest('settings/user/list'));
        yield put({ type: actions.GET_USER_LIST, payload: response.data });
    } catch (e) {
        yield put({ type: actions.GET_USER_LIST_FAILURE });
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actions.GET_USER_LIST, getUsers)]);
}
