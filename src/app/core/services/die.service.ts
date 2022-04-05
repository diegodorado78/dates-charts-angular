import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DieService {
  dieData2=[{"roll_id":"0A1602221603","Setpoint1":1, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":59.4}];
  dieData3=[{"roll_id":"0A1602221603","Setpoint1":0.45, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":59.4}];
  dieData=[
{"roll_id":"0A1602221603","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":59.4,},
{"roll_id":"0A1602221748","Setpoint1":220, "Controller3":5,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":61.4,},
{"roll_id":"0A1602221932","Setpoint1":220, "Controller3":10,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":50,}
,{"roll_id":"0A1602222327","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":60.6,},
{"roll_id":"0A1602230334","Setpoint1":220, "Controller3":0,"Controller2":139,"Controller":0,"Setpoint2_3":120,"Actual":56.5,},
{"roll_id":"0A1602231554","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":63.8,},
{"roll_id":"0A1602232120","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":50.1,},
{"roll_id":"0A1602240211","Setpoint1":220, "Controller3":120,"Controller2":140,"Controller":0,"Setpoint2_3":120,"Actual":52.3,},
{"roll_id":"0A1602240918","Setpoint1":220, "Controller3":120,"Controller2":139,"Controller":0,"Setpoint2_3":120,"Actual":61.3,},
{"roll_id":"0A1602241019","Setpoint1":220, "Controller3":113,"Controller2":137,"Controller":0,"Setpoint2_3":120,"Actual":77.5,},
{"roll_id":"0A1602241140","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":120,"Actual":62.9,},
{"roll_id":"0A1602242455","Setpoint1":220, "Controller3":0,"Controller2":136,"Controller":0,"Setpoint2_3":120,"Actual":62.5,},
{"roll_id":"0A1602250854","Setpoint1":220, "Controller3":111,"Controller2":137,"Controller":0,"Setpoint2_3":120,"Actual":61.3,},
{"roll_id":"0A1602251419","Setpoint1":220, "Controller3":0,"Controller2":135,"Controller":0,"Setpoint2_3":120,"Actual":63.2,},
{"roll_id":"0A1604240933","Setpoint1":200, "Controller3":0,"Controller2":142,"Controller":100,"Setpoint2_3":120,"Actual":51.6,},
{"roll_id":"0A1604241245","Setpoint1":200, "Controller3":0,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":54.6,},
{"roll_id":"0A1604241404","Setpoint1":200, "Controller3":67,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":52.9,},
{"roll_id":"0A1604241701","Setpoint1":200, "Controller3":67,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":55.8,},
{"roll_id":"0A1604242329","Setpoint1":200, "Controller3":62,"Controller2":141,"Controller":100,"Setpoint2_3":120,"Actual":59.1,},
{"roll_id":"0A1604250142","Setpoint1":200, "Controller3":64,"Controller2":142,"Controller":100,"Setpoint2_3":120,"Actual":60.9,},
{"roll_id":"0A1604250643","Setpoint1":200, "Controller3":66,"Controller2":143,"Controller":100,"Setpoint2_3":120,"Actual":61.1,},
{"roll_id":"0A1604251351","Setpoint1":200, "Controller3":66,"Controller2":142,"Controller":100,"Setpoint2_3":120,"Actual":68.8,},
{"roll_id":"0A1604251719","Setpoint1":200, "Controller3":55,"Controller2":144,"Controller":100,"Setpoint2_3":120,"Actual":61,}
,{"roll_id":"0A1604251904","Setpoint1":200, "Controller3":115,"Controller2":140,"Controller":100,"Setpoint2_3":120,"Actual":61.7,},
{"roll_id":"0A1606101615","Setpoint1":200, "Controller3":115,"Controller2":140,"Controller":100,"Setpoint2_3":120,"Actual":73,}
,{"roll_id":"0A1606101822","Setpoint1":200, "Controller3":115,"Controller2":134,"Controller":100,"Setpoint2_3":120,"Actual":48.9,},
{"roll_id":"0A1606102326","Setpoint1":220, "Controller3":115,"Controller2":131,"Controller":100,"Setpoint2_3":120,"Actual":52.9,},
{"roll_id":"0A1606110251","Setpoint1":220, "Controller3":116,"Controller2":139,"Controller":52,"Setpoint2_3":120,"Actual":48.4,},
{"roll_id":"0A1606110733","Setpoint1":220, "Controller3":116,"Controller2":139,"Controller":100,"Setpoint2_3":120,"Actual":39.8,},
{"roll_id":"0A1606111154","Setpoint1":220, "Controller3":116,"Controller2":138,"Controller":100,"Setpoint2_3":120,"Actual":40.9,},
{"roll_id":"0A1606111514","Setpoint1":220, "Controller3":116,"Controller2":138,"Controller":82,"Setpoint2_3":120,"Actual":44.9,},
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
