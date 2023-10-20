import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http:HttpClient
  ) { }

  baseUrl = "https://weather2004.pythonanywhere.com/weather-api/"

  getCurrentWeather(city:any) {
    let url = `${this.baseUrl}current/${city}`;
    return this.http.get(url);
  }
  
  getWeatherForecast(city:any, days:any) {
    let url = `${this.baseUrl}forecast/${city}?days=${days}`;
    return this.http.get(url);
  }
}
