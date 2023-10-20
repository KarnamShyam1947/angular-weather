import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  result:any;
  error:any;

  constructor(
    private weatherService:WeatherService
  ) { }

  weatherForm = new FormGroup({
    city : new FormControl('', Validators.required),
  });

  getWeather() {
    this.result = null;
    this.error = null;

    console.log(this.weatherForm.value['city']);
    this.weatherService.getCurrentWeather(this.weatherForm.value['city']).subscribe(
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
