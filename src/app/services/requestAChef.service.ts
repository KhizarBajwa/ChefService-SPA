import { RequestAChef } from './../models/RequestAChef';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestAChefService {
  private baseUrl: string = environment.baseUrl + 'api/';

  constructor(private http: HttpClient) { }

  public addRequestAChef(requestAChef: RequestAChef) {
    return this.http.post(this.baseUrl + 'Categories', requestAChef);
  }

  public updateRequestAChef(id: number, requestAChef: RequestAChef) {
    return this.http.put(this.baseUrl + 'categories/' + id, requestAChef);
  }

  public getRequestAChef(): Observable<RequestAChef[]> {
    return this.http.get<RequestAChef[]>(this.baseUrl + `categories`);
  }

  public deleteRequestAChef(id: number) {
    return this.http.delete(this.baseUrl + 'categories/' + id);
  }

  public getRequestAChefById(id: number): Observable<RequestAChef> {
    return this.http.get<RequestAChef>(this.baseUrl + 'categories/' + id);
  }

  public search(name: string): Observable<RequestAChef[]> {
    return this.http.get<RequestAChef[]>(`${this.baseUrl}categories/search/${name}`);
  }
}
