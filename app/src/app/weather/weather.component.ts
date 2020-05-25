import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../service/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  temp = '';
  cityName = '';
  isLoad = true;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {}
  
  public getWeather() {
    this.weatherService.getTemp(this.txtCityName)
        .then(temp=>{this.cityName = this.txtCityName, this.temp = temp, this.isLoad=false; this.txtCityName=''})
        .catch(err=>{console.log(err); alert("canot find your city"); this.isLoad=false; this.txtCityName=''});
  }
  

}
