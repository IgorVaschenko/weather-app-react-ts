import { all } from 'redux-saga/effects'

import { watchGetWeatherByStartPosition } from 'saga/startPosition';
import { watchOpenWeather } from 'saga/openWeather';
import { watchWeatherBit } from 'saga/weatherBit';


export default function* rootSaga() {
    yield all([
        watchGetWeatherByStartPosition(),
        watchOpenWeather(),
        watchWeatherBit()
    ]);
} 