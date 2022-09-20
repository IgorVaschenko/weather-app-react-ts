import { useState } from "react";
import { useDispatch } from "react-redux";

import { setSourceWeather, } from "store/actions/weatherActions";
import { setDegrees } from "store/actions/toggleActions";
import Toggle from "components/Toggle";

import { ToggleBlock } from 'containers/Toggles/components'

const Toggles = () => {

    const dispatch = useDispatch()

    const [degr, setDegr] = useState(false)
    const [source, setSource] = useState(false)

    const handlerSource = () => {
        dispatch(setSourceWeather(source))
        setSource(!source)
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