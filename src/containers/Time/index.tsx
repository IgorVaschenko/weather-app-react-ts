import { useSelector } from 'react-redux';

import { getDateComponents } from 'helpers/getDateComponents';
import { timeZone } from 'helpers/timeZone';
import { RootState } from 'store';

import { TimeBlock, Timer } from 'containers/Time/components';

const Time = () => {
    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timezoneBit = useSelector((state: RootState) => typeof(state.weather.data?.timezone) !== undefined ? state.weather.data?.timezone : 0) 

    const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * 3600    

    return (
        <TimeBlock>
            <Timer>
                {getDateComponents(timezoneSource).hours}:
                {getDateComponents(timezoneSource).minutes < 10 
                ? `0${getDateComponents(timezoneSource).minutes}` 
                : getDateComponents(timezoneSource).minutes}
                </Timer>
        </TimeBlock>
    );
}

export default Time;