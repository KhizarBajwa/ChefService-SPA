import { RequestAMeal } from './../models/RequestAMeal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RequestAMealService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public addRequestAMeal(requestAMeal: RequestAMeal) {
        return this.http.post(this.baseUrl + 'requestAMeal', requestAMeal);
    }

    public updateRequestAMeal(id: number, requestAMeal: RequestAMeal) {
        return this.http.put(this.baseUrl + 'requestAMeal/' + id, requestAMeal);
    }

    public getRequestAMeal(): Observable<RequestAMeal[]> {
        return this.http.get<RequestAMeal[]>(this.baseUrl + `requestAMeal`);
    }

    public deleteRequestAMeal(id: number) {
        return this.http.delete(this.baseUrl + 'requestAMeal/' + id);
    }

    public getRequestAMealById(id: number): Observable<RequestAMeal> {
        return this.http.get<RequestAMeal>(this.baseUrl + 'requestAMeal/' + id);
    }

    public search(name: string): Observable<RequestAMeal[]> {
        return this.http.get<RequestAMeal[]>(`${this.baseUrl}requestAMeal/search/${name}`);
    }
}
