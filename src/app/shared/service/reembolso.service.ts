import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReembolsoService {

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get("./assets/data/requests.json");
  }
}
