import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DieService {
   dieData=[
{"roll_id":"0A1602221603","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":29.4,},
{"roll_id":"0A1602221748","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":31.4,},
{"roll_id":"0A1602221932","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":30,}
,{"roll_id":"0A1602222327","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":40.6,},
{"roll_id":"0A1602230334","Setpoint1":220, "Controller3":0,"Controller2":139,"Controller":0,"Setpoint2_3":220,"Actual":26.5,},
{"roll_id":"0A1602231554","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":43.8,},
{"roll_id":"0A1602232120","Setpoint1":220, "Controller3":113,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":30.1,},
{"roll_id":"0A1602240211","Setpoint1":220, "Controller3":0,"Controller2":140,"Controller":0,"Setpoint2_3":220,"Actual":42.3,},
{"roll_id":"0A1602240918","Setpoint1":220, "Controller3":0,"Controller2":139,"Controller":0,"Setpoint2_3":220,"Actual":31.3,},
{"roll_id":"0A1602241019","Setpoint1":220, "Controller3":0,"Controller2":137,"Controller":0,"Setpoint2_3":220,"Actual":47.5,},
{"roll_id":"0A1602241140","Setpoint1":220, "Controller3":112,"Controller2":138,"Controller":0,"Setpoint2_3":220,"Actual":32.9,},
{"roll_id":"0A1602242455","Setpoint1":220, "Controller3":0,"Controller2":136,"Controller":0,"Setpoint2_3":220,"Actual":32.5,},
{"roll_id":"0A1602250854","Setpoint1":220, "Controller3":111,"Controller2":137,"Controller":0,"Setpoint2_3":220,"Actual":31.3,},
{"roll_id":"0A1602251419","Setpoint1":220, "Controller3":0,"Controller2":135,"Controller":0,"Setpoint2_3":220,"Actual":33.2,},
{"roll_id":"0A1604240933","Setpoint1":216, "Controller3":0,"Controller2":142,"Controller":100,"Setpoint2_3":220,"Actual":11.6,},
{"roll_id":"0A1604241245","Setpoint1":216, "Controller3":0,"Controller2":141,"Controller":100,"Setpoint2_3":220,"Actual":14.6,},
{"roll_id":"0A1604241404","Setpoint1":216, "Controller3":117,"Controller2":141,"Controller":100,"Setpoint2_3":220,"Actual":12.9,},
{"roll_id":"0A1604241701","Setpoint1":216, "Controller3":117,"Controller2":141,"Controller":100,"Setpoint2_3":220,"Actual":15.8,},
{"roll_id":"0A1604242329","Setpoint1":216, "Controller3":112,"Controller2":141,"Controller":100,"Setpoint2_3":220,"Actual":19.1,},
{"roll_id":"0A1604250142","Setpoint1":216, "Controller3":114,"Controller2":142,"Controller":100,"Setpoint2_3":220,"Actual":20.9,},
{"roll_id":"0A1604250643","Setpoint1":216, "Controller3":116,"Controller2":143,"Controller":100,"Setpoint2_3":220,"Actual":31.1,},
{"roll_id":"0A1604251351","Setpoint1":216, "Controller3":116,"Controller2":142,"Controller":100,"Setpoint2_3":220,"Actual":28.8,},
{"roll_id":"0A1604251719","Setpoint1":216, "Controller3":115,"Controller2":144,"Controller":100,"Setpoint2_3":220,"Actual":31,}
,{"roll_id":"0A1604251904","Setpoint1":216, "Controller3":115,"Controller2":140,"Controller":100,"Setpoint2_3":220,"Actual":31.7,},
{"roll_id":"0A1606101615","Setpoint1":216, "Controller3":115,"Controller2":140,"Controller":100,"Setpoint2_3":220,"Actual":43,}
,{"roll_id":"0A1606101822","Setpoint1":216, "Controller3":115,"Controller2":134,"Controller":100,"Setpoint2_3":220,"Actual":48.9,},
{"roll_id":"0A1606102326","Setpoint1":220, "Controller3":115,"Controller2":131,"Controller":100,"Setpoint2_3":220,"Actual":52.9,},
{"roll_id":"0A1606110251","Setpoint1":220, "Controller3":116,"Controller2":139,"Controller":52,"Setpoint2_3":220,"Actual":48.4,},
{"roll_id":"0A1606110733","Setpoint1":220, "Controller3":116,"Controller2":139,"Controller":100,"Setpoint2_3":220,"Actual":39.8,},
{"roll_id":"0A1606111154","Setpoint1":220, "Controller3":116,"Controller2":138,"Controller":100,"Setpoint2_3":220,"Actual":40.9,},
{"roll_id":"0A1606111514","Setpoint1":220, "Controller3":116,"Controller2":138,"Controller":82,"Setpoint2_3":220,"Actual":44.9,},
{"roll_id":"0A1606111826","Setpoint1":220, "Controller3":118,"Controller2":139,"Controller":100,"Setpoint2_3":220,"Actual":39.2,},
{"roll_id":"0A1606112242","Setpoint1":220, "Controller3":119,"Controller2":140,"Controller":100,"Setpoint2_3":220,"Actual":38.9,},
{"roll_id":"0A1606112449","Setpoint1":220, "Controller3":0,"Controller2":134,"Controller":100,"Setpoint2_3":220,"Actual":41.6,},
{"roll_id":"0A1606120256","Setpoint1":220, "Controller3":0,"Controller2":131,"Controller":25,"Setpoint2_3":220,"Actual":42.1,},
{"roll_id":"0A1606120609","Setpoint1":220, "Controller3":0,"Controller2":139,"Controller":100,"Setpoint2_3":220,"Actual":41.2,},
{"roll_id":"0A1606121157","Setpoint1":220, "Controller3":0,"Controller2":139,"Controller":100,"Setpoint2_3":220,"Actual":37.1,},
{"roll_id":"0A1606121507","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":55,"Setpoint2_3":220,"Actual":39.4,},
{"roll_id":"0A1606121938","Setpoint1":220, "Controller3":0,"Controller2":138,"Controller":82,"Setpoint2_3":220,"Actual":44.4,},
{"roll_id":"0A1606122253","Setpoint1":217, "Controller3":117,"Controller2":139,"Controller":50,"Setpoint2_3":220,"Actual":39,}
,{"roll_id":"0A1606130207","Setpoint1":217, "Controller3":116,"Controller2":140,"Controller":50,"Setpoint2_3":220,"Actual":2.8},
{"roll_id":"0A1606130521","Setpoint1":217, "Controller3":118,"Controller2":139,"Controller":50,"Setpoint2_3":220,"Actual":41.4,},
{"roll_id":"0A1607291555","Setpoint1":217, "Controller3":118,"Controller2":139,"Controller":50,"Setpoint2_3":220,"Actual":45,}
,{"roll_id":"0A1607291748","Setpoint1":217, "Controller3":118,"Controller2":138,"Controller":50,"Setpoint2_3":220,"Actual":41.8,},
{"roll_id":"0A1607292308","Setpoint1":217, "Controller3":117,"Controller2":139,"Controller":50,"Setpoint2_3":220,"Actual":38,}
,{"roll_id":"0A1607300157","Setpoint1":217, "Controller3":116,"Controller2":141,"Controller":50,"Setpoint2_3":220,"Actual":42.2,},
{"roll_id":"0A1607300406","Setpoint1":217, "Controller3":116,"Controller2":140,"Controller":50,"Setpoint2_3":220,"Actual":41.3,},
{"roll_id":"0A1607300734","Setpoint1":217, "Controller3":116,"Controller2":139,"Controller":16,"Setpoint2_3":220,"Actual":40.5,},
{"roll_id":"0A1607301245","Setpoint1":217, "Controller3":116,"Controller2":139,"Controller":16,"Setpoint2_3":220,"Actual":37.6,},
{"roll_id":"0A1607310425","Setpoint1":220, "Controller3":115,"Controller2":138,"Controller":14,"Setpoint2_3":220,"Actual":40.3,},
{"roll_id":"0A1609081528","Setpoint1":220, "Controller3":115,"Controller2":130,"Controller":15,"Setpoint2_3":220,"Actual":49.9,},
{"roll_id":"0A1609081821","Setpoint1":220, "Controller3":116,"Controller2":128,"Controller":14,"Setpoint2_3":220,"Actual":47.1,},
{"roll_id":"0A1609082155","Setpoint1":220, "Controller3":0,"Controller2":127,"Controller":15,"Setpoint2_3":220,"Actual":50.3,},
{"roll_id":"0A1609082300","Setpoint1":220, "Controller3":110,"Controller2":125,"Controller":15,"Setpoint2_3":220,"Actual":49.8,},
{"roll_id":"0A1609090252","Setpoint1":220, "Controller3":110,"Controller2":120,"Controller":15,"Setpoint2_3":220,"Actual":46.1,},
   ]
  
  constructor() { }
  getAllDataPoints(){
    return this.dieData;
  }
  getDataPoint(id:string){
    return this.dieData.find(item=>id=== item.roll_id); // find and return the object with the id===arg
  }
}
