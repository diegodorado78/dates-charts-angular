import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtrusorService {
  private dataSource= new BehaviorSubject({});
   dataSource$=this.dataSource.asObservable();
  private extrusorData=[
    {"roll_id":"0A1602221603","date":"2022/06/01","setpointHeating":245,"meltTempetaruteActual":256.4,"drives":19,"setpoint":220,"actual":1.9,},
    {"roll_id":"0A1602221748","date":"2022/06/02","setpointHeating":245,"meltTempetaruteActual":256.5,"drives":19,"setpoint":220,"actual":1.9,},
    {"roll_id":"0A1604250643","date":"2022/06/19","setpointHeating":245,"meltTempetaruteActual":306.6,"drives":21,"setpoint":230,"actual":2.1,},
    {"roll_id":"0A1604251351","date":"2022/06/20","setpointHeating":245,"meltTempetaruteActual":297-8,"drives":21,"setpoint":230,"actual":2,},
    {"roll_id":"0A1604251719","date":"2022/06/21","setpointHeating":245,"meltTempetaruteActual":297,"drives":21,"setpoint":230,"actual":2},
    {"roll_id":"0A1604251904","date":"2022/06/22","setpointHeating":240,"meltTempetaruteActual":325.7,"drives":21,"setpoint":230,"actual":2,},
    {"roll_id":"0A1606101615","date":"2022/06/23","setpointHeating":240,"meltTempetaruteActual":395.9,"drives":21,"setpoint":230,"actual":2},
    {"roll_id":"0A1606101822","date":"2022/06/24","setpointHeating":240,"meltTempetaruteActual":297.2,"drives":21,"setpoint":230,"actual":2,},
    {"roll_id":"0A1606102326","date":"2022/06/25","setpointHeating":240,"meltTempetaruteActual":309.7,"drives":21,"setpoint":230,"actual":2,},
    {"roll_id":"0A1606110251","date":"2022/06/26","setpointHeating":240,"meltTempetaruteActual":296.8,"drives":21,"setpoint":220,"actual":2,},
    {"roll_id":"0A1606110733","date":"2022/06/27","setpointHeating":240,"meltTempetaruteActual":290,"drives":21,"setpoint":220,"actual":2,},
    {"roll_id":"0A1606111154","date":"2022/06/28","setpointHeating":240,"meltTempetaruteActual":298,"drives":21,"setpoint":220,"actual":2,},
    {"roll_id":"0A1606111514","date":"2022/06/29","setpointHeating":240,"meltTempetaruteActual":299,"drives":21,"setpoint":220,"actual":2,},
    ];

  private mainExtrusorData=[
    {"roll_id":"0A1602221603","date":"22/06/01","setpointRpm":245,"meteringExtruderOulet":117.7,"setpoint":227,"actual":137,},
    {"roll_id":"0A1602221748","date":"22/06/02","setpointRpm":245,"meteringExtruderOulet":107.9,"setpoint":227,"actual":137.1,},
    {"roll_id":"0A1602221932","date":"22/06/03","setpointRpm":245,"meteringExtruderOulet":117.9,"setpoint":227,"actual":137},
    {"roll_id":"0A1602222327","date":"22/06/04","setpointRpm":245,"meteringExtruderOulet":107.6,"setpoint":227,"actual":137,},
    {"roll_id":"0A1602230334","date":"22/06/05","setpointRpm":235,"meteringExtruderOulet":118.2,"setpoint":227,"actual":137.1,},
    {"roll_id":"0A1602231554","date":"22/06/06","setpointRpm":235,"meteringExtruderOulet":107.7,"setpoint":227,"actual":137.1,},
    {"roll_id":"0A1602232120","date":"22/06/07","setpointRpm":235,"meteringExtruderOulet":117.8,"setpoint":227,"actual":135.6,},
    {"roll_id":"0A1602240211","date":"22/06/08","setpointRpm":235,"meteringExtruderOulet":108.3,"setpoint":227,"actual":136.4,},
    {"roll_id":"0A1602240918","date":"22/06/09","setpointRpm":235,"meteringExtruderOulet":118.2,"setpoint":227,"actual":137,},
    {"roll_id":"0A1602241019","date":"22/06/10","setpointRpm":235,"meteringExtruderOulet":107.8,"setpoint":227,"actual":137.1,},
    {"roll_id":"0A1602241140","date":"22/06/11","setpointRpm":245,"meteringExtruderOulet":118.1,"setpoint":227,"actual":136.9,},
    {"roll_id":"0A1602242455","date":"22/06/12","setpointRpm":245,"meteringExtruderOulet":108.5,"setpoint":227,"actual":137.3,},
    {"roll_id":"0A1602250854","date":"22/06/13","setpointRpm":245,"meteringExtruderOulet":118.1,"setpoint":227,"actual":137,},
    {"roll_id":"0A1602251419","date":"22/06/14","setpointRpm":245,"meteringExtruderOulet":108.5,"setpoint":227,"actual":137.1,},
    {"roll_id":"0A1604240933","date":"22/06/15","setpointRpm":245,"meteringExtruderOulet":118.1,"setpoint":227,"actual":137.1,},
    {"roll_id":"0A1604241245","date":"22/06/16","setpointRpm":245,"meteringExtruderOulet":108.4,"setpoint":227,"actual":137,},
    {"roll_id":"0A1604241404","date":"22/06/17","setpointRpm":245,"meteringExtruderOulet":118.3,"setpoint":227,"actual":137,},
    {"roll_id":"0A1604241701","date":"22/06/18","setpointRpm":245,"meteringExtruderOulet":108.2,"setpoint":227,"actual":137,},
    {"roll_id":"0A1604242329","date":"22/06/19","setpointRpm":245,"meteringExtruderOulet":117.7,"setpoint":227,"actual":137,},
    {"roll_id":"0A1604250142","date":"22/06/20","setpointRpm":245,"meteringExtruderOulet":107.7,"setpoint":227,"actual":136.9,},
    {"roll_id":"0A1604250643","date":"22/06/21","setpointRpm":245,"meteringExtruderOulet":117.8,"setpoint":227,"actual":137,},
    {"roll_id":"0A1604251351","date":"22/06/22","setpointRpm":245,"meteringExtruderOulet":108.1,"setpoint":227,"actual":137},
    {"roll_id":"0A1604251719","date":"22/06/23","setpointRpm":245,"meteringExtruderOulet":118.5,"setpoint":227,"actual":137},
    {"roll_id":"0A1604251904","date":"22/06/24","setpointRpm":240,"meteringExtruderOulet":108.1,"setpoint":227,"actual":136.2,},
    {"roll_id":"0A1606101615","date":"22/06/25","setpointRpm":240,"meteringExtruderOulet":118.4,"setpoint":227,"actual":137.8},
    {"roll_id":"0A1606101822","date":"22/06/26","setpointRpm":240,"meteringExtruderOulet":108.3,"setpoint":227,"actual":137,},
    {"roll_id":"0A1606102326","date":"22/06/27","setpointRpm":240,"meteringExtruderOulet":118.2,"setpoint":227,"actual":137,},
    {"roll_id":"0A1606110251","date":"22/06/28","setpointRpm":240,"meteringExtruderOulet":108.4,"setpoint":227,"actual":137,},
    {"roll_id":"0A1606110733","date":"22/06/29","setpointRpm":240,"meteringExtruderOulet":118.5,"setpoint":227,"actual":137,},
    {"roll_id":"0A1606111154","date":"22/06/30","setpointRpm":240,"meteringExtruderOulet":107.2,"setpoint":227,"actual":137,},
    {"roll_id":"0A1606111514","date":"22/06/30","setpointRpm":240,"meteringExtruderOulet":117.2,"setpoint":227,"actual":137,},
]
  constructor() { }
  getAllDataPoints(){
    return this.extrusorData;
  }
  getAllMainDataPoints(){
    return this.mainExtrusorData;
  }
  getDataPoint(id:string){
    return this.extrusorData.find(item=>id=== item.roll_id); // busca y dev"SetpointHeating":250,"MeltTempetaruteActual":256,uelve el item del param id
  }
  addDataSet(data:any){
    this.dataSource.next(data)//actualizo en estado del obsevable con los valores que pase

  }
}
