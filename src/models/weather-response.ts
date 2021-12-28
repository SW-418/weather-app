export class WeatherResponse {
    weatherConditions: string
    temperature: number
    temperatureFeelsLike: number
    chanceOfPrecipitation: number
    windSpeed: number
    location: string
    country: string

    constructor(weatherConditions: string, temperature: number, temperatureFeelsLike: number, chanceOfPrecipitation: number, windSpeed: number, location: string, country: string) {
        this.weatherConditions = weatherConditions
        this.temperature = temperature
        this.temperatureFeelsLike = temperatureFeelsLike
        this.chanceOfPrecipitation = chanceOfPrecipitation
        this.windSpeed = windSpeed
        this.location = location
        this.country = country
    }
}
