import { Component, OnInit,OnDestroy } from '@angular/core';
import { WinderService } from '@services/winder.service';
import { Dates } from '@models/date.model';
import { DatesService } from '@services/dates.service';
import { Subject } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.component.html',
  styleUrls: ['./chart6.component.scss']
})
export class Chart6Component implements OnInit,OnDestroy {
  chartTitle = 'Tension at Roll Change';
  winderData: any;
  winderData2: any = [];
  dataId: any;
  data1_1: any;
  data2_1: any;
  data1_2: any;
  data2_2: any;
  chart: any
  myChart: any;
  enableState: boolean;
  stateMessage: String;
  enableButton: any;
  selectedDate: Dates;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private winderService: WinderService,
    private datesService: DatesService
  ) { }

  ngOnInit(): void {
    this.fetchDate()
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  fetchDate() {
    this.datesService.data.subscribe(date => {
    this.selectedDate = date });
    this.winderData = this.winderService.getAlltensionRollChange(this.selectedDate)
    this.winderData.subscribe((dp) => {
    this.winderData2.push(dp.data)
      return this.createChart()
    })
  }
  createChart() {
    this.dataId = this.winderData2[0].map(film => { return film.rollId });
    this.data1_1 = this.winderData2[0].map(film => { return film.w1UnloadingP1 });
    this.data2_1 = this.winderData2[0].map(film => { return film.w2CuttingP1 });
    this.data1_2 = this.winderData2[0].map(film => { return film.w1UnloadingP2 });
    this.data2_2 = this.winderData2[0].map(film => { return film.w2CuttingP2 });
    Chart.register(...registerables);
    this.myChart = document.getElementById('chart6');
    this.enableButton = document.getElementById('enableButton6')
    this.chart = new Chart(this.myChart, {
      type: 'line',
      data: {
        labels: this.dataId,
        datasets: [
          {
            label: 'w1UnloadingP1',
            data: this.data1_1,
            borderColor: 'Blue',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: 'Blue'
          },
          {
            label: 'w2CuttingP1',
            data: this.data2_1,
            borderColor: '#007F5C',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#007F5C'
          },
          {
            label: 'w1UnloadingP2',
            data: this.data1_2,
            borderColor: '#272a3a',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#272a3a'
          },
          {
            label: 'w2CuttingP2',
            data: this.data2_2,
            borderColor: 'rgb(243, 181, 81)',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: 'rgb(243, 181, 81)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 10
              }
            }
          },
          x: {
            ticks: {
              font: {
                size: 10
              }
            }
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 10
              }
            }
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: false,
              },
              pinch: {
                enabled: false
              },
              mode: 'xy',
            },
            pan: {
              enabled: true
            },
          }
        }
      },
    })
    this.setState()
  }
  resetZoom() {
    this.chart.resetZoom();
  }

  setState() {
    this.enableState = this.chart.options.plugins.zoom.zoom.wheel.enabled;
    if (this.enableState) {
      return this.stateMessage = "On"
    } else {
      return this.stateMessage = "Off";
    }
  }

  enableZoom() {
    this.chart.options.plugins.zoom.zoom.wheel.enabled = !this.chart.options.plugins.zoom.zoom.wheel.enabled;
    this.setState();
    this.chart.update();
  }

}
