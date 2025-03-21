import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IfoodService {
  constructor(private http: HttpClient) { }

  getUserCode(): Observable<any> {
    return this.http.post('http://localhost:8080/ifood/userCode', {});
  }

  getToken(userCode: string): Observable<any> {
    return this.http.post('http://localhost:8080/ifood/token', { userCode });
  }
}
