import { all, call, put, takeLatest } from 'redux-saga/effects';
import action from "./action";
import actions from './action';
import {
    getCustomRequest,
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest
} from '../../config/axiosClient';
import { message } from 'antd';

function* login(action) {
    try {
        yield call(() => getCustomRequest('sanctum/csrf-cookie'));
        const response = yield call(() => postRequest('api/v1/employer/login', action.payload));
        console.log(response);
    } catch (error) {
        console.log('test')
        yield put({type: action.LOGIN_FAILURE});
        if (error.response.status === 401) {
            message.error(error.response.data.message);
        } else {
            message.error('Something Went Wrong');
        }
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actions.LOGIN, login)]);
}
