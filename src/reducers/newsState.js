export const SET_NEWS = 'newsState/SET_NEWS';

export const setNewsAction = news => ({
    type: SET_NEWS,
    news,
});

const initialState = {
    news: undefined,
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_NEWS) {
        return {
            ...state,
            news: action.news,
        };
    }
    return state;
};

export default reducer;
