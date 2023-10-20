import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
