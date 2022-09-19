import { DateTimeBlock } from 'components/DateTime/components';
import Date from 'components/DateTime/Date';
import Time from 'components/DateTime/Time';

const DateTime = () => {

    return (
        <DateTimeBlock>
            <Time />
            <Date />
        </DateTimeBlock>
    );
}

export default DateTime;