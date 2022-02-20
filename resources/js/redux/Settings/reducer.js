import actions from "./actions";

const initialState = {
    loader: true,
    users: []
};

function SettingReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_USER_LIST:
            console.log(action);
            return {
                ...state,
                loader: false
            }
        case actions.GET_USER_LIST_FAILURE:
            return { ...state, loader: false }
        default:
            return state
    }
}

export default SettingReducer;
