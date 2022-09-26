import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid';

import OtherDay from 'containers/OtherDay';
import Today from 'containers/Today';
import { NUMDAY } from 'constants/days';

import { WeatherBlock, DownBlock } from 'components/WeekWeather/components'


const WeekWeather: FC = () => {
    return (
        <DownBlock>
            <WeatherBlock>
                <Today />
                {NUMDAY.map((_, i) => (
                    <OtherDay
                        key={uuidv4()}
                        index={i + 1}
                    />
                ))}
            </WeatherBlock>
        </DownBlock>
    )
}

export default WeekWeather