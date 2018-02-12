import { combineReducers } from 'redux';
import uiStateReducer from './uiState';
import weatherStateReducer from './weatherState';
import newsStateReducer from './newsState';


export const initialState = {
    currentPage: 'dashboard',
    weather: undefined,
    news: undefined,
};

const reducers = combineReducers({
    uiState: uiStateReducer,
    weatherState: weatherStateReducer,
    newsState: newsStateReducer,
});

export default reducers;
