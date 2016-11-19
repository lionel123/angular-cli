import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  pieChartType: string = 'pie';
  pieChartLabels:string[] = ['a', 'b', 'c'];
  pieChartData:number[];
  colors: any[] = [{ 
    backgroundColor: ["#27323A", "#336699", '#48BEFF'] 
  }];

  ngOnInit() {
    this.pieChartData = [2, 3, 4];
  }

  chartClicked(e:any):void {
    console.log('Chart Clicked!');
  }

  chartHovered(e:any):void {
    console.log('Chart Hovered');
  }
}
