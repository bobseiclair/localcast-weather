import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { WeatherService } from "./weather/weather.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material";
// import { DomSanitizer } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
  //   matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  // }
}
