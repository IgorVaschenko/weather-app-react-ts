import weatherReducer from 'store/reducers/weatherReducer'
import { setCurrentCity, setError, setLoading, setSourceWeather } from 'store/actions/weatherActions'

import toggleTemperatureReducer from 'store/reducers/toggleTemperatureReducer'
import { setDegrees } from 'store/actions/toggleActions'

const initialState = {
    data: null,
    loading: false,
    error: '',
    degrees: true,
    source: true,
    city: '',
}
describe('weatherReducer', () => {
    test('setLoading', () => {
        expect(weatherReducer(initialState, setLoading())).toEqual({ ...initialState, loading: true })
    })
    test('setError', () => {
        expect(weatherReducer(initialState, setError('error message'))).toEqual({ ...initialState, loading: false, data: null, error: 'error message' })
    })
    test('setSourceWeather', () => {
        expect(weatherReducer(initialState, setSourceWeather(true))).toEqual({ ...initialState, source: true })
    })
    test('setCurrentCity', () => {
        expect(weatherReducer(initialState, setCurrentCity('London'))).toEqual({ ...initialState, city: 'London' })
    })
})


describe('toggleTemperatureReducer', () => {
    test('set Degrees', () => {
        expect(toggleTemperatureReducer({ degrees: true }, setDegrees(false))).toEqual({ degrees: false })
    })
})