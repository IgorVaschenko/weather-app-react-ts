import { useSelector } from 'react-redux'

import { RootState } from "store";
import InsideBlock from "components/InsideBlock";
import { getDateComponents } from "helpers/getDateComponents";
import { timeZone } from 'helpers/timeZone';
import { HOURS_IN_SECONDS } from 'constants/days'

import GlobalStyles from "theme/globalStyles";

const App = () => {

  const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
  const timezoneBit = useSelector((state: RootState) => state.weather.data?.timezone )
  console.log('timezoneBit', timezoneBit);
  const timezoneSource = timezone ? timezone : timeZone(timezoneBit) * HOURS_IN_SECONDS

  const idWeatherOpen = useSelector((state: RootState) => state.weather.data?.list ? state.weather.data?.list[0].weather[0].id : null) || 0
  const idWeatherBit = useSelector((state: RootState) => state.weather.data?.data ? state.weather.data?.data[0].weather.code : null)

  const actualBgWeather = idWeatherOpen ? idWeatherOpen : idWeatherBit || 0

  return (
    <>
      <InsideBlock />
      <GlobalStyles idWeather={actualBgWeather} timesOfDay={getDateComponents(timezoneSource).hours} />
    </>
  );
}

export default App;
