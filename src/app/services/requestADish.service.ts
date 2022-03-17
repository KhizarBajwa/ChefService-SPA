import { RequestADish } from './../models/RequestADish';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RequestADishService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public addRequestADish(requestADish: RequestADish) {
        return this.http.post(this.baseUrl + 'Categories', requestADish);
    }

    public updateRequestADish(id: number, requestADish: RequestADish) {
        return this.http.put(this.baseUrl + 'categories/' + id, requestADish);
    }

    public getRequestADish(): Observable<RequestADish[]> {
        return this.http.get<RequestADish[]>(this.baseUrl + `categories`);
    }

    public deleteRequestADish(id: number) {
        return this.http.delete(this.baseUrl + 'categories/' + id);
    }

    public getRequestADishById(id: number): Observable<RequestADish> {
        return this.http.get<RequestADish>(this.baseUrl + 'categories/' + id);
    }

    public search(name: string): Observable<RequestADish[]> {
        return this.http.get<RequestADish[]>(`${this.baseUrl}categories/search/${name}`);
    }
}
