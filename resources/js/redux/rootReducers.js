import authenticationReducer from './Authentication/reducer';
import settingReducer from './Settings/reducer';
//Include all the reducer to combine and provide to configure store.
export default {
    authenticationReducer, settingReducer
};
