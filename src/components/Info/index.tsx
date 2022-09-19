import DateTime from 'components/DateTime';
import Search from 'components/Search/Search';
import Region from 'components/Region';

import { WrapperRegion } from 'components/Info/components'

const Info = () => {
    return (
        <WrapperRegion>
            <DateTime />
            <Search />
            <Region />
        </WrapperRegion>
    );
}

export default Info;