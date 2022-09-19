import { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { degreeMeasure } from 'helpers/temperatureConverter'
import { getDateComponents } from 'helpers/getDateComponents'
import { timeZone } from 'helpers/timeZone'
import { actualDegrees } from 'helpers/actualDegrees'
import { DAYS_WEEK } from 'constants/days'

import { WeatherNextDay, DayWeek, Icon, Degrees } from 'components/WeekWeather/OtherDay/components'

interface OtherDayProps {
    index: number;
}

const OtherDay: FC<OtherDayProps> = ({ index }) => {

    const degrees = useSelector((state: RootState) => state.toggle.degrees)

    const data = useSelector((state: RootState) => state.weather.data)
    const dataBit = useSelector((state: RootState) => state.weather.data?.data ? state.weather.data?.data[index] : '')

    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timeIndex = Math.ceil(getDateComponents(timezone).hours / 3)
    const timezoneBit = useSelector((state: RootState) => typeof (state.weather.data?.timezone) !== undefined ? state.weather.data?.timezone : 0)
    const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * 3600

    const iconXDay = dataBit ? dataBit.weather.icon : data?.list[index === 1 ?  index - timeIndex + 3 + 8 : index + 8].weather[0].icon || ''
    const degreesXDay = dataBit ? degreeMeasure(degrees, dataBit.temp) : degreeMeasure(degrees, data?.list[index === 1 ? index + 4 : index + 8].main.temp) || ''

    return (
        <WeatherNextDay>
            <DayWeek>{DAYS_WEEK[getDateComponents(timezoneSource).dayPerWeek +  index ].slice(0, 3).toLocaleUpperCase()}</DayWeek>
            <Icon icon={iconXDay} />
            <Degrees>{actualDegrees(degreesXDay)}&#xb0;</Degrees>
        </WeatherNextDay>
    );
}

export default OtherDay;