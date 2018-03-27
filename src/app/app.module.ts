import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { DemographicService } from './service/demographic.service';


import { AppComponent } from './app.component';
import { DemographicChartComponent } from './demographic-chart/demographic-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DemographicChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DemographicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
