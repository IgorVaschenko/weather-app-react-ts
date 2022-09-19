import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { countries } from 'constants/countries'

import { RegionBlock, City, Country } from 'components/Region/components'

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
            <Country>{countries[countryCode]}</Country>
        </RegionBlock>
    );
}

export default Region;