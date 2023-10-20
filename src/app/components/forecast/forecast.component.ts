import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  result:any;
  error:any;

  constructor(
    private weatherService:WeatherService
  ) { }

  weatherForm = new FormGroup({
    city : new FormControl('', Validators.required),
    days : new FormControl('15', Validators.required),
  });

  getWeather() {
    this.result = null;
    this.error = null;

    console.log(this.weatherForm.value['city']);
    this.weatherService.getWeatherForecast(this.weatherForm.value['city'], this.weatherForm.value['days']).subscribe(
      res => {
        console.log(res);
        this.result = res;
      },
      err => {
        console.log(err);
        this.error = true;
      }
    )
  }
}
