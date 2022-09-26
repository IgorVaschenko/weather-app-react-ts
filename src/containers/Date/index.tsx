import { useSelector } from 'react-redux';

import { DAYS_WEEK, HOURS_IN_SECONDS, MONTHS } from 'constants/days';
import { getDateComponents } from 'helpers/getDateComponents';
import { timeZone } from 'helpers/timeZone';
import { RootState } from 'store';

import { DateBlock, DayToday, DateToday } from 'containers/Date/components';

const Date = () => {
    const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
    const timezoneBit = useSelector((state: RootState) => typeof(!!state.weather.data?.timezone) ? state.weather.data?.timezone : 0) 

    const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * HOURS_IN_SECONDS    

    return (
        <DateBlock>
            <DayToday>{DAYS_WEEK[getDateComponents(timezoneSource).dayPerWeek]}&nbsp;</DayToday>
            <DateToday>{`${getDateComponents(timezoneSource).dateNow} ${MONTHS[getDateComponents(timezoneSource).month]} ${getDateComponents(timezoneSource).year}`}
            </DateToday>
        </DateBlock>
    );
}

export default Date;