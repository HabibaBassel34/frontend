
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = "http://backend-habiba34-dev.apps.rm3.7wse.p1.openshiftapps.com/search";

  constructor(private http: HttpClient) {}

  search(params: any) {
    return this.http.get(this.apiUrl, {
      params,
      withCredentials: true
    });
  }
}
