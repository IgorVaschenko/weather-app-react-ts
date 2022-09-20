import { takeEvery, call, put } from 'redux-saga/effects'
import { getOpenWeather, getPosition } from "api";
import { GET_WEATHER_BY_START_POSITION } from 'constants/actions';
import { setError, setWeather } from 'store/actions/weatherActions';
import { PositionProps, ResponseGenerator } from 'saga/types';

export function* workerGetWeatherByStartPosition() {
    try {
        const position: PositionProps = yield call(getPosition)
        const { data }: ResponseGenerator = yield call(getOpenWeather, position.data.city)
        yield put(setWeather(data))
        localStorage.setItem(data.city.name.toLowerCase() + `-openWeather`, JSON.stringify(data));
    } catch (err: any) {
        yield  put(setError(err.message))
    }
}

export function* watchGetWeatherByStartPosition() {
    yield takeEvery(GET_WEATHER_BY_START_POSITION, workerGetWeatherByStartPosition)
}