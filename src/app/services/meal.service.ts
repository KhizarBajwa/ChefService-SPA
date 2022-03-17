import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../models/Meal';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MealService {
    private baseUrl: string = environment.baseUrl + 'api/';

    constructor(private http: HttpClient) { }

    public addMeal(meal: Meal) {
        return this.http.post(this.baseUrl + 'meal', meal);
    }

    public updateMeal(id: number, meal: Meal) {
        return this.http.put(this.baseUrl + 'meal/' + id, meal);
    }

    public getMeal(): Observable<Meal[]> {
        return this.http.get<Meal[]>(this.baseUrl + `meal`);
    }

    public deleteMeal(id: number) {
        return this.http.delete(this.baseUrl + 'meal/' + id);
    }

    public getMealById(id: number): Observable<Meal> {
        return this.http.get<Meal>(this.baseUrl + 'meal/' + id);
    }

    public search(name: string): Observable<Meal[]> {
        return this.http.get<Meal[]>(`${this.baseUrl}meal/search/${name}`);
    }
}
