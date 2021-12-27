import express from "express";
import path from 'path'
import hbs from 'hbs'
import { geocode } from "./geocode.js";
import { GeocodeResponse } from "./models/geocode-response.js";
import request from "request";
import { getWeather } from "./weather.js";
import { WeatherResponse } from "./models/weather-response.js";

const app = express()

app.use(express.static(`${path.resolve()}/dist`))

app.set("views", `${path.resolve()}/templates/views`)
app.set('view engine', 'hbs')

hbs.registerPartials(`${path.resolve()}/templates/partials`)

app.get('', (req: express.Request, res: any) =>{
    res.render('index', {
        title: "Weather App",
        name: "Sam W."
    })
})

app.get('/about', (req: express.Request, res: any) =>{
    res.render('about', {
        title: "About Me",
        name: "Sam W."
    })
})

app.get('/help', (req: express.Request, res: any) =>{
    res.render('help', {
        title: "Help",
        name: "Sam W."
    })
})

app.get('/help/*', (req: express.Request, res: any) =>{
    res.render("error", {
        title: "Help",
        name: "Sam W.",
        errorMessage: "Help article not found"
    });
})

app.get('/weather', (req: express.Request, res: any) =>{
    const location = req?.query?.location
    if(!location) { 
        return res.send({
            error: "Must provide location"
        })
    }

    geocode(location as string, (error: any, response: request.Response | undefined) => {
        if (error) {
            return res.send({
                error: "Failed to Geocode location",
                service: "Geocode API"
            })
        }
        const data = JSON.parse(response?.body);
        const geoResponse = new GeocodeResponse(data?.features[0]?.center[1], data?.features[0]?.center[0]);

        // Get Weather
        getWeather(geoResponse.getLatitude(), geoResponse.getLongitude(), (error: any, response: WeatherResponse | undefined) => {
            if (error) {
                return res.send({
                    error: error,
                    service: "Weather API"
                })
            }
            else {
                res.send({
                    location: location,
                    forecast: response?.weatherConditions,
                    temperature: response?.temperature,
                    temperatureFeelsLike: response?.temperatureFeelsLike,
                    chanceOfPrecipitation: response?.chanceOfPrecipitation

                })
            }
        })

    })
})

app.get('/products', (req: express.Request, res: any) =>{
    if(!req.query.search) { 
        return res.send({
            error: "Search term must be provided"
        })    
    }
    console.log(req.query.search)  

    res.send({
        products: []
    })
})

app.get('*', (req: express.Request, res: any) =>{
    res.render("error", {
        title: "404",
        name: "Sam W.",
        errorMessage: "Page not found"
    });
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
