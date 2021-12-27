import request from 'request';
import { geocode } from './geocode.js';
import { GeocodeResponse } from './models/geocode-response.js';
import { WeatherResponse } from './models/weather-response.js';
import { getWeather } from './weather.js';

const location = process?.argv[2]

if (!location) {
    console.log("Location not provided, please provide a location (City Name) as a command line argument.")
} else {
    console.log(`Requested Location: ${location}`)
    geocode(location, (error: any, response: request.Response | undefined) => {
        if (error) {
            return console.error("Failed to retrieve data from geocoding service")
        }
        const data = JSON.parse(response?.body);
        const geoResponse = new GeocodeResponse(data.features[0].center[1], data.features[0].center[0]);

        // Get Weather
        getWeather(geoResponse.getLatitude(), geoResponse.getLongitude(), (error: any, response: WeatherResponse | undefined) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(`The weather is currently ${response?.weatherConditions}.`)
                console.log(`The current temperature is ${response?.temperature}, but it feels like ${response?.temperatureFeelsLike}`)
                console.log(`There is a ${response?.chanceOfPrecipitation}% chance of rain`)
            }
        })

    })
}
