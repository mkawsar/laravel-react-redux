import { all } from 'redux-saga/effects';
import authenticateSaga from './Authentication/apiSaga';

// Here you can include all the saga which you write for components
export default function* rootSaga() {
    yield all([
        authenticateSaga(),
    ]);
}
