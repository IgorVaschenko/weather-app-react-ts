import { WeatherAction } from 'store/types'
import {
    GET_WEATHER,
    SET_LOADING,
    SET_ERROR,
    SET_SOURCE,
    GET_WEATHER_BY_START_POSITION,
    GET_OPENWEATHER, SET_CITY,
    GET_WEATHERBIT
} from 'constants/actions'

export const getWeatherPosition = () => ({ type: GET_WEATHER_BY_START_POSITION })
export const getOpenWeather = () => ({ type: GET_OPENWEATHER })
export const getWeatherBit = () => ({ type: GET_WEATHERBIT })

export const setWeather = (payload: Object) => ({
    type: GET_WEATHER,
    payload,
})

export const setLoading = (): WeatherAction => ({ type: SET_LOADING })

export const setError = (payload: string): WeatherAction => ({
    type: SET_ERROR,
    payload,
})

export const setSourceWeather = (source: boolean): WeatherAction => ({
    type: SET_SOURCE,
    payload: source
})

export const setCurrentCity = (payload: string): WeatherAction => ({
    type: SET_CITY,
    payload
})

