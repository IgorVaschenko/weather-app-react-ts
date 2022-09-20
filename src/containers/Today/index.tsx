import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { degreeMeasure } from 'helpers/temperatureConverter'
import { actualDegrees } from 'helpers/actualDegrees'
import { getDateComponents } from 'helpers/getDateComponents'

import { WeatherToday, IconToday, WeatherInDay, DayWeekToday, DegreesToday } from 'containers/Today/components'

const Today = () => {

    const degrees = useSelector((state: RootState) => state.toggle.degrees)

    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timeIndex = Math.ceil(getDateComponents(timezone).hours / 3)

    const data = useSelector((state: RootState) => state.weather.data?.list ? state.weather.data?.list[timeIndex].main.temp : 0)
    const dataBit = useSelector((state: RootState) => state.weather.data?.data ? state.weather.data?.data[0] : '')

    const openIcon = useSelector((state: RootState) => state.weather.data?.list ? state.weather.data?.list[timeIndex].weather[0].icon : '')
    const iconToday = dataBit ? dataBit.weather.icon : openIcon || ''
    
    const degreesToday = dataBit ? degreeMeasure(degrees, dataBit.temp) : degreeMeasure(degrees, data) || ''

    return (
        <WeatherToday>
            <IconToday icon={iconToday} />
            <WeatherInDay>
                <DayWeekToday>TODAY</DayWeekToday>
                <DegreesToday>{actualDegrees(degreesToday)}&#xb0;</DegreesToday>
            </WeatherInDay>
        </WeatherToday>
    );
}


export default Today;