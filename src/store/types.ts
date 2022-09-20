import {
    SET_CITY,
    GET_WEATHER,
    SET_LOADING,
    SET_ERROR,
    SET_DEGREES,
    SET_SOURCE,
} from "constants/actions";

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}
export interface WeatherBit {
    ts: number;
    valid_date: string;
    weather: {
        icon: string;
        code: number;
        description: string;
    },
    datetime: string;
    temp: number;
}

export interface OpenWeather {
    dt: number;
    main: {
        temp: number;
    },
    weather: Weather[];
}

export interface WeatherData {
    dt: number;
    main: {
        temp: number;
    };
    name: string;
    sys: {
        country: string;
    };
    weather: Weather[];
    data: WeatherBit[];
    city_name: string;
    timezone: any;
    country_code: string;
    list: OpenWeather[];
    city: {
        name: string;
        country: string;
        timezone: number;
    }
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
    degrees: boolean;
    source: boolean;
    city: string;
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

interface SetDegreesAction {
    type: typeof SET_DEGREES;
    payload: boolean;
}

interface SetSourceAction {
    type: typeof SET_SOURCE;
    payload: boolean;
}
interface SetCity {
    type: typeof SET_CITY;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction | SetDegreesAction | SetSourceAction | SetCity;

export interface ToggleState {
    degrees: boolean;
}

export interface ToggleAction {
    type: typeof SET_DEGREES;
    payload: boolean;
}