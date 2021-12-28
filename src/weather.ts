import request from "request"
import { WeatherResponse } from "./models/weather-response.js"

const getWeather = (lat:number, lng:number, callback: (error:any, response:WeatherResponse | undefined) => void) => {
    // VC: 49.260872,-123.113953
    const url = `http://api.weatherstack.com/current?access_key=a2474dd69700c1400ac9a157add9bc0b&query=${lat},${lng}`
    request({url: url}, (error, response) => {
        const data = JSON.parse(response.body);
        if(error) {
            callback("Failed to retrieve data from weather service", undefined)
        } else if(data.success === false) {
            callback("Failed to retrieve data from weather service", undefined)
        } else {
            const weather = new WeatherResponse(data.current.weather_descriptions[0], data.current.temperature, data.current.feelslike, data.current.precip, data.current.wind_speed, data.location.name, data.location.country)
            callback(undefined, weather)
        }
    })
}

export { getWeather }
