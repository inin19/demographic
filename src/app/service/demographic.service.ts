import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/forkJoin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append(
    'Cache-control',
    'no-cache'
  )
};



@Injectable()
export class DemographicService {

  // temp
  static UKAgeGroup = ['0-18', '19-25', '26-35', '36-45', '46-55', '56-60', '61-65', '66-70', '71-75', '76+'];


  // tslint:disable-next-line:max-line-length
  private benchmarkDemographicUrl = 'http://localhost:50001/bmservices/historicalData/getHistoricalBenchmarkData/ISO2_GB/' + DemographicService.UKAgeGroup.join(',');
  // tslint:disable-next-line:max-line-length
  private proposalDemographicUrl = 'http://localhost:50001/bmservices/historicalData/getHistoricalProposalData/1/' + DemographicService.UKAgeGroup.join(',');




  constructor(private http: HttpClient, injector: Injector) {
  }


  getBenchmarkDemographicData(): Observable<any> {
    const l: number = new Date().getMilliseconds();
    return this.http.get(this.benchmarkDemographicUrl + '?' + l, httpOptions);
  }


  getProposalkDemographicData(): Observable<any> {
    const l: number = new Date().getMilliseconds();
    return this.http.get(this.proposalDemographicUrl + '?' + l, httpOptions);
  }


  getBenchmarkProposalDemographicData(): Observable<Array<any>> {
    const l: number = new Date().getMilliseconds();
    return Observable.forkJoin(
      this.http.get(this.benchmarkDemographicUrl + '?' + l, httpOptions),
      this.http.get(this.proposalDemographicUrl + '?' + l, httpOptions)
    );
  }

}
