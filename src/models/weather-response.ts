export class WeatherResponse {
    weatherConditions: string
    temperature: number
    temperatureFeelsLike: number
    chanceOfPrecipitation: number

    constructor(weatherConditions: string, temperature: number, temperatureFeelsLike: number, chanceOfPrecipitation: number) {
        this.weatherConditions = weatherConditions
        this.temperature = temperature
        this.temperatureFeelsLike = temperatureFeelsLike
        this.chanceOfPrecipitation = chanceOfPrecipitation
    }
}
