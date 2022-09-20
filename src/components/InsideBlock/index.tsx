import { FC } from 'react'

import Control from 'containers/Control';
import WeekWeather from 'components/WeekWeather';

import { InsideBlockWrap } from 'components/InsideBlock/components';

interface InsideBlockProps {
    idWeather: number;
}

const InsideBlock: FC<InsideBlockProps> = ({ idWeather }) => {
    return (
        <InsideBlockWrap idWeather={idWeather}>
            <Control />
            <WeekWeather />
        </InsideBlockWrap>
    );
}

export default InsideBlock;