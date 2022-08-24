import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DieService } from '@services/die.service';
import { Dates } from '@models/date.model';
import { DatesService } from '@services/dates.service';
import { Subject } from 'rxjs';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  public chartTitle = "Adapter 3";
  dieData: any;
  dieData2: any = [];
  data1: any;
  data2: any;
  data3: any;
  chart: any
  myChart: any;
  enableState: boolean;
  stateMessage: String;
  enableButton: any;
  dieDataSource$: any
  selectedDate: Dates;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private dieService: DieService,
    private datesService: DatesService) { }
  ngOnInit(): void {
    this.fetchDate()
  }
  fetchDate() {
    this.datesService.data.subscribe(date => {
      this.selectedDate = date
    });
    this.dieData = this.dieService.getAllAdapter3(this.selectedDate)
    this.dieData.subscribe((dp) => {
      this.dieData2.push(dp.data)
      return this.createChart()
    })
  }
  createChart(): void {
    this.data1 = this.dieData2[0].map(film => { return film.rollId });
    this.data2 = this.dieData2[0].map(film => { return film.setPoint });
    this.data3 = this.dieData2[0].map(film => { return film.controller });

    Chart.register(...registerables);
    this.myChart = document.getElementById('chart3');
    this.enableButton = document.getElementById('enableButton3')
    this.chart = new Chart(this.myChart, {
      type: 'line',
      data: {
        labels: this.data1,
        datasets: [
          {
            label: 'Setpoint',
            data: this.data2,
            borderColor: 'DarkOrange',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: 'DarkOrange'
          },
          {
            label: 'Actual',
            data: this.data3,
            borderColor: '#a2333c',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#a2333c'
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
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
