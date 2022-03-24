import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrusorService {
private extrusorData=[
    {"roll_id":"0A1602221603","SetpointHeating":245,"MeltTempetaruteActual":256.4,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602221748","SetpointHeating":245,"MeltTempetaruteActual":256.5,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602221932","SetpointHeating":245,"MeltTempetaruteActual":249.2,"Drives":19,"Setpoint":220,"Actual":1.9},
    {"roll_id":"0A1602222327","SetpointHeating":245,"MeltTempetaruteActual":249.1,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602230334","SetpointHeating":235,"MeltTempetaruteActual":260.9,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602231554","SetpointHeating":235,"MeltTempetaruteActual":260.5,"Drives":29,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602232120","SetpointHeating":235,"MeltTempetaruteActual":260.5,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602240211","SetpointHeating":235,"MeltTempetaruteActual":294.9,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602240918","SetpointHeating":235,"MeltTempetaruteActual":249.8,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602241019","SetpointHeating":235,"MeltTempetaruteActual":257.4,"Drives":19,"Setpoint":220,"Actual":1.9,},
    {"roll_id":"0A1602241140","SetpointHeating":245,"MeltTempetaruteActual":302.6,"Drives":19,"Setpoint":220,"Actual":2,},
    {"roll_id":"0A1602242455","SetpointHeating":245,"MeltTempetaruteActual":342.5,"Drives":19,"Setpoint":220,"Actual":2,},
    {"roll_id":"0A1602250854","SetpointHeating":245,"MeltTempetaruteActual":280.2,"Drives":19,"Setpoint":220,"Actual":2.1,},
    {"roll_id":"0A1602251419","SetpointHeating":245,"MeltTempetaruteActual":276.4,"Drives":20,"Setpoint":225,"Actual":2.1,},
    {"roll_id":"0A1604240933","SetpointHeating":245,"MeltTempetaruteActual":274.9,"Drives":20,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604241245","SetpointHeating":245,"MeltTempetaruteActual":274.4,"Drives":20,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604241404","SetpointHeating":245,"MeltTempetaruteActual":274.4,"Drives":20,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604241701","SetpointHeating":245,"MeltTempetaruteActual":274.7,"Drives":20,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604242329","SetpointHeating":245,"MeltTempetaruteActual":306,"Drives":21,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604250142","SetpointHeating":245,"MeltTempetaruteActual":307.8,"Drives":21,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604250643","SetpointHeating":245,"MeltTempetaruteActual":306.6,"Drives":21,"Setpoint":230,"Actual":2.1,},
    {"roll_id":"0A1604251351","SetpointHeating":245,"MeltTempetaruteActual":297-8,"Drives":21,"Setpoint":230,"Actual":2,},
    {"roll_id":"0A1604251719","SetpointHeating":245,"MeltTempetaruteActual":297,"Drives":21,"Setpoint":230,"Actual":2},
    {"roll_id":"0A1604251904","SetpointHeating":240,"MeltTempetaruteActual":325.7,"Drives":21,"Setpoint":230,"Actual":2,},
    {"roll_id":"0A1606101615","SetpointHeating":240,"MeltTempetaruteActual":395.9,"Drives":21,"Setpoint":230,"Actual":2},
    {"roll_id":"0A1606101822","SetpointHeating":240,"MeltTempetaruteActual":297.2,"Drives":21,"Setpoint":230,"Actual":2,},
    {"roll_id":"0A1606102326","SetpointHeating":240,"MeltTempetaruteActual":309.7,"Drives":21,"Setpoint":230,"Actual":2,},
    {"roll_id":"0A1606110251","SetpointHeating":240,"MeltTempetaruteActual":296.8,"Drives":21,"Setpoint":220,"Actual":2,},
    {"roll_id":"0A1606110733","SetpointHeating":240,"MeltTempetaruteActual":290,"Drives":21,"Setpoint":220,"Actual":2,},
    {"roll_id":"0A1606111154","SetpointHeating":240,"MeltTempetaruteActual":298,"Drives":21,"Setpoint":220,"Actual":2,},
    {"roll_id":"0A1606111514","SetpointHeating":240,"MeltTempetaruteActual":299,"Drives":21,"Setpoint":220,"Actual":2,},
    ];

private mainExtrusorData=[
   {"roll_id":"0A1602221603","SetpointRpm":245,"MeteringExtruderOulet":117.7,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1602221748","SetpointRpm":245,"MeteringExtruderOulet":107.9,"Setpoint":227,"Actual":137.1,},
    {"roll_id":"0A1602221932","SetpointRpm":245,"MeteringExtruderOulet":117.9,"Setpoint":227,"Actual":137},
    {"roll_id":"0A1602222327","SetpointRpm":245,"MeteringExtruderOulet":107.6,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1602230334","SetpointRpm":235,"MeteringExtruderOulet":118,"Setpoint":227,"Actual":137.1,},
    {"roll_id":"0A1602231554","SetpointRpm":235,"MeteringExtruderOulet":107.7,"Setpoint":227,"Actual":137.1,},
    {"roll_id":"0A1602232120","SetpointRpm":235,"MeteringExtruderOulet":117.8,"Setpoint":227,"Actual":135.6,},
    {"roll_id":"0A1602240211","SetpointRpm":235,"MeteringExtruderOulet":108.3,"Setpoint":227,"Actual":136.4,},
    {"roll_id":"0A1602240918","SetpointRpm":235,"MeteringExtruderOulet":118.2,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1602241019","SetpointRpm":235,"MeteringExtruderOulet":107.8,"Setpoint":227,"Actual":137.1,},
    {"roll_id":"0A1602241140","SetpointRpm":245,"MeteringExtruderOulet":118.1,"Setpoint":227,"Actual":136.9,},
    {"roll_id":"0A1602242455","SetpointRpm":245,"MeteringExtruderOulet":108.5,"Setpoint":227,"Actual":137.3,},
    {"roll_id":"0A1602250854","SetpointRpm":245,"MeteringExtruderOulet":118.1,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1602251419","SetpointRpm":245,"MeteringExtruderOulet":108.5,"Setpoint":227,"Actual":137.1,},
    {"roll_id":"0A1604240933","SetpointRpm":245,"MeteringExtruderOulet":118.1,"Setpoint":227,"Actual":137.1,},
    {"roll_id":"0A1604241245","SetpointRpm":245,"MeteringExtruderOulet":108.4,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1604241404","SetpointRpm":245,"MeteringExtruderOulet":118.3,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1604241701","SetpointRpm":245,"MeteringExtruderOulet":108.2,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1604242329","SetpointRpm":245,"MeteringExtruderOulet":117.7,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1604250142","SetpointRpm":245,"MeteringExtruderOulet":107.7,"Setpoint":227,"Actual":136.9,},
    {"roll_id":"0A1604250643","SetpointRpm":245,"MeteringExtruderOulet":117.8,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1604251351","SetpointRpm":245,"MeteringExtruderOulet":108.1,"Setpoint":227,"Actual":137},
    {"roll_id":"0A1604251719","SetpointRpm":245,"MeteringExtruderOulet":118.5,"Setpoint":227,"Actual":137},
    {"roll_id":"0A1604251904","SetpointRpm":240,"MeteringExtruderOulet":108.1,"Setpoint":227,"Actual":136.2,},
    {"roll_id":"0A1606101615","SetpointRpm":240,"MeteringExtruderOulet":118.4,"Setpoint":227,"Actual":137.8},
    {"roll_id":"0A1606101822","SetpointRpm":240,"MeteringExtruderOulet":108.3,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1606102326","SetpointRpm":240,"MeteringExtruderOulet":118.2,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1606110251","SetpointRpm":240,"MeteringExtruderOulet":108.4,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1606110733","SetpointRpm":240,"MeteringExtruderOulet":118.5,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1606111154","SetpointRpm":240,"MeteringExtruderOulet":107.2,"Setpoint":227,"Actual":137,},
    {"roll_id":"0A1606111514","SetpointRpm":240,"MeteringExtruderOulet":117.2,"Setpoint":227,"Actual":137,},
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
}
