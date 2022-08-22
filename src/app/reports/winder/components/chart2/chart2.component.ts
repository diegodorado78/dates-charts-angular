import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WinderService } from '@services/winder.service';
import { Dates } from '@models/date.model';
import { DatesService } from '@services/dates.service';
import { Subject } from 'rxjs';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit, OnDestroy {
  public chartTitle = "Tension Control";
  winderData: any;
  winderData2: any = [];
  data1: any;
  data2: any;
  data3: any;
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
    this.winderData = this.winderService.getAllTensionControl(this.selectedDate)
    this.winderData.subscribe((dp) => {
    this.winderData2.push(dp.data)
      return this.createChart()
    })
  }

  createChart() {
    this.data1 = this.winderData2[0].map(film => { return film.rollId });
    this.data2 = this.winderData2[0].map(film => { return film.setPoint });
    this.data3 = this.winderData2[0].map(film => { return film.actual });

    Chart.register(...registerables);
    this.myChart = document.getElementById('chart2');
    this.enableButton = document.getElementById('enableButton2')
    this.chart = new Chart(this.myChart, {
      type: 'line',
      data: {
        labels: this.data1,
        datasets: [
          {
            label: 'Set Point',
            data: this.data2,
            borderColor: 'rgba(34,139,34, 1)',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: 'rgba(34,139,34, 0.8)'
          },
          {
            label: 'Actual',
            data: this.data3,
            borderColor: 'rgba(0, 0, 120, 0.7)',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: 'rgba(0, 0, 139, 1)'
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
