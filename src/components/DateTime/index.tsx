import Date from 'containers/Date';
import Time from 'containers/Time';

import { DateTimeBlock } from 'components/DateTime/components';

const DateTime = () => {

    return (
        <DateTimeBlock>
            <Time />
            <Date />
        </DateTimeBlock>
    );
}

export default DateTime;