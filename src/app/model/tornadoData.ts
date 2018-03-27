import * as d3 from 'd3';
import * as crossfilter from 'crossfilter2';

export class TornadoChartData {

    static FEMALE = 'F';
    static MALE = 'M';


    static REGION = 'region';
    static RELATION = 'relation';
    static AGEGROUP = 'ageGroup';
    static GENDER = 'gender';

    static UKAgeGroup = ['0-18', '19-25', '26-35', '36-45', '46-55', '56-60', '61-65', '66-70', '71-75', '76+'];

    private ndx: crossfilter.Crossfilter<any>;


    // Dimensions
    private relationDimension: any;
    private regionDimension: any;
    private genderDimension: any;

    private graphDimension: any;


    // Groups
    private graphDimensionGroup: any;
    private genderDimensionGroup: any;


    // Output
    private graphData: Array<any>;
    private demographicAggregateData: any;
    private femaleMemberCount: number;
    private maleMemberCount: number;
    private maxPercentage: number;



    constructor(data: Array<any>) {
        this.createDimentionGroup(data);
        this.processGraphData(data);

        // this.processGraphData(data, ['South'], ['EMPLOYEE']);

        // this.demographicAggregateData.forEach(element => {
        //     console.log(element.key, element.value, element.genderTotal, element.percentage);
        // });

        // console.log(this.maxPercentage);

    }



    createDimentionGroup(data: Array<any>) {
        this.ndx = crossfilter(data);

        this.regionDimension = this.ndx.dimension((d) => d.region);
        this.relationDimension = this.ndx.dimension((d) => d.relation);
        this.genderDimension = this.ndx.dimension((d) => d.gender);


        this.graphDimension = this.ndx.dimension((d) => JSON.stringify({
            // 'region': d.region,
            // 'relation': d.relation,
            'ageGroup': d.ageGroup,
            'gender': d.gender
        }));


        this.graphDimensionGroup = this.graphDimension.group();
        this.genderDimensionGroup = this.genderDimension.group();

        this.graphDimensionGroup.all().forEach(function (d) {
            d.key = JSON.parse(d.key);
        });


    }

    processGraphData(data: Array<any>, regions?: Array<string>, relation?: Array<string>) {

        if (regions) {
            this.regionDimension.filter((d) => regions.indexOf(d) !== -1);
        } else {
            this.regionDimension.filterAll();
        }

        if (relation) {
            this.relationDimension.filter((d) => relation.indexOf(d) !== -1);
        } else {
            this.relationDimension.filterAll();
        }

        this.demographicAggregateData = this.graphDimensionGroup.reduceSum((d) => d.memberCount).all();


        // begin to calculate F/M percentage

        // assign member count for female and male
        this.genderDimensionGroup.reduceSum((d) => d.memberCount).all().forEach(element => {
            if (element.key === TornadoChartData.FEMALE) {
                this.femaleMemberCount = element.value;
            }
            if (element.key === TornadoChartData.MALE) {
                this.maleMemberCount = element.value;
            }
        });


        this.graphData = this.demographicAggregateData;



        this.graphData.forEach(element => {
            if (element.key.gender === TornadoChartData.FEMALE) {
                element.genderTotal = this.femaleMemberCount;
                element.percentage = element.value / element.genderTotal;
                element.percentage = - element.percentage;
            } else {
                element.genderTotal = this.maleMemberCount;
                element.percentage = element.value / element.genderTotal;

            }
        });


        this.maxPercentage = d3.max(this.graphData, (d) => Math.abs(d.percentage));

    }



    getGraphData(): any {
        return this.graphData;
    }

    getMaxPercentage(): any {
        return this.maxPercentage;
    }
}
