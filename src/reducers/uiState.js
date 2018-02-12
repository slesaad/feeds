export const SET_CURRENT_PAGE = 'uiState/SET_CURRENT_PAGE';

export const setCurrentPageAction = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

const initialState = {
    currentPage: 'dashboard',
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.currentPage,
        };
    }

    return state;
};

export default reducer;
