export const SET_GOOGLE_AUTH = 'googleAuthState/SET_GOOGLE_AUTH';

export const setGoogleAuthAction = (loggedIn, name) => ({
    type: SET_GOOGLE_AUTH,
    loggedIn,
    name,
});

const initialState = {
    loggedIn: false,
    name: 'Stranger',
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_GOOGLE_AUTH) {
        return {
            ...state,
            loggedIn: action.loggedIn,
            name: action.name,
        };
    }

    return state;
};

export default reducer;
