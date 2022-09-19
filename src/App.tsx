import { useSelector } from 'react-redux'

import { RootState } from "store";
import InsideBlock from "components/InsideBlock";
import { getDateComponents } from "helpers/getDateComponents";
import GlobalStyles from "theme/globalStyles";

const App = () => {

  const timezone = useSelector((state: RootState) => state.weather.data?.city?.timezone) || 0
  const timeIndex = Math.ceil(getDateComponents(timezone).hours / 3)

  const idWeatherOpen = useSelector((state: RootState) => state.weather.data?.list ? state.weather.data?.list[timeIndex].weather[0].id : null) || 0
  const idWeatherBit = useSelector((state: RootState) => state.weather.data?.data ? state.weather.data?.data[0].weather.code : null)

  const actualBgWeather = idWeatherOpen ? idWeatherOpen : idWeatherBit || 0

  return (
    <>
      <InsideBlock idWeather={actualBgWeather} />
      <GlobalStyles />
    </>
  );
}

export default App;
