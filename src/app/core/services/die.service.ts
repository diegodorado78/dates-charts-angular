import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DieService {
  dieData2=[{"roll_id":"0A1602221603","Setpoint1":1, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":59.4}];
  dieData3=[{"roll_id":"0A1602221603","Setpoint1":0.45, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":59.4}];
  dieData=[
{"roll_id":"0A1602221603","date":"2021/10/01","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":59.4,},
{"roll_id":"0A1602221748","date":"2021/10/02","Setpoint1":220, "Controller3":5,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":61.4,},
{"roll_id":"0A1602221932","date":"2021-10-03","Setpoint1":220, "Controller3":10,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":50,},
{"roll_id":"0A1602222327","date":"2021-10-04","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":60.6,},
{"roll_id":"0A1602230334","date":"2021-10-05","Setpoint1":220, "Controller3":0,"Controller2":139,"Controller":0,"Setpoint2_3":120,"Actual":56.5,},
{"roll_id":"0A1602231554","date":"2021-10-06","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":63.8,},
{"roll_id":"0A1602232120","date":"2021-10-07","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":50.1,},
{"roll_id":"0A1602240211","date":"2021-10-09","Setpoint1":220, "Controller3":120,"Controller2":140,"Controller":0,"Setpoint2_3":120,"Actual":52.3,},
{"roll_id":"0A1602240918","date":"2021-10-10","Setpoint1":220, "Controller3":120,"Controller2":139,"Controller":0,"Setpoint2_3":120,"Actual":61.3,},
{"roll_id":"0A1602241019","date":"2021-10-11","Setpoint1":220, "Controller3":113,"Controller2":137,"Controller":0,"Setpoint2_3":120,"Actual":77.5,},
{"roll_id":"0A1602241140","date":"2021-10-12","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":62.9,},
{"roll_id":"0A1602242455","date":"2021-10-13","Setpoint1":220, "Controller3":0,"Controller2":136,"Controller":0,"Setpoint2_3":120,"Actual":62.5,},
{"roll_id":"0A1602250854","date":"2021-10-14","Setpoint1":220, "Controller3":111,"Controller2":137,"Controller":0,"Setpoint2_3":120,"Actual":61.3,},
{"roll_id":"0A1602251419","date":"2021-10-15","Setpoint1":220, "Controller3":0,"Controller2":135,"Controller":0,"Setpoint2_3":120,"Actual":63.2,},
{"roll_id":"0A1604240933","date":"2021-10-16","Setpoint1":200, "Controller3":0,"Controller2":142,"Controller":100,"Setpoint2_3":120,"Actual":51.6,},
{"roll_id":"0A1604241245","date":"2021-10-17","Setpoint1":200, "Controller3":0,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":54.6,},
{"roll_id":"0A1604241404","date":"2021-10-18","Setpoint1":200, "Controller3":67,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":52.9,},
{"roll_id":"0A1604241701","date":"2021-10-19","Setpoint1":200, "Controller3":67,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":55.8,},
{"roll_id":"0A1604242329","date":"2021-10-20","Setpoint1":200, "Controller3":62,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":59.1,},
{"roll_id":"0A1604250142","date":"2021-10-21","Setpoint1":200, "Controller3":64,"Controller2":142,"Controller":100,"Setpoint2_3":120,"Actual":60.9,},
{"roll_id":"0A1604250643","date":"2021-10-22","Setpoint1":200, "Controller3":66,"Controller2":143,"Controller":100,"Setpoint2_3":120,"Actual":61.1,},
{"roll_id":"0A1604251351","date":"2021-10-23","Setpoint1":200, "Controller3":66,"Controller2":142,"Controller":100,"Setpoint2_3":120,"Actual":68.8,},
{"roll_id":"0A1604251719","date":"2021-10-24","Setpoint1":200, "Controller3":55,"Controller2":144,"Controller":100,"Setpoint2_3":120,"Actual":61,},
{"roll_id":"0A1604251904","date":"2021-10-25","Setpoint1":200, "Controller3":115,"Controller2":140,"Controller":100,"Setpoint2_3":120,"Actual":61.7,},
{"roll_id":"0A1606101615","date":"2021-10-26","Setpoint1":200, "Controller3":115,"Controller2":140,"Controller":100,"Setpoint2_3":120,"Actual":73,},
{"roll_id":"0A1606101822","date":"2021-10-27","Setpoint1":200, "Controller3":115,"Controller2":134,"Controller":100,"Setpoint2_3":120,"Actual":48.9,},
{"roll_id":"0A1606102326","date":"2021-10-28","Setpoint1":220, "Controller3":115,"Controller2":131,"Controller":100,"Setpoint2_3":120,"Actual":52.9,},
{"roll_id":"0A1606110251","date":"2021-10-29","Setpoint1":220, "Controller3":116,"Controller2":139,"Controller":52,"Setpoint2_3":120,"Actual":48.4,},
{"roll_id":"0A1606110733","date":"2021-10-30","Setpoint1":220, "Controller3":116,"Controller2":139,"Controller":100,"Setpoint2_3":120,"Actual":39.8,},
{"roll_id":"0A1606111154","date":"2021-10-29","Setpoint1":220, "Controller3":116,"Controller2":138,"Controller":100,"Setpoint2_3":120,"Actual":40.9,},
{"roll_id":"0A1606111514","date":"2021-10-29","Setpoint1":220, "Controller3":116,"Controller2":138,"Controller":82,"Setpoint2_3":120,"Actual":44.9,},
   ]

  constructor() { }
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
