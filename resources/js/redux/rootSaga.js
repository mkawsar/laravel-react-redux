import { all, fork } from 'redux-saga/effects';
import authenticateSaga from './Authentication/apiSaga';
import settingsSaga from './Settings/apiSaga';

// Here you can include all the saga which you write for components
export default function* rootSaga() {
    yield all([
        authenticateSaga(), settingsSaga()
    ]);
}
