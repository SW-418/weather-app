export class GeocodeResponse {
    public latitude: number
    public longitude: number

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public getLatitude = (): number => { return this.latitude };
    public getLongitude = (): number => { return this.longitude };
}
