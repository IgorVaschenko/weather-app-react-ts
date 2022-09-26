import { timeZone } from 'helpers/timeZone';
import { actualDegrees } from 'helpers/actualDegrees';
import { degreeMeasure } from 'helpers/temperatureConverter';
import { noonDay } from 'helpers/noonDay';
import { getDateNow } from 'helpers/getDateNow';
import { getTimeNow } from 'helpers/getTimeNow';

const date = new Date()

describe('actualDegrees', () => {
    test('positive value', () => {
        expect(actualDegrees('25')).toEqual('+25')
    })
    test('negative value', () => {
        expect(actualDegrees('-25')).toEqual('-25')
    })
})

describe('timeZone', () => {
    test('timeZone', () => {
        expect(timeZone()).toEqual(3)
    })
})


describe('degree Measure', () => {
    test('celsius', () => {
        expect(degreeMeasure(true, 10)).toEqual('+10')
    })
    test('fahrenheit', () => {
        expect(degreeMeasure(false, 10)).toEqual('+50')
    })
})

describe('noonDay', () => {
    test('current', () => {
        expect(noonDay(3, 3)).toEqual(26)
    })
    test('more', () => {
        expect(noonDay(3, 15)).toEqual(30)
    })
})

describe('getDateNow', () => {
    test('Date Now', () => {
        expect(getDateNow()).toEqual(date.getDate())
    })
})

describe('getTimeNow', () => {
    test('Time Now', () => {
        expect(getTimeNow()).toEqual(`${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`)
    })
})
