import action from './action';

const initialState = {
    isAuthenticated: false,
    loader: false,
    email: null,
    name: null,
    validateUserLoader: true,
    logOutLoader: false,
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case action.GET_AUTH_USER:
            return {...state, validateUserLoader: true}
        case action.LOGIN:
            return {...state, loader: true}
        case action.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: !!action.payload.data.email,
                loader: false,
                email: action.payload.data.email,
                name: action.payload.data.name
            }
        case action.LOGIN_FAILURE:
            return {...state, isAuthenticated: false, loader: false}
        default:
            return state
    }
}

export default Reducer;
