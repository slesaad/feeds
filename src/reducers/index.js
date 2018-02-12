import { combineReducers } from 'redux';
import uiStateReducer from './uiState';
import weatherStateReducer from './weatherState';
import newsStateReducer from './newsState';
import googleAuthStateReducer from './googleAuthState';


const reducers = combineReducers({
    uiState: uiStateReducer,
    weatherState: weatherStateReducer,
    newsState: newsStateReducer,
    googleAuthState: googleAuthStateReducer,
});

export default reducers;
