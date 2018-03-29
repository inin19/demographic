import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'app-my-tooltip',
  templateUrl: './my-tooltip.component.html',
  styleUrls: ['./my-tooltip.component.css']
})
export class MyTooltipComponent implements OnInit {


  @Input()
  myDatum: any;

  // Outputs work as well!
  @Output()
  update: EventEmitter<any>;

  constructor() { }

  ngOnInit() {
  }



}
