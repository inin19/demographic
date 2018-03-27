import { Component, OnInit } from '@angular/core';
import { DemographicService } from './service/demographic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private benchmarkDemographicData: any[];
  private proposalDemographicData: any[];


  constructor(private demographicService: DemographicService) { }

  ngOnInit() {
    this.fetchBenchmarkProposalDemograpic();
  }


  fetchBenchmarkProposalDemograpic(): void {
    this.demographicService.getBenchmarkProposalDemographicData()
      .subscribe(
        data => {
          this.benchmarkDemographicData = data[0];
          this.proposalDemographicData = data[1];
        }
      );
  }

}
