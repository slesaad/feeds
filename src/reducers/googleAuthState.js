export const SET_GOOGLE_AUTH = 'googleAuthState/SET_GOOGLE_AUTH';

export const setGoogleAuthAction = loggedIn => ({
    type: SET_GOOGLE_AUTH,
    loggedIn,
});

const initialState = {
    loggedIn: false,
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_GOOGLE_AUTH) {
        return {
            ...state,
            loggedIn: action.loggedIn,
        };
    }

    return state;
};

export default reducer;
