export const SET_NEWS = 'newsState/SET_NEWS';
export const SET_EVENTS = 'newsState/SET_EVENTS';

export const setNewsAction = news => ({
    type: SET_NEWS,
    news,
});

export const setEventsAction = events => ({
    type: SET_EVENTS,
    events,
});

const initialState = {
    news: undefined,
    events: undefined,
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_NEWS) {
        return {
            ...state,
            news: action.news,
        };
    }
    if (action.type === SET_EVENTS) {
        return {
            ...state,
            events: action.events,
        };
    }
    return state;
};

export default reducer;
