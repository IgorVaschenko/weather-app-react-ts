import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { HOURS_IN_SECONDS, MS_IN_SECOND } from 'constants/days';
import { getDateComponents } from 'helpers/getDateComponents';
import { timeZone } from 'helpers/timeZone';
import { RootState } from 'store';

import { TimeBlock, Timer } from 'containers/Time/components';

const Time = () => {

    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timezoneBit = useSelector((state: RootState) => typeof (!!state.weather.data?.timezone) ? state.weather.data?.timezone : 0)

    const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * HOURS_IN_SECONDS

    const [clock, setClock] = useState<string>(getDateComponents(timezoneSource).date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const clock = setInterval(
            (): void => setClock(getDateComponents(timezoneSource).date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
            MS_IN_SECOND
        );
        return () => {
            clearInterval(clock);
        };
    }, [timezoneSource]);
    return (
        <TimeBlock>
            <Timer>
                {clock}
            </Timer>
        </TimeBlock>
    );
}

export default Time;