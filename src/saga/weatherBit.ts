import { takeEvery, call, put, select } from 'redux-saga/effects'

import { getWeatherBit } from 'api';
import { GET_WEATHERBIT } from 'constants/actions'
import { SECOND_SOURCE_POINT } from 'constants/days';
import { setError, setWeather } from 'store/actions/weatherActions';
import { ResponseGenerator } from 'saga/types';
import { timeMoreHour } from 'helpers/timeMoreHour';

export function* workerWeatherBit() {
    try {
        const city: string = yield select(state => state.weather.city)
        if(localStorage.getItem(city.toLowerCase() + SECOND_SOURCE_POINT) && (timeMoreHour(SECOND_SOURCE_POINT, city))) {
            const cache: ResponseGenerator = yield JSON.parse(localStorage.getItem(city + SECOND_SOURCE_POINT) || '')
            yield put(setWeather(cache))
        }
        const res: ResponseGenerator = yield call(getWeatherBit, city)

        if (res.data === '') throw new Error(res.statusText)

        yield put(setWeather({ ...res.data, saveTime: Date.now() }))
        yield localStorage.setItem(res.data.city_name + SECOND_SOURCE_POINT, JSON.stringify({ ...res.data, saveTime: Date.now() }));
    } catch (err: any) {
        yield put(setError(err.message))
    }
}

export function* watchWeatherBit() {
    yield takeEvery(GET_WEATHERBIT, workerWeatherBit)
}