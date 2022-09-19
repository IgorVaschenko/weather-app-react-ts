import { FC, useState, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { getWeatherBit, getWeatherByPosition, setLoading, getOpenWeather } from 'store/actions/weatherActions';

import { SearchForm, SearchInput, SearchButton } from 'components/Search/components'

const Search: FC = () => {

    const dispatch = useDispatch()

    const source = useSelector((state: RootState) => state.weather.source)
    const beginCity = useSelector((state: RootState) => state.weather.data?.city ? state.weather.data?.city.name : state.weather.data?.city_name)

    const [city, setCity] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => dispatch(getWeatherByPosition(position.coords.latitude, position.coords.longitude)))
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
        dispatch(source ? getOpenWeather(city) : getWeatherBit(city))
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


