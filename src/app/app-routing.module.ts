import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'test', component:WeatherCardComponent},
  {path:'home', redirectTo:'', pathMatch:'full'},
  {path:'forecast', component:ForecastComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
