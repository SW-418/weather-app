import request from "request"
import { GeocodeResponse } from "./models/geocode-response.js"

const geocode = (location: string, callback: (error: any, response: request.Response | undefined) => void) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiY2FsbG1lZGVleiIsImEiOiJja3hrd3V0ZmEwbGYzMnBtd21mbzV3YWw0In0.zRwHdm-xPP0gMcH-NmrUUQ&Limit=1`;
    request({ url: url }, (error, response) => {
        if(error) {
            callback("Failed to retrieve data from geocoding service", undefined);
        } else if (response.statusCode === 404){
            callback("Couldn't find locataion", undefined);
        } else {
            callback(undefined, response)
        }
    })
}

export { geocode }
