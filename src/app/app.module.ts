import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { D3TooltipModule } from 'ngx-d3-tooltip';

import { HttpClientModule } from '@angular/common/http';

import { DemographicService } from './service/demographic.service';


import { AppComponent } from './app.component';
import { DemographicChartComponent } from './demographic-chart/demographic-chart.component';
import { MyTooltipComponent } from './my-tooltip/my-tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    DemographicChartComponent,
    MyTooltipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    D3TooltipModule
  ],
  providers: [DemographicService],
  bootstrap: [AppComponent],
  entryComponents: [
    MyTooltipComponent
  ]
})
export class AppModule { }
