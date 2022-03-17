import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {WResponse} from '../../winderResponse.model' ;
import {Response} from '../../response.model' ;


@Injectable({
  providedIn: 'root'
})
export class WinderService {
 winderData:Response[]= [
{"rollId":"0A1602221603","filmTension":132,"setPoint":42.8,"actual":29.4,},
{"rollId":"0A1602221748","filmTension":139.1,"setPoint":42.9,"actual":31.4,},
{"rollId":"0A1602221932","filmTension":135.3,"setPoint":42.8,"actual":30,},
{"rollId":"0A1602222327","filmTension":184.6,"setPoint":42.9,"actual":40.6,},
{"rollId":"0A1602230334","filmTension":119.6,"setPoint":42.8,"actual":26.5,},
{"rollId":"0A1602231554","filmTension":202.4,"setPoint":42.8,"actual":43.8,},
{"rollId":"0A1602232120","filmTension":135.2,"setPoint":42.8,"actual":30.1,},
{"rollId":"0A1602240211","filmTension":192.3,"setPoint":42.9,"actual":42.3,},
{"rollId":"0A1602240918","filmTension":136.8,"setPoint":42.8,"actual":31.3,},
{"rollId":"0A1602241019","filmTension":217.4,"setPoint":42.8,"actual":47.5,},
{"rollId":"0A1602241140","filmTension":146,"setPoint":42.8,"actual":32.9,},
{"rollId":"0A1602242455","filmTension":145,"setPoint":42.8,"actual":32.5,},
{"rollId":"0A1602250854","filmTension":138.9,"setPoint":42.8,"actual":31.3,},
{"rollId":"0A1602251419","filmTension":150.5,"setPoint":42.8,"actual":33.2,},
{"rollId":"0A1604240933","filmTension":44.4,"setPoint":42.8,"actual":11.6,},
{"rollId":"0A1604241245","filmTension":58.4,"setPoint":42.8,"actual":14.6,},
{"rollId":"0A1604241404","filmTension":49.5,"setPoint":42.8,"actual":12.9,},
{"rollId":"0A1604241701","filmTension":67.4,"setPoint":42.8,"actual":15.8,},
{"rollId":"0A1604242329","filmTension":82,"setPoint":42.8,"actual":19.1,},
{"rollId":"0A1604250142","filmTension":92.3,"setPoint":42.8,"actual":20.9,},
{"rollId":"0A1604250643","filmTension":146.4,"setPoint":42.7,"actual":31.1,},
{"rollId":"0A1604251351","filmTension":128,"setPoint":42.8,"actual":28.8,},
{"rollId":"0A1604251719","filmTension":139.4,"setPoint":42.8,"actual":31,},
{"rollId":"0A1604251904","filmTension":145,"setPoint":42.8,"actual":31.7,},
{"rollId":"0A1606101615","filmTension":198.5,"setPoint":42.8,"actual":43,},
{"rollId":"0A1606101822","filmTension":224.9,"setPoint":42.9,"actual":48.9,},
{"rollId":"0A1606102326","filmTension":245.8,"setPoint":42.8,"actual":52.9,},
{"rollId":"0A1606110251","filmTension":223.9,"setPoint":42.8,"actual":48.4,},
{"rollId":"0A1606110733","filmTension":186.4,"setPoint":42.7,"actual":39.8,},
{"rollId":"0A1606111154","filmTension":187.7,"setPoint":42.8,"actual":40.9,},
{"rollId":"0A1606111514","filmTension":207.7,"setPoint":42.8,"actual":44.9,},
{"rollId":"0A1606111826","filmTension":178.5,"setPoint":42.9,"actual":39.2,},
{"rollId":"0A1606112242","filmTension":175.6,"setPoint":42.9,"actual":38.9,},
{"rollId":"0A1606112449","filmTension":192.3,"setPoint":42.9,"actual":41.6,},
{"rollId":"0A1606120256","filmTension":192.3,"setPoint":42.9,"actual":42.1,},
{"rollId":"0A1606120609","filmTension":193.9,"setPoint":42.7,"actual":41.2,},
{"rollId":"0A1606121157","filmTension":169.3,"setPoint":42.8,"actual":37.1,},
{"rollId":"0A1606121507","filmTension":180.7,"setPoint":42.8,"actual":39.4,},
{"rollId":"0A1606121938","filmTension":206.8,"setPoint":42.8,"actual":44.4,},
{"rollId":"0A1606122253","filmTension":178,"setPoint":42.9,"actual":39,},
{"rollId":"0A1606130207","filmTension":198.2,"setPoint":42.8,"actual":2.8},
{"rollId":"0A1606130521","filmTension":194.4,"setPoint":42.6,"actual":41.4,},
{"rollId":"0A1607291555","filmTension":208.6,"setPoint":42.9,"actual":45,},
{"rollId":"0A1607291748","filmTension":192.2,"setPoint":42.9,"actual":41.8,},
{"rollId":"0A1607292308","filmTension":174.9,"setPoint":42.8,"actual":38,},
{"rollId":"0A1607300157","filmTension":194.2,"setPoint":42.8,"actual":42.2,},
{"rollId":"0A1607300406","filmTension":194.5,"setPoint":42.6,"actual":41.3,},
{"rollId":"0A1607300734","filmTension":191,"setPoint":42.7,"actual":40.5,},
{"rollId":"0A1607301245","filmTension":171.1,"setPoint":42.9,"actual":37.6,},
{"rollId":"0A1607310425","filmTension":188.6,"setPoint":42.7,"actual":40.3,},
{"rollId":"0A1609081528","filmTension":229.7,"setPoint":42.8,"actual":49.9,},
{"rollId":"0A1609081821","filmTension":215.6,"setPoint":42.8,"actual":47.1,},
{"rollId":"0A1609082155","filmTension":230.5,"setPoint":42.8,"actual":50.3,},
{"rollId":"0A1609082300","filmTension":230.9,"setPoint":42.8,"actual":49.8,},
{"rollId":"0A1609090252","filmTension":212.3,"setPoint":42.8,"actual":46.1,},

 ];

 gapWinding:WResponse[]=[
{"rollId":"0A1602221603","w1TensionP1":185,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":100,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221555","w1TensionP1":185,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":100,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221599","w1TensionP1":185,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":100,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022215111","w1TensionP1":185,"w2TensionP1":172,"w1TensionP2":160,"w2TensionP2":100,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022215177","w1TensionP1":170,"w2TensionP1":172,"w1TensionP2":160,"w2TensionP2":50,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221488","w1TensionP1":170,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":50,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022215122","w1TensionP1":170,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":80,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022215155","w1TensionP1":160,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":80,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221488","w1TensionP1":170,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":50,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022215122","w1TensionP1":170,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":80,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022215155","w1TensionP1":160,"w2TensionP1":152,"w1TensionP2":120,"w2TensionP2":80,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100,"w1TensionP6":130,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3}
 ];
contactWinding:WResponse[]=[
{"rollId":"0A160222150","w1TensionP1":120,"w2TensionP1":50,"w1TensionP2":100,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022217","w1TensionP1":115,"w2TensionP1":80,"w1TensionP2":100,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022218","w1TensionP1":120,"w2TensionP1":50,"w1TensionP2":120,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221587","w1TensionP1":110,"w2TensionP1":80,"w1TensionP2":120,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221556","w1TensionP1":115,"w2TensionP1":50,"w1TensionP2":130,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A160222150","w1TensionP1":120,"w2TensionP1":80,"w1TensionP2":130,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022217","w1TensionP1":125,"w2TensionP1":50,"w1TensionP2":120,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A16022218","w1TensionP1":120,"w2TensionP1":80,"w1TensionP2":120,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221587","w1TensionP1":115,"w2TensionP1":50,"w1TensionP2":100,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":156,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3},
{"rollId":"0A1602221556","w1TensionP1":120,"w2TensionP1":80,"w1TensionP2":100,"w2TensionP2":60,"w1TensionP3":156,"w2TensionP3":110,"w1TensionP4":130,"w2TensionP4":150,"w1TensionP5":145,"w2TensionP5":100.6,"w1TensionP6":140,"w2TensionP6":140,"w1TensionP7":135,"w2TensionP7":135,"w1TensionP8":128,"w2TensionP8":128,"w1TensionP9":121.4,"w2TensionP9":121.4,"w1TensionP10":113.6,"w2TensionP10":113.6,"w1TensionP11":106.7,"w2TensionP11":106.7,"w1TensionP12":0,"w2TensionP12":100.6,"w1TensionP13":95.2,"w2TensionP13":95.2,"w1TensionP14":90.3,"w2TensionP14":90.3,"w1TensionP15":89.6,"w2TensionP15":89.6,"w1TensionP16":85,"w2TensionP16":85,"w1TensionP17":80.9,"w2TensionP17":80.9,"w1TensionP18":79.1,"w2TensionP18":79.1,"w1TensionP19":78.6,"w2TensionP19":78.6,"w1TensionP20":78.3,"w2TensionP20":78.3}
]
//film tension service--> returns fil tension
  constructor(private http:HttpClient) { }

  getAllDataPoints():Response[] {
      return this.winderData;
    //return this.http.get<Response[]>(`${environment.url_api}/winder/film-tension`);
  }
  // getDataPoint(id:string){
  //   return this.winderData.find(item=>id=== item.roll_id); // busca y devuelve el item del param id
  // }

  //tension control service returns setpoint y actual
    getAllTensionControl(){
    // return this.http.get<Response[]>(`${environment.url_api}/winder/tension-control`);
    }
    getAllGapWinding(){
    // return this.http.get<WResponse[]>(`${environment.url_api}/winder/gap-winding`)}
    return this.gapWinding;
    }

    getAllContactWinding(){
    // return this.http.get<WResponse[]>(`${environment.url_api}/winder/contact-winding`)}
    return this.contactWinding;
    }

}
