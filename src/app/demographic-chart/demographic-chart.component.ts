import { Component, OnInit, Input, ViewEncapsulation, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { TornadoChartData } from '../model/tornadoData';

@Component({
  selector: 'app-demographic-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './demographic-chart.component.html',
  styleUrls: ['./demographic-chart.component.css']
})
export class DemographicChartComponent implements OnInit, OnChanges {

  @Input() private proposalDemographicJson: any[];
  @Input() private benchmarkDemographicJson: any[];


  @ViewChild('proposalDemographic') private proposalDemoChartContainer: ElementRef;
  @ViewChild('benchmarkDemographic') private benchmarkDemoChartContainer: ElementRef;

  private proposalChartData: TornadoChartData;
  private proposalgraphData: Array<any>;

  private benchmarkChartData: TornadoChartData;
  private benchmarkgraphData: Array<any>;

  private graphDataCombined: Array<any>;
  private maxPercentage: number;


  // chart element

  private margin: any = { top: 20, right: 20, bottom: 30, left: 20 };
  private chart_1: any;
  private width_1: number;
  private height_1: number;

  private xScale_1: any;
  private yScale_1: any;
  private yInnerScale_1: any;
  private xAxis_1: any;
  private yAxis_1: any;
  private svg_1: any;



  constructor() { }

  ngOnInit() {
    this.updateChartData();
    this.proposalgraphData.forEach(element => {
      console.log(element);
    });


  }

  ngOnChanges() {

  }

  updateChartData() {
    this.proposalChartData = new TornadoChartData(this.proposalDemographicJson);
    this.proposalgraphData = this.proposalChartData.getGraphData();

    this.benchmarkChartData = new TornadoChartData(this.benchmarkDemographicJson);
    this.benchmarkgraphData = this.benchmarkChartData.getGraphData();

    // // for combined
    // this.proposalgraphData.forEach(el => el.source = 'proposal');
    // this.benchmarkgraphData.forEach(el => el.source = 'benchmark');
    // this.graphDataCombined = this.benchmarkgraphData.concat(this.proposalgraphData);

  }

}
