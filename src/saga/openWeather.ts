import { takeEvery, call, put, select } from 'redux-saga/effects'

import { GET_OPENWEATHER } from 'constants/actions'
import { ResponseGenerator } from 'saga/types';
import { getOpenWeather } from 'api';
import { setError, setWeather } from 'store/actions/weatherActions';

export function* workerOpenWeather() {
    try {
        const city: string = yield select(state => state.weather.city)
        if (localStorage.getItem(city.toLowerCase() + `-openWeather`)) {
            const cache: ResponseGenerator = yield JSON.parse(localStorage.getItem(city.toLowerCase() + `-openWeather`) || '')
            yield put(setWeather(cache))
        }
        const { data }: ResponseGenerator = yield call(getOpenWeather, city)
        yield put(setWeather(data))
        yield localStorage.setItem(data.city.name.toLowerCase() + `-openWeather`, JSON.stringify(data));
    } catch (err: any) {
        yield put(setError(err.message))
    }

}

export function* watchOpenWeather() {
    yield takeEvery(GET_OPENWEATHER, workerOpenWeather)
}