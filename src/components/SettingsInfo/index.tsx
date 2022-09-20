import Toggles from 'containers/Toggles';
import Info from 'components/Info';

import { WeatherCityBlock } from 'components/SettingsInfo/components'

const SettingsInfo = () => {
    return (
        <WeatherCityBlock>
            <Toggles />
            <Info />
        </WeatherCityBlock>
    );
}

export default SettingsInfo;