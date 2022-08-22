import { Component, OnInit,OnDestroy } from '@angular/core';
import { WinderService } from '@services/winder.service';
import { Dates } from '@models/date.model';
import { DatesService } from '@services/dates.service';
import { Subject } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.scss']
})
export class Chart5Component implements OnInit,OnDestroy {
  chartTitle = 'Pressure Settings';
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
    this.winderData = this.winderService.getAlltensionPressureSettings(this.selectedDate)
    this.winderData.subscribe((dp) => {
    this.winderData2.push(dp.data)
      return this.createChart()
    })
  }
  createChart() {
    this.dataId = this.winderData2[0].map(film => { return film.rollId });
    this.data1_1 = this.winderData2[0].map(film => { return film.w1TensionP1 });
    this.data2_1 = this.winderData2[0].map(film => { return film.w2TensionP1 });
    this.data1_2 = this.winderData2[0].map(film => { return film.w1TensionP2 });
    this.data2_2 = this.winderData2[0].map(film => { return film.w2TensionP2 });
    Chart.register(...registerables);
    this.myChart = document.getElementById('chart5');
    this.enableButton = document.getElementById('enableButton5')
    this.chart = new Chart(this.myChart, {
      type: 'line',
      data: {
        labels: this.dataId,
        datasets: [
          {
            label: 'w1TensionP1',
            data: this.data1_1,
            borderColor: '#c0ff0c',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#c0ff0c'
          },
          {
            label: 'w2TensionP1',
            data: this.data2_1,
            borderColor: '#8a2be0',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#8a2be0'
          },
          {
            label: 'w1TensionP2',
            data: this.data1_2,
            borderColor: '#272a3a',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#272a3a'
          },
          {
            label: 'w2TensionP2',
            data: this.data2_2,
            borderColor: '#004141',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#004141'
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
