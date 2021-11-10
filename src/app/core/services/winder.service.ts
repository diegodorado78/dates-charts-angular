import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/internal/operators';
import {Response} from '../../response.model'

@Injectable({
  providedIn: 'root'
})
export class WinderService {
//  winderData= [
// {"roll_id":"0A1602221603","FilmTension":132,"Setpoint":42.8,"Actual":29.4,},
// {"roll_id":"0A1602221748","FilmTension":139.1,"Setpoint":42.9,"Actual":31.4,},
// {"roll_id":"0A1602221932","FilmTension":135.3,"Setpoint":42.8,"Actual":30,}
// ,{"roll_id":"0A1602222327","FilmTension":184.6,"Setpoint":42.9,"Actual":40.6,},
// {"roll_id":"0A1602230334","FilmTension":119.6,"Setpoint":42.8,"Actual":26.5,},
// {"roll_id":"0A1602231554","FilmTension":202.4,"Setpoint":42.8,"Actual":43.8,},
// {"roll_id":"0A1602232120","FilmTension":135.2,"Setpoint":42.8,"Actual":30.1,},
// {"roll_id":"0A1602240211","FilmTension":192.3,"Setpoint":42.9,"Actual":42.3,},
// {"roll_id":"0A1602240918","FilmTension":136.8,"Setpoint":42.8,"Actual":31.3,},
// {"roll_id":"0A1602241019","FilmTension":217.4,"Setpoint":42.8,"Actual":47.5,},
// {"roll_id":"0A1602241140","FilmTension":146,"Setpoint":42.8,"Actual":32.9,},
// {"roll_id":"0A1602242455","FilmTension":145,"Setpoint":42.8,"Actual":32.5,},
// {"roll_id":"0A1602250854","FilmTension":138.9,"Setpoint":42.8,"Actual":31.3,},
// {"roll_id":"0A1602251419","FilmTension":150.5,"Setpoint":42.8,"Actual":33.2,},
// {"roll_id":"0A1604240933","FilmTension":44.4,"Setpoint":42.8,"Actual":11.6,},
// {"roll_id":"0A1604241245","FilmTension":58.4,"Setpoint":42.8,"Actual":14.6,},
// {"roll_id":"0A1604241404","FilmTension":49.5,"Setpoint":42.8,"Actual":12.9,},
// {"roll_id":"0A1604241701","FilmTension":67.4,"Setpoint":42.8,"Actual":15.8,},
// {"roll_id":"0A1604242329","FilmTension":82,"Setpoint":42.8,"Actual":19.1,},
// {"roll_id":"0A1604250142","FilmTension":92.3,"Setpoint":42.8,"Actual":20.9,},
// {"roll_id":"0A1604250643","FilmTension":146.4,"Setpoint":42.7,"Actual":31.1,},
// {"roll_id":"0A1604251351","FilmTension":128,"Setpoint":42.8,"Actual":28.8,},
// {"roll_id":"0A1604251719","FilmTension":139.4,"Setpoint":42.8,"Actual":31,}
// ,{"roll_id":"0A1604251904","FilmTension":145,"Setpoint":42.8,"Actual":31.7,},
// {"roll_id":"0A1606101615","FilmTension":198.5,"Setpoint":42.8,"Actual":43,}
// ,{"roll_id":"0A1606101822","FilmTension":224.9,"Setpoint":42.9,"Actual":48.9,},
// {"roll_id":"0A1606102326","FilmTension":245.8,"Setpoint":42.8,"Actual":52.9,},
// {"roll_id":"0A1606110251","FilmTension":223.9,"Setpoint":42.8,"Actual":48.4,},
// {"roll_id":"0A1606110733","FilmTension":186.4,"Setpoint":42.7,"Actual":39.8,},
// {"roll_id":"0A1606111154","FilmTension":187.7,"Setpoint":42.8,"Actual":40.9,},
// {"roll_id":"0A1606111514","FilmTension":207.7,"Setpoint":42.8,"Actual":44.9,},
// {"roll_id":"0A1606111826","FilmTension":178.5,"Setpoint":42.9,"Actual":39.2,},
// {"roll_id":"0A1606112242","FilmTension":175.6,"Setpoint":42.9,"Actual":38.9,},
// {"roll_id":"0A1606112449","FilmTension":192.3,"Setpoint":42.9,"Actual":41.6,},
// {"roll_id":"0A1606120256","FilmTension":192.3,"Setpoint":42.9,"Actual":42.1,},
// {"roll_id":"0A1606120609","FilmTension":193.9,"Setpoint":42.7,"Actual":41.2,},
// {"roll_id":"0A1606121157","FilmTension":169.3,"Setpoint":42.8,"Actual":37.1,},
// {"roll_id":"0A1606121507","FilmTension":180.7,"Setpoint":42.8,"Actual":39.4,},
// {"roll_id":"0A1606121938","FilmTension":206.8,"Setpoint":42.8,"Actual":44.4,},
// {"roll_id":"0A1606122253","FilmTension":178,"Setpoint":42.9,"Actual":39,}
// ,{"roll_id":"0A1606130207","FilmTension":198.2,"Setpoint":42.8,"Actual":2.8},
// {"roll_id":"0A1606130521","FilmTension":194.4,"Setpoint":42.6,"Actual":41.4,},
// {"roll_id":"0A1607291555","FilmTension":208.6,"Setpoint":42.9,"Actual":45,}
// ,{"roll_id":"0A1607291748","FilmTension":192.2,"Setpoint":42.9,"Actual":41.8,},
// {"roll_id":"0A1607292308","FilmTension":174.9,"Setpoint":42.8,"Actual":38,}
// ,{"roll_id":"0A1607300157","FilmTension":194.2,"Setpoint":42.8,"Actual":42.2,},
// {"roll_id":"0A1607300406","FilmTension":194.5,"Setpoint":42.6,"Actual":41.3,},
// {"roll_id":"0A1607300734","FilmTension":191,"Setpoint":42.7,"Actual":40.5,},
// {"roll_id":"0A1607301245","FilmTension":171.1,"Setpoint":42.9,"Actual":37.6,},
// {"roll_id":"0A1607310425","FilmTension":188.6,"Setpoint":42.7,"Actual":40.3,},
// {"roll_id":"0A1609081528","FilmTension":229.7,"Setpoint":42.8,"Actual":49.9,},
// {"roll_id":"0A1609081821","FilmTension":215.6,"Setpoint":42.8,"Actual":47.1,},
// {"roll_id":"0A1609082155","FilmTension":230.5,"Setpoint":42.8,"Actual":50.3,},
// {"roll_id":"0A1609082300","FilmTension":230.9,"Setpoint":42.8,"Actual":49.8,},
// {"roll_id":"0A1609090252","FilmTension":212.3,"Setpoint":42.8,"Actual":46.1,},

//  ];
 gapWinding=[
{"roll_id":"0A1602221603","w1Tensionp1":185,"w2Tensionp1":172,"w1Tensionp2":160,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":110,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100,"w1Tensionp6":130,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3},
{"roll_id":"0A1602221555","w1Tensionp1":185,"w2Tensionp1":172,"w1Tensionp2":160,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":110,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100,"w1Tensionp6":130,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3},
{"roll_id":"0A1602221599","w1Tensionp1":185,"w2Tensionp1":172,"w1Tensionp2":160,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":110,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100,"w1Tensionp6":130,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3},
{"roll_id":"0A16022215111","w1Tensionp1":185,"w2Tensionp1":172,"w1Tensionp2":160,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":110,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100,"w1Tensionp6":130,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3},
{"roll_id":"0A16022215177","w1Tensionp1":185,"w2Tensionp1":172,"w1Tensionp2":160,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":110,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100,"w1Tensionp6":130,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3
}
 ];
contactWinding=[
{"roll_id":"0A160222150","w1Tensionp1":165,"w2Tensionp1":150,"w1Tensionp2":130,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":156,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100.6,"w1Tensionp6":140,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3
},
{"roll_id":"0A16022217","w1Tensionp1":165,"w2Tensionp1":150,"w1Tensionp2":130,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":156,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100.6,"w1Tensionp6":140,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3
},
{"roll_id":"0A16022218","w1Tensionp1":165,"w2Tensionp1":150,"w1Tensionp2":130,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":156,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100.6,"w1Tensionp6":140,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3
},
{"roll_id":"0A1602221587","w1Tensionp1":165,"w2Tensionp1":150,"w1Tensionp2":130,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":156,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100.6,"w1Tensionp6":140,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3
},
{"roll_id":"0A1602221556","w1Tensionp1":165,"w2Tensionp1":150,"w1Tensionp2":130,"w2Tensionp2":120,"w1Tensionp3":156,"w2Tensionp3":110,"w1Tensionp4":130,"w2Tensionp4":150,"w1Tensionp5":145,"w2Tensionp5":100.6,"w1Tensionp6":140,"w2Tensionp6":140,"w1Tensionp7":135,"w2Tensionp7":135,"w1Tensionp8":128,"w2Tensionp8":128,"w1Tensionp9":121.4,"w2Tensionp9":121.4,"w1Tensionp10":113.6,"w2Tensionp10":113.6,"w1Tensionp11":106.7,"w2Tensionp11":106.7,"w1Tensionp12":0,"w2Tensionp12":100.6,"w1Tensionp13":95.2,"w2Tensionp13":95.2,"w1Tensionp14":90.3,"w2Tensionp14":90.3,"w1Tensionp15":89.6,"w2Tensionp15":89.6,"w1Tensionp16":85,"w2Tensionp16":85,"w1Tensionp17":80.9,"w2Tensionp17":80.9,"w1Tensionp18":79.1,"w2Tensionp18":79.1,"w1Tensionp19":78.6,"w2Tensionp19":78.6,"w1Tensionp20":78.3,"w2Tensionp20":78.3
},
]
//film tension service--> returns fil tension
  constructor(private http:HttpClient) { }
  getAllDataPoints():Observable<Response[]> {
    return this.http.get<Response[]>(`${environment.url_api}/winder/film-tension`);
  }
  // getDataPoint(id:string){
  //   return this.winderData.find(item=>id=== item.roll_id); // busca y devuelve el item del param id
  // }

  //tension control service returns setpoint y actual
  getAllTensionControl(){
    return this.http.get<Response[]>(`${environment.url_api}/winder/tension-control`);

  };
  getAllGapWinding(){
    return this.gapWinding;
  }
   getAllContactWinding(){
    return this.contactWinding;
  }


}
