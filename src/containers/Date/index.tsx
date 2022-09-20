import { useSelector } from 'react-redux';

import { DAYS_WEEK, MONTHS } from 'constants/days';
import { getDateComponents } from 'helpers/getDateComponents';
import { timeZone } from 'helpers/timeZone';
import { RootState } from 'store';

import { DateBlock, DayToday, DateToday } from 'containers/Date/components';

const Date = () => {
    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timezoneBit = useSelector((state: RootState) => typeof(state.weather.data?.timezone) !== undefined ? state.weather.data?.timezone : 0) 

    const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * 3600    

    return (
        <DateBlock>
            <DayToday>{DAYS_WEEK[getDateComponents(timezoneSource).dayPerWeek]}</DayToday>
            <DateToday>{`, ${getDateComponents(timezoneSource).dateNow} ${MONTHS[getDateComponents(timezoneSource).month]} ${getDateComponents(timezoneSource).year}`}
            </DateToday>
        </DateBlock>
    );
}

export default Date;