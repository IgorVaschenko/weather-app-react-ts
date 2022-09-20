import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { regionName } from 'helpers/regionName'

import { RegionBlock, City, Country } from 'containers/Region/components'

const Region = () => {
    const city = useSelector((state: RootState) => state.weather.data?.city?.name)
    const cityBit = useSelector((state: RootState) => state.weather.data?.city_name)

    const country = useSelector((state: RootState) => state.weather.data?.city?.country) || ''
    const countryBit = useSelector((state: RootState) => state.weather.data?.country_code) || ''

    const countryCode = country ? country : countryBit
    const countryName = city ? city : cityBit

    return (
        <RegionBlock>
            <City>{countryName}</City>
            <Country>{regionName.of(countryCode)}</Country>
        </RegionBlock>
    );
}

export default Region;