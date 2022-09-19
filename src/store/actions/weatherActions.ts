import axios from 'axios'
import { ThunkAction } from 'redux-thunk'

import { RootState } from '..'
import { WeatherAction, WeatherData } from 'store/types'
import { GET_WEATHER, SET_LOADING, SET_ERROR, SET_SOURCE } from 'constants/actions'

export const getWeatherByPosition = (lat: number, lon: number): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`);

            const resData: WeatherData = await res.data;

            dispatch({
                type: GET_WEATHER,
                payload: resData
            });

            localStorage.setItem(resData.city.name.toLocaleLowerCase() + `1`, JSON.stringify(resData));
        } catch (err: any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const getOpenWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    console.log('getOpenWeather');

    if (localStorage.getItem(city.toLocaleLowerCase() + `1`)) {
        return dispatch => {
            dispatch({
                type: GET_WEATHER,
                payload: JSON.parse(localStorage.getItem(city.toLocaleLowerCase() + `1`) || '')
            })
        }
    }

    return async dispatch => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`);
            const resData: WeatherData = res.data

            dispatch({
                type: GET_WEATHER,
                payload: resData
            });

            localStorage.setItem(resData.city.name.toLocaleLowerCase() + `1`, JSON.stringify(resData))

        } catch (err: any) {
            console.log('errorrCatch');

            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const getWeatherBit = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {

    if (localStorage.getItem(city.toLocaleLowerCase() + `2`)) {
        return dispatch => {
            dispatch({
                type: GET_WEATHER,
                payload: JSON.parse(localStorage.getItem(city.toLocaleLowerCase() + `2`) || '')
            })
        }
    }

    return async dispatch => {
        try {
            const res = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.REACT_APP_API_KEY_WEATHERBIT}`);

            const resData: WeatherData = await res.data

            dispatch({
                type: GET_WEATHER,
                payload: resData
            });

            localStorage.setItem(resData.city_name.toLocaleLowerCase() + `2`, JSON.stringify(resData))

        } catch (err: any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}

export const setSourceWeather = (source: boolean): WeatherAction => {
    return {
        type: SET_SOURCE,
        payload: source
    }
}

