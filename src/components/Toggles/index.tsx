import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSourceWeather, getWeatherBit, getOpenWeather } from "store/actions/weatherActions";
import { setDegrees } from "store/actions/toggleActions";
import { RootState } from "store";
import Toggle from "components/Toggle";

import { ToggleBlock } from 'components/Toggles/components'

const Toggles = () => {

    const dispatch = useDispatch()

    const sourceWeather = useSelector((state: RootState) => state.weather.source)
    const city = useSelector((state: RootState) => state.weather.data?.city ? state.weather.data?.city.name : state.weather.data?.city_name) || ''

    const [degr, setDegr] = useState(false)
    const [source, setSource] = useState(false)

    const handlerSource = () => {
        dispatch(setSourceWeather(source))
        setSource(!source)
        dispatch(sourceWeather ? getOpenWeather(city) : getWeatherBit(city))
    }

    const handlerDegrees = () => {
        setDegr(!degr)
        dispatch(setDegrees(degr))
    }

    return (
        <ToggleBlock >
            <Toggle
                nameLeft='Openweather'
                nameRight='WeatherBit'
                pointer={source}
                onClick={handlerSource}
            />
            <Toggle
                onClick={handlerDegrees}
                nameLeft='C &#xb0;'
                nameRight='F &#xb0;'
                pointer={degr}
            />
        </ToggleBlock>
    );
}

export default Toggles;