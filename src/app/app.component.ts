import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  template: `
    <mat-toolbar color="primary">
    {{title}}
    </mat-toolbar>
    <br>
    <div fxLayoutAlign="center">
      <div class="mat-title mat-typography">
        <h1>Ta ville, sa météo, maintenant !</h1>
      </div>
    </div>
    <div fxLayout="row" color="primary">
      <div fxFlex></div>
        <mat-card fxFlex="300px">
          <mat-card-header class="mat-typography">  
            <mat-card-title>
              <div class="mat-title">
              la Météo Actuelle
              
              </div>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
      <div fxFlex></div>
    </div>
    `
})
export class AppComponent {
  title = "La Météo Locale";
}
