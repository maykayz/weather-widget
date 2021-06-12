import axios from "axios";

const API_KEY = "567fb009055f8d8fddf69948130c088f";

export default {
    fetchCurrentWeather: ({ query }) =>
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
        ),
    fetchWeatherForecast: ({ lat, lon }) =>
        axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely,current&appid=${API_KEY}`
        ),
};
