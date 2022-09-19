import { WeatherState, WeatherAction } from "store/types";
import { GET_WEATHER, SET_LOADING, SET_ERROR, SET_SOURCE } from 'constants/actions'

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: '',
    degrees: true,
    source: true,
}

export default (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                data: action.payload,
                loading: false,
                error: '',
                degrees: state.degrees,
                source: state.source
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
                error: action.payload
            }
        case SET_SOURCE:
            return {
                ...state,
                source: action.payload
            }
        default:
            return state;
    }
}