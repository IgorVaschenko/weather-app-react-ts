import { FC } from 'react'

import Control from 'containers/Control';
import WeekWeather from 'components/WeekWeather';
import SignIn from 'containers/SignIn';

import { InsideBlockWrap, OutsideBlock } from 'components/InsideBlock/components';

const InsideBlock: FC = () => {
    return (
        <OutsideBlock>
            <InsideBlockWrap>
                <SignIn />
                <Control />
                <WeekWeather />
            </InsideBlockWrap>
        </OutsideBlock>
    );
}

export default InsideBlock;