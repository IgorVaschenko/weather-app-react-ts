import { FC } from 'react'

import Control from 'containers/Control';
import WeekWeather from 'components/WeekWeather';

import { InsideBlockWrap, OutsideBlock } from 'components/InsideBlock/components';

interface InsideBlockProps {
    idWeather: number;
    timesOfDay: number;
}

const InsideBlock: FC<InsideBlockProps> = ({ idWeather, timesOfDay }) => {
    return (
        <OutsideBlock idWeather={idWeather} timesOfDay={timesOfDay}>
            <InsideBlockWrap>
                <Control />
                <WeekWeather />
            </InsideBlockWrap>
        </OutsideBlock>
    );
}

export default InsideBlock;