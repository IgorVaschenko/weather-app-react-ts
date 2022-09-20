import DateTime from 'components/DateTime';
import Search from 'containers/Search/Search';
import Region from 'containers/Region';

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