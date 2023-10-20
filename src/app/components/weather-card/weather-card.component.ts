import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  sampleData:any = {
    "queryCost": 1,
    "latitude": 28.6341,
    "longitude": 77.2169,
    "resolvedAddress": "Delhi, DL, India",
    "address": "delhi",
    "timezone": "Asia/Kolkata",
    "tzoffset": 5.5,
    "days": [
      {
        "datetime": "2023-10-20",
        "datetimeEpoch": 1697740200,
        "tempmax": 30.8,
        "tempmin": 20,
        "temp": 25.3,
        "feelslikemax": 29.1,
        "feelslikemin": 20,
        "feelslike": 24.8,
        "dew": 12.5,
        "humidity": 49,
        "precip": 0,
        "precipprob": 0,
        "precipcover": 0,
        "preciptype": null,
        "snow": 0,
        "snowdepth": 0,
        "windgust": 11.2,
        "windspeed": 11.2,
        "winddir": 306.9,
        "pressure": 1015.7,
        "cloudcover": 0,
        "visibility": 9.3,
        "solarradiation": 205.4,
        "solarenergy": 17.7,
        "uvindex": 7,
        "severerisk": 10,
        "sunrise": "06:24:39",
        "sunriseEpoch": 1697763279,
        "sunset": "17:47:00",
        "sunsetEpoch": 1697804220,
        "moonphase": 0.2,
        "conditions": "Clear",
        "description": "Clear conditions throughout the day.",
        "icon": "clear-day",
        "stations": [
          "VIDP",
          "remote"
        ],
        "source": "comb",
        "icon_url": "https://www.visualcrossing.com/img/clear-day.c5680783.svg"
      }
    ],
    "stations": {
      "VIDP": {
        "distance": 11858,
        "latitude": 28.57,
        "longitude": 77.12,
        "useCount": 0,
        "id": "VIDP",
        "name": "VIDP",
        "quality": 49,
        "contribution": 0
      }
    }
  }

  @Input() data:any;
  @Input() address:any;
}
