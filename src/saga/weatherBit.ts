import { takeEvery, call, put, select } from 'redux-saga/effects'

import { GET_WEATHERBIT } from 'constants/actions'
import { setError, setWeather } from 'store/actions/weatherActions';
import { ResponseGenerator } from 'saga/types';
import { getWeatherBit } from 'api';

export function* workerWeatherBit() {
    try {
        const city: string = yield select(state => state.weather.city)
        if (localStorage.getItem(city + `-weatherBit`)) {
            const cache: ResponseGenerator = yield JSON.parse(localStorage.getItem(city + `-weatherBit`) || '')
            yield put(setWeather(cache))
        }
        const res: ResponseGenerator = yield call(getWeatherBit, city)
        
        if(res.data==='') throw new Error(res.statusText)

        yield put(setWeather(res.data))
        yield localStorage.setItem(res.data.city_name + `-weatherBit`, JSON.stringify(res.data));
    } catch (err: any) {
        yield put(setError(err.message))
    }
}

export function* watchWeatherBit() {
    yield takeEvery(GET_WEATHERBIT, workerWeatherBit)
}