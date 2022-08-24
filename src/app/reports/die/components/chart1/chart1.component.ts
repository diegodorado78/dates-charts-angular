import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DieService } from '@services/die.service';
import { Dates } from '@models/date.model';
import { DatesService } from '@services/dates.service';
import { Subject } from 'rxjs';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit, OnDestroy {
  public chartTitle = "Adapter 1";
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
  selectedDate: Dates;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private dieService: DieService,
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
      this.selectedDate = date
    });
    this.dieData = this.dieService.getAllAdapter1(this.selectedDate)
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
    this.myChart = document.getElementById('chart1');
    this.enableButton = document.getElementById('enableButton1')

    this.chart = new Chart(this.myChart, {
      type: 'line',
      data: {
        labels: this.data1,
        datasets: [
          {
            label: 'Set Point',
            data: this.data2,
            borderColor: '#007F5C',
            borderWidth: 3,
            tension: 0.5,
            pointRadius: 2,
            pointBorderColor: '#007F5C'
          },
          {
            label: 'Controller',
            data: this.data3,
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
