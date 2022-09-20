import { WeatherState, WeatherAction } from "store/types";
import { GET_WEATHER, SET_LOADING, SET_ERROR, SET_SOURCE, SET_CITY } from 'constants/actions'

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: '',
    degrees: true,
    source: true,
    city: '',
}

export default (state = initialState, action: WeatherAction): WeatherState => {
    
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            }
        case SET_SOURCE:
            return {
                ...state,
                source: action.payload
            }
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}