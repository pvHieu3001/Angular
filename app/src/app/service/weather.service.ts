import {Injectable} from '@angular/core'
import { Http } from '@angular/http';

@Injectable()

export class WeatherService{
    constructor(private http:Http){}

    getTemp(cityName:String){
        const url = "http://api.openweathermap.org/data/2.5/weather?appid=6fccd6f0647963d62f127caa3b6022a8&q="+cityName;
        return this.http.get(url)
                    .toPromise()
                    .then(res=>res.json())
                    .then(resJson=>resJson.main.temp)
    }
}