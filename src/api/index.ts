import axios from "axios";

export const getOpenWeather = async (city: string) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`);
    return res
}

export const getWeatherBit = async (city: string) => {
    const res = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.REACT_APP_API_KEY_WEATHERBIT}`);
    return res
}

export const getPosition = async () => {
    const res = await axios.get(`https://ipinfo.io/?token=${process.env.REACT_APP_API_KEY_IPINFO}`);
    return res
}