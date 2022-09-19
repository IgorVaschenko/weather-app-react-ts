export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DEGREES = 'SET_DEGREES';
export const SET_SOURCE = 'SET_SOURCE';

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
    base: string;
    cod: number;
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
        message: number;
    };
    visibility: number;
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

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction | SetDegreesAction | SetSourceAction;


export interface ToggleState {
    degrees: boolean;
}

export interface ToggleAction {
    type: typeof SET_DEGREES;
    payload: boolean;
}