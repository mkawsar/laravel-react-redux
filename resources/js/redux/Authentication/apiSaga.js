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
        const response = yield call(() => postRequest('auth/login', action.payload));
        console.log(response.data);
        yield put({type: actions.LOGIN_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: action.LOGIN_FAILURE});
        if (error.response.status === 401) {
            message.error(error.response.data.message);
        } else {
            message.error('Something Went Wrong');
        }
    }
}

function* register(action) {
    try {
        const response = yield call(() => postRequest('auth/register', action.payload));
        yield put({type: actions.REGISTER_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: actions.REGISTER_FAILURE});
        if(error.response.status === 422) {
            message.error(error.response.data.errors.join(','));
        } else {
            message.error('Something Went Wrong');
        }
    }
}

function* getAuthUser() {
    try {
        const response = yield call(() => getRequest('auth/user'));
        yield put({type: actions.GET_AUTH_USER_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: actions.GET_AUTH_USER_FAILURE});
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actions.LOGIN, login)]);
    yield all([takeLatest(actions.REGISTER, register)]);
    yield all([takeLatest(actions.GET_AUTH_USER, getAuthUser)]);
}
