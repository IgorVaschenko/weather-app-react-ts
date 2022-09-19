import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { WeatherBlock, DownBlock } from 'components/WeekWeather/components'
import OtherDay from 'components/WeekWeather/OtherDay';
import Today from 'components/WeekWeather/Today';

const WeekWeather: FC = () => {
    return (
        <DownBlock>
            <WeatherBlock>
                <Today />
                {[0, 1, 2, 3, 4, 5].map((day, i) => (
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