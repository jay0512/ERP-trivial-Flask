import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from 'src/beans/Location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationAPIService {

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<Location[]> {
    let url = environment.api_url + '/locations';
    return this.http.get<Location[]>(url);
  }

  addLocation(location: Location) {
    let url = environment.api_url + '/locations';
    return this.http.post(url, location);
  }

  updateLocation(location: Location) {
    let url = environment.api_url + '/locations';
    return this.http.put(url, location);
  }
}
