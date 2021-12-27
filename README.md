## Weather App (CLI)

Takes in a City via the command line. Uses [Mapboxes' Geocoding API](https://docs.mapbox.com/help/getting-started/geocoding/) to retrieve Lat/Lng and uses this response to call [WeatherStack API](https://weatherstack.com/) to retrieve current weather conditions in the provided city.

Created to understand and play with making API calls using TS/Node as well as callback methods  

## Commands

`tsc && node dist/app.js {city}` to retrieve weather stats for a given city

e.g. `tsc && node dist/app.js Vancouver` to retrieve the weather for Vancouver, BC
