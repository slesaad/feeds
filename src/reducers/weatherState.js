import { initialState } from './index.js';

export const SET_WEATHER = 'weatherState/SET_WEATHER';

export const setWeatherAction = weather => ({
    type: SET_WEATHER,
    weather,
});

// const initialState = {
//     weather: null,
// };

export const reducer = (state = initialState, action) => {
    if (action.type === SET_WEATHER) {
        return {
            ...state,
            weather: action.weather,
        };
    }

    return state;
};

export default reducer;
