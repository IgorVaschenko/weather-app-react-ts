import { FC, useState, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import {
    getWeatherBit, setLoading, getOpenWeather,
    getWeatherPosition, setCurrentCity, setError
} from 'store/actions/weatherActions';

import { SearchForm, SearchInput, SearchButton } from 'containers/Search/components'

const Search: FC = () => {

    const dispatch = useDispatch()

    const source = useSelector((state: RootState) => state.weather.source)
    const beginCity = useSelector((state: RootState) => state.weather.data?.city ? state.weather.data?.city.name : state.weather.data?.city_name)

    const [city, setCity] = useState('')

    useEffect(() => {
        dispatch(setLoading())
        dispatch(getWeatherPosition())
    }, [])

    useEffect(() => {
        beginCity && setCity(beginCity)
    }, [beginCity])

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setLoading())
        dispatch(setCurrentCity(city))
        dispatch(setError(''))
        dispatch(source ? getOpenWeather() : getWeatherBit())
        setCity(city)
    }
    return (
        <SearchForm onSubmit={submitHandler}>
            <SearchInput
                placeholder='enter city'
                value={city}
                onChange={changeHandler}
            />
            <SearchButton>Search</SearchButton>
        </SearchForm>
    )
}

export default Search;


