import { Component, OnInit } from "@angular/core";
import { ICurrentWeather } from "../interfaces";
import { WeatherService } from "../weather/weather.service";
import { AppModule } from "../app.module";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  getOrdinal(date: number){
    const n = new Date(date).getDate()
    return n > 0
      ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10 : ""]
  }

  constructor(private weatherService: WeatherService) {
    // this.current = {
    //   city: "Bethesda",
    //   country: "US",
    //   date: new Date(),
    //   image: "assets/img/sunny.svg",
    //   temperature: 72,
    //   description: "sunny"
    // } as ICurrentWeather;
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather("Abidjan", "CIV")
      .subscribe(data => (this.current = data));
  }
}
