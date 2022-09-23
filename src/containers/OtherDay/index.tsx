import { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { degreeMeasure } from 'helpers/temperatureConverter'
import { getDateComponents } from 'helpers/getDateComponents'
import { timeZone } from 'helpers/timeZone'
import { actualDegrees } from 'helpers/actualDegrees'
import { noonDay } from 'helpers/noonDay'
import { DAYS_WEEK, HOURS_IN_SECONDS, HOURS_REQUEST } from 'constants/days'

import { WeatherNextDay, DayWeek, Icon, Degrees } from 'containers/OtherDay/components'

interface OtherDayProps {
    index: number;
}

const OtherDay: FC<OtherDayProps> = ({ index }) => {

    const degrees = useSelector((state: RootState) => state.toggle.degrees)

    const data = useSelector((state: RootState) => state.weather.data)
    const dataBit = useSelector((state: RootState) => state.weather.data?.data ? state.weather.data?.data[index] : '')

    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timeIndex = Math.ceil(getDateComponents(timezone).hours / HOURS_REQUEST)

    const timezoneBit = useSelector((state: RootState) => typeof (state.weather.data?.timezone) !== undefined ? state.weather.data?.timezone : 0)

    const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * HOURS_IN_SECONDS

    const iconXDay = dataBit ? dataBit.weather.icon : data?.list[noonDay(timeIndex, index)].weather[0].icon || ''
    const degreesXDay = dataBit ? degreeMeasure(degrees, dataBit.temp) : degreeMeasure(degrees, data?.list[noonDay(timeIndex, index)].main.temp) || ''

    return (
        <WeatherNextDay>
            <DayWeek>{DAYS_WEEK[getDateComponents(timezoneSource).dayPerWeek + index].slice(0, 3).toLocaleUpperCase()}</DayWeek>
            <Icon icon={iconXDay} />
            <Degrees>{actualDegrees(degreesXDay)}&#xb0;</Degrees>
        </WeatherNextDay>
    );
}

export default OtherDay;