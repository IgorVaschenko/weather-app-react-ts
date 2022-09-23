import { useState } from "react";
import { useDispatch } from "react-redux";

import { setSourceWeather, } from "store/actions/weatherActions";
import { setDegrees } from "store/actions/toggleActions";
import Toggle from "components/Toggle";
import { FIRST_WEATHER_SOURCE, SECOND_WEATHER_SOURCE } from "constants/days";

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
                nameLeft={FIRST_WEATHER_SOURCE}
                nameRight={SECOND_WEATHER_SOURCE}
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