import { takeEvery, call, put, select } from 'redux-saga/effects'

import { getOpenWeather } from 'api';
import { GET_OPENWEATHER } from 'constants/actions'
import { FIRST_SOURCE_POINT } from 'constants/days';
import { ResponseGenerator } from 'saga/types';
import { setError, setWeather } from 'store/actions/weatherActions';
import { timeMoreHour } from 'helpers/timeMoreHour';


export function* workerOpenWeather() {
    try {
        const city: string = yield select(state => state.weather.city)
        if (localStorage.getItem(city.toLowerCase() + FIRST_SOURCE_POINT) && (timeMoreHour(FIRST_SOURCE_POINT, city))) {
            const cache: ResponseGenerator = yield JSON.parse(localStorage.getItem(city.toLowerCase() + FIRST_SOURCE_POINT) || '')
            yield put(setWeather(cache))
        }
        const { data }: ResponseGenerator = yield call(getOpenWeather, city)
        yield put(setWeather({ ...data, saveTime: Date.now() }))
        yield localStorage.setItem(data.city.name.toLowerCase() + FIRST_SOURCE_POINT, JSON.stringify({ ...data, saveTime: Date.now() }));
    } catch (err: any) {
        yield put(setError(err.message))
    }

}

export function* watchOpenWeather() {
    yield takeEvery(GET_OPENWEATHER, workerOpenWeather)
}