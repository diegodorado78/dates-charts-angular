import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WinderService implements OnInit {
  ngOnInit(): void {}
  constructor(private http: HttpClient) {}

  getAllTensionControl(selectedDate) {
    const url = `${environment.url_api}/winder/tension-control`;
    let queryParams = new HttpParams({ fromObject: selectedDate });
    return this.http.get<any>(url, { params: queryParams });
  }
  getAllFilmTension(selectedDate) {
    const url = `${environment.url_api}/winder/film-tension`;
    let queryParams = new HttpParams({ fromObject: selectedDate });
    return this.http.get<any>(url, { params: queryParams });
  }
  getAllGapWinding(selectedDate) {
    const url = `${environment.url_api}/winder/gap-winding`;
    let queryParams = new HttpParams({ fromObject: selectedDate });
    return this.http.get<any>(url, { params: queryParams })
  }
  getAllContactWinding(selectedDate) {
    const url = `${environment.url_api}/winder/contact-winding`;
    let queryParams = new HttpParams({ fromObject: selectedDate });
    return this.http.get<any>(url, { params: queryParams })
  }
  getAlltensionPressureSettings(selectedDate){
    const url = `${environment.url_api}/winder/pressure-settings`;
    let queryParams = new HttpParams({ fromObject: selectedDate });
    return this.http.get<any>(url, { params: queryParams })
  }
  getAlltensionRollChange(selectedDate) {
    const url = `${environment.url_api}/winder/tension-roll-change`;
    let queryParams = new HttpParams({ fromObject: selectedDate });
    return this.http.get<any>(url, { params: queryParams })
  }


}
