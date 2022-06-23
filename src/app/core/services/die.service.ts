import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DieService {
  dieData2=[{"roll_id":"0A1602221603","date":"2020/10/15","setpoint1":1, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":59.4}];
  dieData3=[{"roll_id":"0A1602221603","date":"2020/10/15","setpoint1":0.45, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":59.4}];
  dieData=[
{"roll_id":"0A1602221603","date":"2022/06/01","setpoint1":220, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":59.4,},
{"roll_id":"0A1602221748","date":"2022/06/02","setpoint1":220, "controller3":5,"controller2":138,"controller":0,"setpoint2_3":120,"actual":61.4,},
{"roll_id":"0A1602221932","date":"2022/06/03","setpoint1":220, "controller3":10,"controller2":138,"controller":0,"setpoint2_3":120,"actual":50,},
{"roll_id":"0A1602222327","date":"2022/06/04","setpoint1":220, "controller3":0,"controller2":138,"controller":0,"setpoint2_3":120,"actual":60.6,},
{"roll_id":"0A1602230334","date":"2022/06/05","setpoint1":220, "controller3":0,"controller2":139,"controller":0,"setpoint2_3":120,"actual":56.5,},
{"roll_id":"0A1602231554","date":"2022/06/06","setpoint1":220, "controller3":113,"controller2":138,"controller":0,"setpoint2_3":120,"actual":63.8,},
{"roll_id":"0A1602232120","date":"2022/06/07","setpoint1":220, "controller3":113,"controller2":138,"controller":0,"setpoint2_3":120,"actual":50.1,},
{"roll_id":"0A1602240211","date":"2022/06/09","setpoint1":220, "controller3":120,"controller2":140,"controller":0,"setpoint2_3":120,"actual":52.3,},
{"roll_id":"0A1602240918","date":"2022/06/10","setpoint1":220, "controller3":120,"controller2":139,"controller":0,"setpoint2_3":120,"actual":61.3,},
{"roll_id":"0A1602241019","date":"2022/06/11","setpoint1":220, "controller3":113,"controller2":137,"controller":0,"setpoint2_3":120,"actual":77.5,},
{"roll_id":"0A1602241140","date":"2022/06/12","setpoint1":220, "controller3":113,"controller2":138,"controller":0,"setpoint2_3":120,"actual":62.9,},
{"roll_id":"0A1602242455","date":"2022/06/13","setpoint1":220, "controller3":0,"controller2":136,"controller":0,"setpoint2_3":120,"actual":62.5,},
{"roll_id":"0A1602250854","date":"2022/06/14","setpoint1":220, "controller3":111,"controller2":137,"controller":0,"setpoint2_3":120,"actual":61.3,},
{"roll_id":"0A1602251419","date":"2022/06/15","setpoint1":220, "controller3":0,"controller2":135,"controller":0,"setpoint2_3":120,"actual":63.2,},
{"roll_id":"0A1604240933","date":"2022/06/16","setpoint1":200, "controller3":0,"controller2":142,"controller":100,"setpoint2_3":120,"actual":51.6,},
{"roll_id":"0A1604241245","date":"2022/06/17","setpoint1":200, "controller3":0,"controller2":141,"controller":100,"setpoint2_3":120,"actual":54.6,},
{"roll_id":"0A1604241404","date":"2022/06/18","setpoint1":200, "controller3":67,"controller2":141,"controller":100,"setpoint2_3":120,"actual":52.9,},
{"roll_id":"0A1604241701","date":"2022/06/19","setpoint1":200, "controller3":67,"controller2":141,"controller":100,"setpoint2_3":120,"actual":55.8,},
{"roll_id":"0A1604242329","date":"2022/06/20","setpoint1":200, "controller3":62,"controller2":141,"controller":100,"setpoint2_3":120,"actual":59.1,},
{"roll_id":"0A1604250142","date":"2022/06/21","setpoint1":200, "controller3":64,"controller2":142,"controller":100,"setpoint2_3":120,"actual":60.9,},
{"roll_id":"0A1604250643","date":"2022/06/22","setpoint1":200, "controller3":66,"controller2":143,"controller":100,"setpoint2_3":120,"actual":61.1,},
{"roll_id":"0A1604251351","date":"2022/06/23","setpoint1":200, "controller3":66,"controller2":142,"controller":100,"setpoint2_3":120,"actual":68.8,},
{"roll_id":"0A1604251719","date":"2022/06/24","setpoint1":200, "controller3":55,"controller2":144,"controller":100,"setpoint2_3":120,"actual":61,},
{"roll_id":"0A1604251904","date":"2022/06/25","setpoint1":200, "controller3":115,"controller2":140,"controller":100,"setpoint2_3":120,"actual":61.7,},
{"roll_id":"0A1606101615","date":"2022/06/26","setpoint1":200, "controller3":115,"controller2":140,"controller":100,"setpoint2_3":120,"actual":73,},
{"roll_id":"0A1606101822","date":"2022/06/27","setpoint1":200, "controller3":115,"controller2":134,"controller":100,"setpoint2_3":120,"actual":48.9,},
{"roll_id":"0A1606102326","date":"2022/06/28","setpoint1":220, "controller3":115,"controller2":131,"controller":100,"setpoint2_3":120,"actual":52.9,},
{"roll_id":"0A1606110251","date":"2022/06/29","setpoint1":220, "controller3":116,"controller2":139,"controller":52,"setpoint2_3":120,"actual":48.4,},
{"roll_id":"0A1606110733","date":"2022/06/30","setpoint1":220, "controller3":116,"controller2":139,"controller":100,"setpoint2_3":120,"actual":39.8,},
{"roll_id":"0A1606111154","date":"2022/06/29","setpoint1":220, "controller3":116,"controller2":138,"controller":100,"setpoint2_3":120,"actual":40.9,},
{"roll_id":"0A1606111514","date":"2022/06/29","setpoint1":220, "controller3":116,"controller2":138,"controller":82,"setpoint2_3":120,"actual":44.9,},
 ]
   private dataSource= new BehaviorSubject({});
   dataSource$=this.dataSource.asObservable();

  constructor() { }

  public addDataSet(data:any){
    this.dataSource.next(data)//actualizo en estado del obsevable con los valores que pase
  }
  getfilteredDataset(){
    return this.dataSource$
  }
  getAllDataPoints(){
    return this.dieData;
  }
  getSomeDataPoints(){
    return this.dieData2;
  }
  getSomeDataPoints2(){
    return this.dieData3;
  }
  getDataPoint(id:string){
    return this.dieData.find(item=>id=== item.roll_id); // find and return the object with the id===arg
  }
}
